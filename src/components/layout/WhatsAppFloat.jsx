import React from 'react';
import { getWhatsAppUrl } from '../../data/siteConfig.js';

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float-btn"
      href={getWhatsAppUrl('Hello Mubashar, I would like to discuss a software project with Next Rise Solutions.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly with Mubashar on WhatsApp"
    >
      <span className="whatsapp-icon" aria-hidden="true">💬</span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
