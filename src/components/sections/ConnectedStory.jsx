import React, { useEffect, useRef, useState } from 'react';
import { siteConfig } from '../../data/siteConfig.js';

const services = [
  [
    '01',
    'Full Stack Websites & Apps.',
    'Architect modern web platforms and cross-platform mobile apps using MERN, Next.js, and React Native with clean code, lightning speed, and responsive UI.',
    'WEBSITES + MOBILE APPS',
  ],
  [
    '02',
    'Custom AI & Intelligent Systems.',
    'Integrate intelligent AI chatbots using RAG and Pinecone vector search, alongside custom ERP dashboards that automate company operations.',
    'AI INTEGRATIONS + CUSTOM ERPs',
  ],
  [
    '03',
    'Business Marketing & Cloud Scale.',
    'Acquire high-intent customers with profitable Meta & Google Ads campaigns, supported by rock-solid cloud infrastructure and analytics tracking.',
    'BUSINESS MARKETING + DEVOPS',
  ],
];

export function ConnectedStory() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = ref.current.querySelectorAll('.story-step');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step));
        });
      },
      { rootMargin: '-30% 0px -35% 0px', threshold: 0 }
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="connected-story section-pad" id="connected" ref={ref}>
      <div className="container">
        <div className="story-heading reveal">
          <div className="section-kicker">THE COMPLETE DIGITAL ECOSYSTEM</div>
          <h2>
            Every system. Every user journey.<br />
            <span className="text-primary">Engineered to perform.</span>
          </h2>
          <p>Full Stack Websites, Apps, Custom AI, and Business Marketing from Next Rise Solutions.</p>
        </div>

        <div className="story-layout">
          <div className="story-orbit" aria-hidden="true" data-active={active}>
            <div className="orbit-path orbit-path-outer" />
            <div className="orbit-path orbit-path-inner" />
            <div className="orbit-center">
              <img
                src="/nextrise-logo.png"
                alt="Next Rise Solutions"
                width="76"
                height="65"
                style={{ objectFit: 'contain' }}
              />
              <small>NEXT RISE</small>
            </div>
            {[
              'FULL STACK WEBSITES',
              'APPS (iOS & ANDROID)',
              'CUSTOM AI',
              'BUSINESS MARKETING',
              'CUSTOM ERPs',
              'CLOUD DEVOPS',
            ].map((name, i) => (
              <div
                key={name}
                className={`orbit-node orbit-node-${i} ${[0, 1, 2, 0, 1, 2][i] === active ? 'active' : ''}`}
              >
                <span>0{i + 1}</span>
                {name}
              </div>
            ))}
            <div className="orbit-caption">NEXT RISE SOLUTIONS · 4 CORE SERVICES</div>
          </div>

          <div className="story-steps">
            {services.map(([number, title, description, tag], i) => (
              <article
                key={number}
                data-step={i}
                className={`story-step ${[0, 1, 2, 0, 1, 2][i] === active ? 'active' : ''}`}
              >
                <span className="story-number">/{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <small>{tag}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="stat-bar-grid reveal">
          {siteConfig.stats.map((item) => (
            <div className="stat-box" key={item.label}>
              <div>
                <div className="stat-box-value">{item.value}</div>
                <div className="stat-box-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
