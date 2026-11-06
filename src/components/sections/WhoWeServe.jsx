import React from 'react';
import { siteConfig } from '../../data/siteConfig.js';
import { ServiceIcon } from '../common/ServiceIcon.jsx';

export function WhoWeServe() {
  return (
    <section className="who-we-serve-section section-pad" id="who-we-serve">
      <div className="container">
        <div className="section-heading reveal" style={{ marginBottom: '44px' }}>
          <div>
            <div className="section-kicker">04 / Ideal Partnerships</div>
            <h2>
              Who I Work With:{' '}
              <span className="text-primary">Ambitious Businesses &amp; Founders</span>
            </h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '420px', fontSize: '15px' }}>
            Custom software, autonomous AI workflows, and acquisition funnels tailored for measurable business impact.
          </p>
        </div>

        <div className="serve-grid">
          {siteConfig.whoWeServe.map((item, index) => (
            <div
              key={item.title}
              className={`serve-row reveal ${index > 0 ? `reveal-delay-${index}` : ''}`}
            >
              <div className="serve-row-left">
                <div className="serve-row-icon" aria-hidden="true">
                  <ServiceIcon index={[0, 3, 1, 4][index]} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
              <span className="serve-badge">{item.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
