import React, { useState } from 'react';
import { siteConfig, getWhatsAppUrl } from '../../data/siteConfig.js';

// Web3Forms Access Key configured for mubasharhanif24@gmail.com
const WEB3FORMS_ACCESS_KEY = 'ee5f4680-a670-4aeb-b2de-6971dae226c1';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' | 'error' | 'info'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormStatus('');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('Please fill in your Name, Email, and Message.');
      setStatusType('error');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('Sending your message...');
    setStatusType('info');

    const subject = `New Project Inquiry from ${formData.name} - Next Rise Solutions`;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          category: formData.category || 'General Software / AI',
          message: formData.message,
          subject: subject,
          from_name: `${formData.name} (Next Rise Solutions Website)`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('✅ Success! Your message has been sent successfully. We will get back to you shortly.');
        setStatusType('success');
        setFormData({ name: '', email: '', phone: '', category: '', message: '' });
      } else {
        setFormStatus(data.message || 'Unable to deliver message right now. Please chat via WhatsApp below.');
        setStatusType('error');
      }
    } catch {
      setFormStatus('Network issue detected. Please click below to send via WhatsApp directly.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      setFormStatus('Please enter at least your Name and Message to chat on WhatsApp.');
      setStatusType('error');
      return;
    }

    const structuredWhatsApp =
      `*New Project Inquiry for Mubashar Hanif*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email || 'Not provided'}\n` +
      `• *Phone:* ${formData.phone || 'Not provided'}\n` +
      `• *Category:* ${formData.category || 'General Software / AI'}\n` +
      `• *Project Details:* ${formData.message}`;

    const waUrl = getWhatsAppUrl(structuredWhatsApp);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setFormStatus('Opening WhatsApp with your project details...');
    setStatusType('success');
  };

  return (
    <section className="consultation-section section-pad" id="contact">
      <div className="container">
        <div className="consultation-card reveal">
          <div className="consultation-info">
            <div className="section-kicker">06 / Direct Collaboration</div>
            <h2>
              Start Your Project With <span className="text-primary">Next Rise Solutions</span>
            </h2>
            <p>
              Have an idea for a web or mobile app, need a custom AI chatbot trained on your data, a tailored ERP for operations, or profitable Meta &amp; Google Ads? Send a direct message to Mubashar.
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">📞</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Direct Call / WhatsApp:</strong>
                  <a href={`tel:${siteConfig.phone.replace(/[\s-]/g, '')}`} style={{ color: 'var(--color-primary)' }}>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">✉️</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Direct Email:</strong>
                  <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--text-light)' }}>
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">💻</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>GitHub Profile:</strong>
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    github.com/Mian-Mubashar ↗
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">💼</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>LinkedIn Profile:</strong>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    linkedin.com/in/mubashar-hanif ↗
                  </a>
                </div>
              </div>

              <div className="contact-meta-item">
                <div className="contact-meta-icon" aria-hidden="true">📍</div>
                <div>
                  <strong style={{ color: '#ffffff', display: 'block' }}>Base Location:</strong>
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>

          <form className="consultation-form" onSubmit={handleEmailSubmit}>
            <div className="stn-input-group">
              <label htmlFor="stn-name">Full Name *</label>
              <input
                id="stn-name"
                type="text"
                name="name"
                autoComplete="name"
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-email">Email Address *</label>
              <input
                id="stn-email"
                type="email"
                name="email"
                autoComplete="email"
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-phone">Phone / WhatsApp Number</label>
              <input
                id="stn-phone"
                type="tel"
                name="phone"
                autoComplete="tel"
                maxLength={30}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 334-9730227"
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-category">Project Category</label>
              <input
                id="stn-category"
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Full Stack Website, Mobile App, AI Chatbot, Marketing..."
              />
            </div>

            <div className="stn-input-group">
              <label htmlFor="stn-message">Project Scope &amp; Requirements *</label>
              <textarea
                id="stn-message"
                name="message"
                maxLength={2000}
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, target audience, preferred tech stack, or business goals..."
                required
              />
            </div>

            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                className="stn-button"
                type="submit"
                disabled={isSubmitting}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                <span className="button-arrow-circle" aria-hidden="true">✉️</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="stn-button"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.5)',
                  color: '#25D366',
                }}
              >
                <span>Send via WhatsApp (+92 334-9730227)</span>
                <span className="button-arrow-circle" aria-hidden="true" style={{ background: '#25D366', color: '#000' }}>💬</span>
              </button>

              {formStatus && (
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    marginTop: '6px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background:
                      statusType === 'success'
                        ? 'rgba(37, 211, 102, 0.15)'
                        : statusType === 'info'
                        ? 'rgba(14, 165, 233, 0.15)'
                        : 'rgba(239, 68, 68, 0.15)',
                    border: `1px solid ${
                      statusType === 'success'
                        ? 'rgba(37, 211, 102, 0.4)'
                        : statusType === 'info'
                        ? 'rgba(14, 165, 233, 0.4)'
                        : 'rgba(239, 68, 68, 0.4)'
                    }`,
                    color:
                      statusType === 'success'
                        ? '#a7f3d0'
                        : statusType === 'info'
                        ? '#7dd3fc'
                        : '#fca5a5',
                    fontSize: '14px',
                    textAlign: 'center',
                    lineHeight: '1.5',
                  }}
                >
                  {formStatus}
                </div>
              )}
            </div>
            <p className="form-privacy" style={{ marginTop: '12px', fontSize: '12px', opacity: 0.8 }}>
              🔒 Your information is confidential and will only be used to respond to your project inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
