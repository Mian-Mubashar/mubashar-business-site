import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';
import { ServiceIcon } from '../common/ServiceIcon.jsx';

export function Solutions() {
  const alts = [
    'Full stack website development',
    'Cross-platform mobile apps development',
    'Custom AI chatbot and RAG vector pipeline',
    'Performance business marketing and paid ads',
    'Custom ERP and business management system',
    'Cloud infrastructure and DevOps deployment',
  ];

  return (
    <section className="solutions-section section-pad" id="services">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '48px' }}>
          <div>
            <div className="section-kicker">01 / OUR CORE SERVICES</div>
            <h2>
              Core Pillars:{' '}
              <span className="text-primary">Websites, Apps, AI &amp; Marketing</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '440px', fontSize: '15px' }}>
            Everything your business needs: Full Stack Websites, Native Mobile Apps, Custom AI Chatbots, and High-Converting Business Marketing.
          </p>
        </div>

        <div className="solutions-grid">
          {siteConfig.solutions.map((solution, index) => (
            <article
              key={solution.id}
              id={solution.id}
              className="solution-box"
            >
              {solution.liveUrl ? (
                <a
                  href={solution.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="solution-photo-wrap"
                  style={{ display: 'block', textDecoration: 'none' }}
                  title={`Open ${solution.title}`}
                >
                  <img
                    className="solution-photo"
                    src={solution.image}
                    alt={alts[index] || solution.title}
                    width="900"
                    height="520"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="solution-photo-label">{solution.pill}</span>
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(14, 165, 233, 0.95)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      backdropFilter: 'blur(6px)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      zIndex: 2,
                    }}
                  >
                    ● Live Project ↗
                  </span>
                </a>
              ) : (
                <div className="solution-photo-wrap">
                  <img
                    className="solution-photo"
                    src={solution.image}
                    alt={alts[index] || solution.title}
                    width="900"
                    height="520"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="solution-photo-label">{solution.pill}</span>
                </div>
              )}

              <div className="solution-service-header">
                <ServiceIcon index={index} />
                <span>{solution.pill}</span>
              </div>

              <div className="solution-content">
                <h3>{solution.title}</h3>
                <p>{solution.summary}</p>

                <ul className="solution-list">
                  {solution.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>

                <div className="solution-footer">
                  {solution.liveUrl ? (
                    <a
                      className="solution-cta"
                      href={solution.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{solution.ctaText}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <a
                      className="solution-cta"
                      href="#contact"
                    >
                      <span>{solution.ctaText}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
