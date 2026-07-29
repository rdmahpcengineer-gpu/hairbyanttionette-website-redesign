# Hair by Antoinette Cierra — Vapi AI Assistant

Appointment booking and scheduling AI assistant for Hair by Antoinette Cierra salon in Allen, TX.

## Features

- **Phone-based booking** — Callers can book appointments by phone using natural speech.
- **Female voice** — The assistant uses a female voice (Vapi "Emma") for a warm, professional feel.
- **Pricing knowledge** — Knows all service prices from the salon website, including color, styling, and add-ons.
- **Google Calendar integration** — Checks availability and creates appointment events automatically.
- **Conversation logging** — Every call interaction is logged to the `logs/` directory for records.

## Project Structure

```
antionnte/
├── kilo.jsonc              # Kilo workspace config with Vapi MCP
├── assistant-prompt.md     # System prompt for the AI assistant
├── assistant-payload.json  # Vapi assistant JSON configuration
├── server.js               # Webhook server for Google Calendar + logging
├── package.json            # Node.js project dependencies
├── .env.example            # Environment variables template
├── tools/                  # Tool definitions directory
└── logs/                   # Conversation logs directory
```

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

If npm cache has permission issues, run:

```bash
sudo chown -R $(whoami) ~/.npm
npm cache clean --force
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Edit `.env`:

- `VAPI_API_KEY` — Your Vapi API key (same as VAPI_TOKEN)
- `GOOGLE_CREDENTIALS_PATH` — Path to your Google Calendar service account credentials JSON
- `CALENDAR_ID` — Your Google Calendar ID (usually `primary`)
- `PORT` — Server port (default `3000`)

### 3. Set up Google Calendar

1. Go to the Google Cloud Console.
2. Create a service account and enable the Google Calendar API.
3. Download the credentials JSON and place it at the path configured in `GOOGLE_CREDENTIALS_PATH`.
4. Share your salon calendar with the service account email (optional for `primary` calendar).

### 4. Configure the Vapi assistant

1. Your assistant has been created with ID `86bfa12d-7f94-47e7-ae95-70af84d878bc`. You can view it in the Vapi dashboard at https://dashboard.vapi.ai/assistants/86bfa12d-7f94-47e7-ae95-70af84d878bc.

2. Your Vapi phone number +14353480415 is already active (ID: `24713b5e-d088-4bfe-9b32-d8172e457a40`) and attached to the assistant.

3. Create the Google Calendar tools by deploying the webhook server and running the tool creation scripts in `tools/create-tools.sh`.

4. Once the tool IDs are created, update the assistant in the Vapi dashboard to attach those tool IDs.

5. Update the `server.url` in the tool configurations to point to your deployed webhook server URL.

### 5. Start the server

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

### 6. Deploy the webhook server

The webhook server (`server.js`) must be publicly accessible for Vapi to call it. Deploy to:

- Railway
- Vercel
- Fly.io
- Any Node.js hosting service

Update the `server.url` in `assistant-payload.json` to match your deployed URL.

## Vapi MCP

The Vapi MCP is already configured in `kilo.jsonc` for the Kilo workspace, enabling AI agents to interact with the Vapi API directly.

## Skills Installed

The following Vapi skills are installed in `.agents/skills/`:

- `create-assistant` — Create Vapi assistant payloads
- `create-call` — Initiate outbound and scheduled calls
- `create-tool` — Build custom tools (Google Calendar, etc.)
- `create-squad` — Build multi-assistant workflows
- `vapi-prompt-builder` — Build and optimize voice agent prompts
