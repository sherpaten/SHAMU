import React from 'react'
import '../styles/Footer.css'

const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-logo">SH<span>À</span>MU</div>
            <p className="footer-brand-tagline">Wear Your Crown</p>
            <p className="footer-brand-desc">
              Premium headwear for boys and girls. Based in Kathmandu,
              crafted for the world. Every cap, a statement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <p className="footer-col-title">Navigate</p>
            <ul>
              {[
                ['Home', '#home'],
                ['About', '#about'],
                ['Gallery', '#gallery'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="footer-col">
            <p className="footer-col-title">Collections</p>
            <ul>
              {['Boys Collection', 'Girls Collection', 'New Arrivals', 'Custom Orders', 'Bulk / Wholesale'].map(item => (
                <li key={item}>
                  <a href="#gallery" onClick={e => { e.preventDefault(); scrollTo('#gallery') }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <p className="footer-col-title">Info</p>
            <ul>
              {['Our Story', 'Size Guide', 'Care Instructions', 'Return Policy', 'FAQs'].map(item => (
                <li key={item}><a href="#about" onClick={e => e.preventDefault()}>{item}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Shàmu</span> · Kathmandu, Nepal · All rights reserved
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
