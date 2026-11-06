import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';

const iconPaths = [
  'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'M9 12l2 2 4-4 M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0',
  'M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zm-8 18v-1a6 6 0 0 1 12 0v1H4z',
  'M12 3l8 3v6c0 5-8 9-8 9s-8-4-8-9V6z M9 12l2 2 4-4',
  'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
];

export function OnePartner() {
  return (
    <section className="support-section section-pad" id="why-next-rise">
      <div className="container">
        <div className="partner-intro">
          <div>
            <div className="section-kicker">02 / Dedicated Engineering</div>
            <h2>
              One Engineer.<br />
              <span className="text-primary">Every technical layer covered.</span>
            </h2>
          </div>
          <p>
            Web, mobile, AI agents, custom ERPs, and paid advertising — built with unified accountability, zero agency overhead, and direct communication with Mubashar.
          </p>
        </div>
        <div className="partner-benefits">
          {siteConfig.supportCards.map((card, index) => (
            <article className="partner-benefit" key={card.title}>
              <div className="benefit-top">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={iconPaths[index % iconPaths.length]} />
                </svg>
                <span>0{index + 1}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
          <div className="partner-benefit partner-benefit-cta">
            <div className="benefit-top">
              <span>LET’S TALK</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h3>
              Your next project.<br />
              Engineered for scale.
            </h3>
            <p>Discuss your requirements directly with Mubashar Hanif.</p>
            <a className="benefit-link" href="#contact">
              Plan your project <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
