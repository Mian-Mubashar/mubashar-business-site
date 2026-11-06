import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from '../common/ErrorBoundary.jsx';
const EnergyScene = lazy(() => import('../3d/EnergyScene.jsx'));

export function Hero() {
  const [interactive, setInteractive] = useState(false);
  useEffect(() => setInteractive(true), []);

  return (
    <section className="stn-hero" id="home">
      <div className="energy-backdrop" aria-hidden="true">
        <div className="energy-fallback" />
        {interactive && (
          <ErrorBoundary fallback={<span />}>
            <Suspense fallback={null}>
              <EnergyScene />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
      <div className="container hero-main-content">
        <div className="hero-headline reveal">
          <div className="section-kicker">MUBASHAR HANIF · NEXT RISE SOLUTIONS</div>
          <h1>
            Full Stack Websites, Apps,<br />
            <span className="text-primary">Custom AI &amp; Business Marketing.</span>
          </h1>

          <div
            className="hero-pillars-wrap"
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              margin: '20px 0 24px 0',
            }}
          >
            <span
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#38bdf8',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              💻 Full Stack Websites
            </span>
            <span
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#38bdf8',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              📱 Apps (iOS &amp; Android)
            </span>
            <span
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#38bdf8',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              🤖 Custom AI &amp; Chatbots
            </span>
            <span
              style={{
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#38bdf8',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.02em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              📈 Business Marketing (Meta &amp; Google Ads)
            </span>
          </div>

          <p className="hero-desc">
            Hi, I’m Mubashar. Through Next Rise Solutions, I deliver 4 core services to build and grow your business: <strong>Full Stack Websites</strong> (MERN &amp; Next.js), <strong>Apps</strong> (React Native iOS &amp; Android), <strong>Custom AI</strong> (Intelligent Chatbots &amp; RAG Systems), and high-ROI <strong>Business Marketing</strong> (Meta &amp; Google Ads).
          </p>

          <div className="hero-cta-group">
            <a className="stn-button" href="#contact">
              <span>Discuss Your Project</span>
              <span className="button-arrow-circle" aria-hidden="true">↗</span>
            </a>
            <a className="hero-text-link" href="#services">
              Explore All 4 Services <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>NEXT RISE SOLUTIONS · WEBSITES · APPS · AI · BUSINESS MARKETING</span>
        <a href="#connected">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
