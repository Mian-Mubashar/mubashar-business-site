import React from 'react';
import { infrastructureScope } from '../../data/infrastructureScope.js';

export function InfrastructureScope() {
  return (
    <section className="infrastructure-scope section-pad" id="capabilities">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <div className="section-kicker">ENGINEERING SCOPE &amp; ARCHITECTURE</div>
          <h2>
            From frontend interface<br />
            to <span className="text-primary">custom AI pipelines &amp; cloud deployment.</span>
          </h2>
          <p className="text-muted">
            Full-lifecycle engineering across your entire digital stack: robust databases, microservices, mobile apps, intelligent RAG pipelines, and paid marketing infrastructure.
          </p>
        </div>
        <div className="infrastructure-photo-band">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Clean code and software architecture"
              width="1200"
              height="700"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>CLEAN ARCHITECTURE</span>Built for high throughput &amp; scale.
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Analytics dashboard and business intelligence"
              width="800"
              height="700"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>BUSINESS INTELLIGENCE</span>Automated workflows &amp; AI insights.
            </figcaption>
          </figure>
        </div>
        <div className="scope-grid">
          {infrastructureScope.map((item, i) => (
            <article key={item.title}>
              <span className="scope-number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="scope-note">
          Need a custom web platform, mobile app, AI assistant, or marketing campaign?{' '}
          <a href="#contact">Discuss your project scope with Mubashar →</a>
        </p>
      </div>
    </section>
  );
}
