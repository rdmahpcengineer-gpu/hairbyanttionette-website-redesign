import express from 'express';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TOOLS_SERVER_URL = process.env.TOOLS_SERVER_URL || `http://localhost:${PORT}/webhooks/tools`;
const VAPI_API_KEY = process.env.VAPI_API_KEY;
const GOOGLE_CREDENTIALS_PATH = process.env.GOOGLE_CREDENTIALS_PATH || './credentials.json';
const LOGS_DIR = process.env.LOGS_DIR || './logs';
const CALENDAR_ID = process.env.CALENDAR_ID || 'primary';

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

let googleAuth = null;
let calendar = null;

async function initializeGoogleCalendar() {
  try {
    const creds = JSON.parse(fs.readFileSync(GOOGLE_CREDENTIALS_PATH, 'utf8'));
    const auth = new GoogleAuth({
      credentials: creds,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
    googleAuth = auth;
    const client = await auth.getClient();
    calendar = google.calendar({ version: 'v3', auth: client });
    console.log('Google Calendar initialized');
  } catch (err) {
    console.error('Failed to initialize Google Calendar:', err.message);
  }
}

function logConversation(entry) {
  const timestamp = new Date().toISOString();
  const logEntry = { ...entry, loggedAt: timestamp };
  const logFile = path.join(LOGS_DIR, `${timestamp.replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(logFile, JSON.stringify(logEntry, null, 2));
  console.log('Conversation logged:', logFile);
}

async function findAvailableSlots(date, durationMinutes) {
  if (!calendar) return { available: false, error: 'Calendar not initialized' };

  try {
    const startOfDay = new Date(date + 'T09:00:00');
    const endOfDay = new Date(date + 'T18:00:00');

    const response = await calendar.events.list({
      calendarId: CALENDAR_ID,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busySlots = response.data.items.map((event) => ({
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
    }));

    const availableSlots = [];
    const slotDuration = durationMinutes || 60;
    let currentTime = new Date(startOfDay);
    currentTime.setHours(currentTime.getHours() + 1);

    while (currentTime < endOfDay) {
      const slotEnd = new Date(currentTime.getTime() + slotDuration * 60000);
      if (slotEnd > endOfDay) break;

      const isBusy = busySlots.some((busy) => {
        const busyStart = new Date(busy.start);
        const busyEnd = new Date(busy.end);
        return currentTime < busyEnd && slotEnd > busyStart;
      });

      if (!isBusy) {
        availableSlots.push(currentTime.toISOString());
      }

      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return { available: availableSlots.length > 0, slots: availableSlots };
  } catch (err) {
    console.error('Error checking availability:', err.message);
    return { available: false, error: err.message };
  }
}

async function createCalendarEvent(summary, startTime, endTime, attendeeName, attendeePhone) {
  if (!calendar) return { success: false, error: 'Calendar not initialized' };

  try {
    const event = {
      summary: summary,
      startTime: { dateTime: startTime, timeZone: 'America/Chicago' },
      endTime: { dateTime: endTime, timeZone: 'America/Chicago' },
      attendees: [{ email: attendeePhone + '@vapi.ai' }],
      extendedProperties: {
        private: {
          callerName: attendeeName,
          callerPhone: attendeePhone,
          source: 'vapi-voice-assistant',
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: CALENDAR_ID,
      requestBody: event,
    });

    return { success: true, eventId: response.data.id, htmlLink: response.data.htmlLink };
  } catch (err) {
    console.error('Error creating calendar event:', err.message);
    return { success: false, error: err.message };
  }
}

app.post('/webhooks/tools', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.toolCallList) {
      return res.status(400).json({ error: 'Invalid request' });
    }

    const results = [];

    for (const toolCall of message.toolCallList) {
      let result;

      switch (toolCall.name) {
        case 'find_available_slots': {
          const { date, durationMinutes } = toolCall.parameters;
          result = await findAvailableSlots(date, durationMinutes);
          break;
        }
        case 'create_calendar_event': {
          const { summary, startTime, endTime, attendeeName, attendeePhone } = toolCall.parameters;
          result = await createCalendarEvent(summary, startTime, endTime, attendeeName, attendeePhone);
          break;
        }
        case 'conversation_log': {
          logConversation(toolCall.parameters);
          result = { success: true, message: 'Logged successfully' };
          break;
        }
        case 'endCall': {
          result = { success: true, message: 'Call ended' };
          break;
        }
        default:
          result = { success: false, error: `Unknown tool: ${toolCall.name}` };
      }

      results.push({
        toolCallId: toolCall.id,
        result: JSON.stringify(result),
      });
    }

    res.json({ results });
  } catch (err) {
    console.error('Error handling tool call:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/webhooks/vapi', (req, res) => {
  const event = req.body;
  console.log('Vapi webhook received:', event.type || event);
  res.status(200).send('OK');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', calendarInitialized: !!calendar, uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  initializeGoogleCalendar();
});