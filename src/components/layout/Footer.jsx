import React from 'react';
import { Brand } from '../common/BrandLogo.jsx';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main-grid">
        <div>
          <Brand />
          <p className="footer-brand-copy">
            Full Stack Websites, Mobile Apps, Custom AI (Chatbots &amp; RAG), and Business Marketing by Mubashar Hanif.
          </p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-primary)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              GitHub ↗
            </a>
            <span style={{ color: 'var(--text-dim)' }}>•</span>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-primary)',
                fontSize: '13px',
                fontWeight: '600',
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-menu">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Core Services</div>
          <ul className="footer-menu">
            {siteConfig.solutions.map((solution) => (
              <li key={solution.id}>
                {solution.liveUrl ? (
                  <a href={solution.liveUrl} target="_blank" rel="noopener noreferrer">
                    {solution.pill} ↗
                  </a>
                ) : (
                  <a href={`#${solution.id}`}>{solution.pill}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact &amp; Connect</div>
          <ul className="footer-menu">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {siteConfig.phone} ↗
              </a>
            </li>
            <li>
              <span>{siteConfig.location}</span>
            </li>
            <li>
              <span className="text-primary">{siteConfig.availability}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <span>
          © {siteConfig.copyrightYear} {siteConfig.name} by {siteConfig.ownerName}. All Rights Reserved.
        </span>
        <span>Full Stack Websites · Apps · Custom AI · Business Marketing · Lahore &amp; Worldwide</span>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }}
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
