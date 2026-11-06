import React, { useState, useEffect, useRef } from 'react';
import { Brand } from '../common/BrandLogo.jsx';
import { siteConfig } from '../../data/siteConfig.js';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 992px)');
    const onResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener('change', onResize);
    return () => desktop.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === 'Tab' && menuOpen) {
        const links = Array.from(navRef.current.querySelectorAll('a'));
        const items = [...links, toggleRef.current];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      navRef.current?.querySelector('a')?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement">
        <a href={siteConfig.announcement.href}>
          <span className="top-announcement-badge">{siteConfig.announcement.badge}</span>
          <span>{siteConfig.announcement.text}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Main Navigation */}
      <header className="site-header" id="top">
        <div className="container nav-wrap">
          <a
            href="#top"
            aria-label="Next Rise Solutions Home"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              history.replaceState(null, '', window.location.pathname + window.location.search);
            }}
            style={{ cursor: 'pointer' }}
          >
            <Brand />
          </a>

          <nav
            ref={navRef}
            id="main-nav"
            className={`main-nav ${menuOpen ? 'open' : ''}`}
            aria-label="Main Navigation"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={(e) => {
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              className="stn-button"
              href="#contact"
              onClick={(e) => {
                closeMenu();
              }}
            >
              <span>Let’s Talk</span>
              <span className="button-arrow-circle" aria-hidden="true">↗</span>
            </a>
          </nav>

          <button
            ref={toggleRef}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
