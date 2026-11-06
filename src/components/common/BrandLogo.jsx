import React from 'react';

export function BrandLogo({ className = 'brand-logo', size = 44 }) {
  return (
    <img
      className={className}
      src="/nextrise-logo.png"
      alt="Next Rise Solutions logo"
      width={size}
      height={size}
      loading="eager"
      style={{ objectFit: 'contain' }}
    />
  );
}

export function Brand() {
  return (
    <div className="brand" aria-label="Next Rise Solutions — Full-Stack & AI Engineering by Mubashar Hanif">
      <BrandLogo />
      <span className="brand-text">
        <span className="brand-name">NEXT RISE</span>
        <span className="brand-tagline">SOLUTIONS</span>
      </span>
    </div>
  );
}
