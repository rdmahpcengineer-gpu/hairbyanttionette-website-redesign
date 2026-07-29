'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleChat = useCallback(() => setChatOpen((v) => !v), []);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen((v) => !v), []);
  const igHandle = 'hair_by_antoinette_cierra';
  const igUrl = `https://www.instagram.com/${igHandle}/`;
  const bookUrl = 'tel:+14353480415';

  return (
    <>
      <nav className="nav" data-nav>
        <a className="nav-brand" href="#top">
          <span>Antoinette Cierra</span>
          <span>Hair · Allen, Texas</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#portfolio">Portfolio</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#policies">Policies</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="btn btn-primary" href={bookUrl}>Book · (435) 348-0415</a>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
          <span className={`mobile-menu-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`mobile-menu-bar ${mobileMenuOpen ? 'open' : ''}`} />
          <span className={`mobile-menu-bar ${mobileMenuOpen ? 'open' : ''}`} />
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <a className="nav-link" href="#services" onClick={toggleMobileMenu}>Services</a>
            <a className="nav-link" href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a>
            <a className="nav-link" href="#about" onClick={toggleMobileMenu}>About</a>
            <a className="nav-link" href="#policies" onClick={toggleMobileMenu}>Policies</a>
            <a className="nav-link" href="#contact" onClick={toggleMobileMenu}>Contact</a>
            <a className="btn btn-primary" href={bookUrl} onClick={toggleMobileMenu}>Book · (435) 348-0415</a>
          </div>
        </div>
      )}

      <section className="hero" id="top" data-hero>
        <div data-hero-media>
          <video
            data-hero-video
            muted
            loop
            autoPlay
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%', filter: 'sepia(0.24) saturate(0.8) contrast(1.06) brightness(0.82)', position: 'absolute', inset: 0 }}
          >
            <source src="https://videos.pexels.com/video-files/7876273/7876273-uhd_1440_2732_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <div>
            <span>By appointment · Watters Creek</span>
          </div>
          <h1 className="hero-title">
            <span>The art of</span>
            <span style={{ fontStyle: 'italic', paddingLeft: 'clamp(28px, 7vw, 140px)' }}>finished hair</span>
          </h1>
          <div>
            <p className="hero-sub">Silk presses, precision cutting, colour and extensions for women who want the result to hold — long after the chair. Fifteen years of hands, one client at a time.</p>
            <div>
              <a className="btn btn-primary" href={bookUrl}>Call to book</a>
              <a className="btn btn-secondary" href="#services">The menu</a>
              <a href="tel:+14353480415" className="phone-link">(435) 348-0415</a>
            </div>
          </div>
        </div>
      </section>

      <section data-manifesto style={{ background: '#171615', color: '#f3f2f2' }}>
        <div style={{ height: '100svh', minHeight: '560px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 clamp(20px, 7vw, 140px)' }}>
          <span className="section-label" style={{ marginBottom: 'clamp(28px, 5vh, 56px)' }}>I — The standard</span>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: 'clamp(28px, 4.6vw, 66px)', lineHeight: 1.18, letterSpacing: '-0.01em', margin: 0 }}>
            <span>Hair is not a service.</span>
            <span>It is a record of</span>
            <span style={{ fontStyle: 'italic', color: '#e1ad66' }}>how carefully</span>
            <span>someone listened.</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(32px, 5vh, 60px)' }}>
            <span style={{ width: '64px', height: '1px', background: 'rgba(243,242,242,0.3)' }} />
            <span style={{ fontStyle: 'italic', fontSize: '14px', color: 'rgba(243,242,242,0.62)' }}>Antoinette Cierra</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
            <h2 className="heading">The method</h2>
            <span className="section-label">II — How the work is done</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
            {[
              { num: '01', title: 'Consultation first', desc: 'Every appointment opens with a conversation and a hands-on read of your density, porosity and history. Nothing is decided in advance. If a look will not hold on your hair, you will be told before the first section is parted.' },
              { num: '02', title: 'Integrity over speed', desc: 'Low tension, measured heat, bond-building where it earns its place. One guest is booked at a time, which is why the chair is never rushed and why the calendar closes early. The hair leaves stronger than it arrived.' },
              { num: '03', title: 'It lives at home', desc: 'You leave with a written regimen — product, wrap, wash cadence — and a standing line for questions between visits. A style that only works on the day it was done is not finished work.' },
            ].map((step) => (
              <div key={step.num} style={{ padding: `0 clamp(20px, 2.6vw, 44px)`, borderRight: '1px solid var(--color-divider)' }}>
                <span className="step-number">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
          <figure style={{ margin: 'clamp(48px, 7vh, 88px) 0 0', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
            <Image src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=2000&q=80" alt="The studio at Watters Creek" width="1200" height="600" style={{ width: '100%', height: 'clamp(280px, 54vh, 560px)', objectFit: 'cover', display: 'block' }} />
            <figcaption style={{ margin: '14px 0 0', fontStyle: 'italic', fontSize: '12.5px', color: 'var(--color-neutral-600)' }}>The studio — Suite 200, Watters Creek, Allen.</figcaption>
          </figure>
        </div>
      </section>

      <section id="services" className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(16px, 2vh, 24px)' }}>
            <h2 className="heading">Services &amp; pricing</h2>
            <span className="section-label">III — The menu</span>
          </div>
          <p style={{ margin: '0 0 clamp(44px, 6vh, 72px)', maxWidth: '62ch', fontSize: '14px', lineHeight: 1.85, color: 'var(--color-neutral-700)' }}>Prices are starting points and are confirmed at consultation; density, length and prior chemical history move the number. A non-refundable deposit of $50 holds every appointment and is applied to your total.</p>
          <div className="grid-services">
            {[
              { label: 'Silk press & natural hair', items: [
                ['Signature Silk Press', '$135', 'Clarify, deep condition, blow-out and press. Movement and shine with the curl pattern intact.'],
                ['Silk Press & Precision Trim', '$155', 'The press above, with ends taken down cleanly once the hair is straight.'],
                ['Natural Style-Out', '$95', 'Twist-out, braid-out or roller set, finished and separated.'],
                ['Deep Condition & Scalp Ritual', '$65', 'Detox, steam and a fifteen-minute massage. Booked alone or as an add-on.'],
                ['Bond-Building Treatment', '$50', 'Add-on for compromised or colour-treated hair.'],
              ]},
              { label: 'Cutting', items: [
                ['Precision Cut & Style', '$110', 'Shape built to your growth pattern, cut wet, refined dry.'],
                ['Curl-Specific Dry Cut', '$125', 'Curl by curl, in its natural state, with a wash and diffuse to finish.'],
                ['Restorative Trim', '$55', 'Dusting only — length kept, ends corrected.'],
                ['Fringe Reshape', '$35', 'Complimentary within three weeks of a cut.'],
              ]},
              { label: 'Colour', items: [
                ['Gloss & Tone', '$75', 'Refresh depth and shine between full colour appointments.'],
                ['Root Retouch', '$130', 'New growth only, to two inches.'],
                ['All-Over Colour', '$175', 'Single process, root to end, with a bond additive included.'],
                ['Partial Balayage', '$250', 'Hand-painted around the face and crown, glossed to finish.'],
                ['Full Balayage', '$325', 'Full head, gloss and style. Four to five hours.'],
                ['Colour Correction', 'from $150/hr', 'Quoted after a paid consultation. Often staged across visits.'],
              ]},
              { label: 'Extensions & wigs', items: [
                ['Traditional Sew-In', '$325', 'Braid-down, install and cut. Hair not included.'],
                ['Hybrid / Versatile Sew-In', '$375', 'Full movement and parting, closure or leave-out.'],
                ['Tape-In Installation', '$400', 'Full head, blended and cut in. Move-up every six to eight weeks.'],
                ['Wig Install & Customization', '$250', 'Bleached knots, plucked hairline, cut and styled.'],
                ['Extension Move-Up', '$175', 'Removal, wash, treatment and reinstall of your existing hair.'],
                ['Removal & Restorative Wash', '$85', 'Take-down, detangle, protein and moisture. Waived when rebooking same day.'],
              ]},
              { label: 'Bridal & event', items: [
                ['Bridal Trial', '$150', 'Two hours, photographed from every angle, notes kept on file.'],
                ['Bridal, Day-Of', '$225', 'In studio or on location, with touch-up kit.'],
                ['Bridal Party, per guest', '$95', 'Minimum of three. Schedule built around the ceremony time.'],
                ['Special Occasion Style', '$125', 'Galas, portraits, milestones. Updos and pressed sets.'],
                ['On-Location Travel', 'from $100', 'Within the DFW metroplex; quoted beyond.'],
              ]},
            ].map((category) => (
              <div key={category.label}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', paddingBottom: '12px', borderBottom: '1px solid var(--color-text)' }}>
                  <span className="step-number">{category.label.split(' ')[0]}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '26px', letterSpacing: '0.01em', margin: 0 }}>{category.label}</h3>
                </div>
                {category.items.map((item) => (
                  <div key={item[0]} className="service-row">
                    <div><h4 className="service-name">{item[0]}</h4><p className="service-desc">{item[2]}</p></div>
                    <span className="service-price">{item[1]}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" data-gallery style={{ position: 'relative', background: '#171615', color: '#f3f2f2', overflow: 'hidden' }}>
        <div style={{ height: '100svh', minHeight: '560px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', padding: '0 clamp(20px, 4vw, 56px) clamp(24px, 4vh, 44px)' }}>
            <h2 className="heading" style={{ color: '#f6f4f1' }}>Selected work</h2>
            <a href={igUrl} target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.34em', textTransform: 'uppercase', color: '#a06f24' }}>View on Instagram</a>
          </div>
          <div className="gallery-track">
            {[
              ['https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=900&q=80', 'Natural · Style-out'],
              ['https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80', 'Extensions · Hybrid sew-in'],
              ['https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900&q=80', 'Colour · Gloss & tone'],
              ['https://images.unsplash.com/photo-1554519934-e32b1629d9ee?w=900&q=80', 'Silk press · Precision trim'],
              ['https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=900&q=80', 'Event · Sculpted set'],
              ['https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?w=900&q=80', 'Colour · Partial balayage'],
              ['https://images.unsplash.com/photo-1470259078422-826894b933aa?w=900&q=80', 'Editorial · Campaign'],
              ['https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&q=80', 'Colour · Full balayage'],
            ].map(([src, caption]) => (
              <figure key={src} className="gallery-item">
                <div className="plate" style={{ borderColor: '#242220', overflow: 'hidden' }}>
                  <Image src={src} alt={caption} width="400" height="400" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }} />
                </div>
                <figcaption className="gallery-caption">{caption}</figcaption>
              </figure>
            ))}
            <figure className="gallery-item" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '18px', paddingLeft: 'clamp(12px, 2vw, 28px)', borderLeft: '1px solid rgba(243,242,242,0.16)' }}>
              <p style={{ margin: 0, fontFamily: 'var(--font-heading)', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(24px, 2.4vw, 34px)', lineHeight: 1.25, color: '#f6f4f1' }}>More of the work lives on Instagram, posted the day it leaves the chair.</p>
              <a href={igUrl} target="_blank" rel="noopener" style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e1ad66' }}>@{igHandle}</a>
            </figure>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
            <h2 className="heading">Meet Antoinette</h2>
            <span className="section-label">V — The stylist</span>
          </div>
          <div className="about-grid">
            <figure style={{ margin: 0 }}>
              <div className="plate" style={{ overflow: 'hidden' }}>
                <Image src="/uploads/pasted-1785280259095-0.png" alt="Antoinette Cierra in the studio" width="600" height="800" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%', display: 'block' }} />
              </div>
            </figure>
            <div className="about-text">
              <p style={{ margin: '0 0 var(--space-6)', fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: 'clamp(24px, 2.6vw, 38px)', lineHeight: 1.3, letterSpacing: '-0.005em', textWrap: 'pretty' }}>Licensed in Texas, trained on textured hair, and stubborn about the things that do not photograph — elasticity, edges, the way a part sits three weeks later.</p>
              <div style={{ columns: '2', columnGap: 'clamp(24px, 3vw, 44px)', columnRule: '1px solid var(--color-divider)', fontSize: '14px', lineHeight: 1.85, textAlign: 'justify', hyphens: 'auto', color: 'var(--color-neutral-800)' }}>
                <p style={{ margin: '0 0 1em' }}>Antoinette Cierra keeps a single-chair studio inside Watters Creek in Allen — a deliberate choice. One guest at a time means the consultation is unhurried, the timing is honest, and nobody is left processing while another head is started.</p>
                <p style={{ margin: '0 0 1em' }}>Her practice is built on textured hair: silk presses that swing without heat damage, sew-ins set at a tension the scalp can live with, and colour formulated around what the hair has already survived. Precision cutting and bridal work round out the book.</p>
                <p style={{ margin: 0 }}>Clients come from Allen, Plano, McKinney and Frisco, and most have been coming for years. New guests begin with a consultation — in person or by video — before anything is booked.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginTop: 'clamp(32px, 4vh, 52px)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--color-text)' }}>
                {[['15', 'Years behind the chair'], ['01', 'Guest at a time'], ['TX', 'TDLR licensed']].map(([num, label]) => (
                  <div key={num}><span className="stat-number">{num}</span><span className="stat-label">{label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
            <h2 className="heading">In their words</h2>
            <span className="section-label">VI — Testimonials</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
            {[
              ['"Three weeks later it still moved like it did the day I left. I have never had a press hold like that."', 'Danielle R. · Plano'],
              ['"She told me no on the colour I asked for and gave me something better. That is the whole reason I stay."', 'Simone A. · Allen'],
              ['"My install has never once been tight, and my edges have grown back in since I started seeing her."', 'Kenya B. · McKinney'],
            ].map(([quote, author]) => (
              <blockquote key={author} style={{ margin: 0, padding: '0 clamp(20px, 2.6vw, 44px) 0 0', borderRight: '1px solid var(--color-divider)' }}>
                <p className="testimonial">{quote}</p>
                <footer className="testimonial-author">{author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="policies" style={{ background: '#171615', color: '#f3f2f2' }} className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
            <h2 className="heading" style={{ color: '#f6f4f1' }}>Before you book</h2>
            <span className="section-label" style={{ color: '#a06f24' }}>VII — Policies</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 0 }}>
            {[
              ['01', 'Deposits', 'A $50 non-refundable deposit secures every appointment and is credited to your service. Bridal reservations require $100.'],
              ['02', 'Cancellations', 'Forty-eight hours notice to move or cancel without losing the deposit. Inside that window it is forfeited; a second occurrence requires prepayment in full.'],
              ['03', 'Arrival', 'A fifteen-minute grace period is held for you. Past twenty minutes the appointment is released, as only one guest is booked at a time.'],
              ['04', 'Preparation', 'Come with hair detangled and free of heavy product, and extensions removed unless a take-down is booked. Bring your own hair for installs, washed and ready.'],
              ['05', 'Guests', 'The studio seats one. Please come alone unless the guest is receiving a service; children cannot be accommodated while you are in the chair.'],
              ['06', 'Adjustments', 'Anything that is not sitting right is corrected without charge within seven days. Services are not refunded once performed.'],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ padding: 'var(--space-6) 0', borderTop: '1px solid rgba(243,242,242,0.18)' }}>
                <div className="policies-grid">
                  <span className="policies-number">{num}</span>
                  <div><h3 style={{ margin: '0 0 8px', fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '23px', color: '#f6f4f1' }}>{title}</h3><p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.8, color: 'rgba(243,242,242,0.66)' }}>{desc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(64px, 9vh, 120px) 0 clamp(80px, 12vh, 140px)', borderBottom: '1px solid var(--color-divider)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 className="heading">Lately, on Instagram</h2>
        </div>
        <div className="gallery-track" style={{ overflowX: 'auto', scrollbarWidth: 'none' }}>
          {['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80','https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80','https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80','https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&q=80','https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80','https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80'].map((src) => (
            <a key={src} href={igUrl} target="_blank" rel="noopener" style={{ flex: '0 0 auto', width: 'clamp(150px, 17vw, 240px)', display: 'block' }}>
              <Image src={src} alt="Instagram post" width="300" height="300" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block', filter: 'sepia(0.22) saturate(0.82) contrast(1.05)' }} />
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
            <h2 className="heading">Reserve a seat</h2>
            <span className="section-label">VIII — Contact</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'start' }}>
            <div>
              <div style={{ padding: 'var(--space-6) 0', borderTop: '1px solid var(--color-text)' }}>
                <span className="step-number">The studio</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: '26px', lineHeight: 1.4, margin: '0 0 8px' }}>905 Watters Creek Boulevard<br />Suite 200<br />Allen, Texas 75013</h3>
              </div>
              <div style={{ padding: 'var(--space-6) 0', borderTop: '1px solid var(--color-divider)' }}>
                <span className="step-number">To book — call or text</span>
                <a href="tel:+14353480415" style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontVariantNumeric: 'tabular-nums', color: 'var(--color-text)', borderBottom: '1px solid var(--color-accent-300)' }}>(435) 348-0415</a>
              </div>
              <div style={{ padding: 'var(--space-6) 0', borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)' }}>
                <span className="step-number">Hours</span>
                <div className="hours-grid">
                  <span>Tuesday – Friday</span><span style={{ textAlign: 'right' }}>9:00 — 6:00</span>
                  <span>Saturday</span><span style={{ textAlign: 'right' }}>8:00 — 4:00</span>
                  <span>Sunday &amp; Monday</span><span style={{ textAlign: 'right', color: 'var(--color-neutral-600)' }}>Closed</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'clamp(28px, 4vh, 44px)' }}>
                <a className="btn btn-primary" href={bookUrl}>Call to book</a>
                <a className="btn btn-secondary" href="sms:+14353480415">Send a text</a>
              </div>
            </div>
            <figure style={{ margin: 0 }}>
              <div className="plate" style={{ overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=80" alt="Inside the studio" width="800" height="600" style={{ width: '100%', height: 'clamp(340px, 58vh, 620px)', objectFit: 'cover', display: 'block' }} />
              </div>
              <figcaption style={{ margin: '14px 0 0', fontStyle: 'italic', fontSize: '12.5px', color: 'var(--color-neutral-600)' }}>Parking is free in the Watters Creek garage; take the stairs beside the courtyard to Suite 200.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <footer style={{ background: '#171615', color: 'rgba(243,242,242,0.66)', padding: 'clamp(48px, 7vh, 80px) clamp(20px, 4vw, 56px) clamp(32px, 4vh, 48px)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)', alignItems: 'flex-end', justifyContent: 'space-between', paddingBottom: 'var(--space-6)', borderBottom: '1px solid rgba(243,242,242,0.16)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, fontSize: 'clamp(30px, 4vw, 54px)', lineHeight: 1, color: '#f6f4f1' }}>Antoinette Cierra</div>
            <div style={{ fontSize: '9.5px', letterSpacing: '0.34em', textTransform: 'uppercase', marginTop: '14px', color: '#a06f24' }}>Hair · Allen, Texas · Est. 2011</div>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(16px, 2.4vw, 34px)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            <a href="#services" style={{ color: 'rgba(243,242,242,0.66)' }}>Services</a>
            <a href="#portfolio" style={{ color: 'rgba(243,242,242,0.66)' }}>Portfolio</a>
            <a href="#policies" style={{ color: 'rgba(243,242,242,0.66)' }}>Policies</a>
            <a href={igUrl} target="_blank" rel="noopener" style={{ color: 'rgba(243,242,242,0.66)' }}>Instagram</a>
          </div>
        </div>
        <div style={{ maxWidth: '1280px', margin: 'var(--space-4) auto 0', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(243,242,242,0.42)' }}>
          <span>905 Watters Creek Blvd, Suite 200, Allen, TX 75013 · (435) 348-0415</span>
          <span>© 2026 Hair by Antoinette Cierra. All rights reserved.</span>
        </div>
      </footer>

      <div className="floating-cta">
        {chatOpen && (
          <div className="chat-widget">
            <div className="chat-header">
              <div className="chat-header-label">One chair, one guest</div>
              <div className="chat-header-title">Call or text to book</div>
            </div>
            <a href="tel:+14353480415" className="chat-link">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div><div style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontVariantNumeric: 'tabular-nums', lineHeight: 1.2 }}>(435) 348-0415</div><div style={{ fontSize: '11px', color: 'var(--color-neutral-600)', marginTop: '3px' }}>Call the studio</div></div>
            </a>
            <a href="sms:+14353480415" className="chat-link">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              <div><div style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', lineHeight: 1.2 }}>Send a text</div><div style={{ fontSize: '11px', color: 'var(--color-neutral-600)', marginTop: '3px' }}>Replies between clients</div></div>
            </a>
          </div>
        )}
        <button className="chat-button" onClick={toggleChat} aria-label="Call or text to book">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>{chatOpen ? 'Close' : 'Call or text'}</span>
        </button>
      </div>
    </>
  );
}