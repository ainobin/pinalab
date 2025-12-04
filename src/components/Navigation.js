// Navigation Header Component
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo">
          <Image 
            src="/logo.png" 
            alt="PinaLab Logo"
            width={180}
            height={60}
            className="logo-image"
            priority
          />
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="/" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/products" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</a>
          <a href="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
        
        <div className="nav-actions">
          <button 
            className="nav-icon-btn mobile-menu-btn desktop-hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          <button className="nav-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 18C4 14.686 6.686 12 10 12C13.314 12 16 14.686 16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="nav-icon-btn cart-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1 1H3L3.4 3M5 11H15L19 3H3.4M5 11L3.4 3M5 11L3 16H17M8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18C7.55228 18 8 18.4477 8 19ZM17 19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18C16.5523 18 17 18.4477 17 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="cart-badge">3</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
