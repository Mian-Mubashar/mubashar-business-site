import React from 'react';

const steps = [
  [
    'Discover & Scope',
    'We analyze your business goals, target users, technical requirements, and define a clear milestone roadmap with fixed deliverables.',
  ],
  [
    'Architecture & UX',
    'Interactive UI mockups, database schemas, API specifications, and tech stack choices designed for speed, security, and future scale.',
  ],
  [
    'Agile Engineering',
    'Sprint-based development (MERN, React Native, AI/RAG, ERP) with clean, documented code and regular live preview demos for your feedback.',
  ],
  [
    'Cloud Launch & Growth',
    'Production deployment (AWS/Vercel/VPS), SSL, domain configuration, Meta & Google Ads tracking, and ongoing maintenance.',
  ],
];

export function DeliveryProcess() {
  return (
    <section className="delivery-section section-pad" id="process">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <div className="section-kicker">03 / How I Work</div>
          <h2>
            From initial concept<br />
            to <span className="text-primary">a production-ready reality.</span>
          </h2>
          <p className="text-muted">Transparent milestones, rapid communication, and clean code that scales.</p>
        </div>
        <div className="delivery-grid">
          {steps.map(([title, description], i) => (
            <article className="delivery-step" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
