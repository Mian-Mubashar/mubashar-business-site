import React, { useEffect } from 'react';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { WhatsAppFloat } from './components/layout/WhatsAppFloat.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { ConnectedStory } from './components/sections/ConnectedStory.jsx';
import { PartnersMarquee } from './components/sections/PartnersMarquee.jsx';
import { Solutions } from './components/sections/Solutions.jsx';
import { InfrastructureScope } from './components/sections/InfrastructureScope.jsx';
import { OnePartner } from './components/sections/OnePartner.jsx';
import { DeliveryProcess } from './components/sections/DeliveryProcess.jsx';
import { WhoWeServe } from './components/sections/WhoWeServe.jsx';
import { FAQ } from './components/sections/FAQ.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  useEffect(() => {
    // Clean any existing '#' hash from the URL bar on load
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Intercept all '#' links so the page scrolls smoothly without appending '#' to the URL
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      e.preventDefault();

      if (href === '#' || href === '#top' || href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Logo or top link: clean URL without any hash
        history.pushState(null, '', window.location.pathname + window.location.search);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        // Menu or section link: show the clicked section name in the URL bar!
        history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeReveals = () => {
      document.querySelectorAll('.reveal:not(.visible):not(.reveal-pending)').forEach((el) => {
        el.classList.add('reveal-pending');
        observer.observe(el);
      });
    };
    observeReveals();
    const mutations = new MutationObserver(observeReveals);
    mutations.observe(document.getElementById('main-content'), { childList: true, subtree: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      mutations.disconnect();
      document.querySelectorAll('.reveal-pending').forEach((el) => el.classList.remove('reveal-pending'));
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ConnectedStory />
        <PartnersMarquee />
        <Solutions />
        <InfrastructureScope />
        <OnePartner />
        <DeliveryProcess />
        <WhoWeServe />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
