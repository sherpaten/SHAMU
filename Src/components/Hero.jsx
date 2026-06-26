import React from 'react'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-line" />

      <div className="hero-left">
        <p className="hero-eyebrow">Est. 2026 · Kathmandu</p>
        <h1 className="hero-title">
          SH<span className="accent">À</span>MU
        </h1>
        <p className="hero-desc">
          Premium headwear crafted for those who lead with style.
          Every cap tells a story — wear yours with pride.
        </p>
        <div className="hero-cta">
          <a href="#gallery" className="btn-primary"
            onClick={e => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Shop Collection
          </a>
          <a href="#about" className="btn-outline"
            onClick={e => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Our Story
          </a>
        </div>
        <p className="scroll-hint">Scroll to explore</p>
      </div>

      <div className="hero-right">
        <div className="hero-right-inner">
          {/* SVG Cap Illustration */}
          <svg className="hero-cap-icon" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="150" cy="140" rx="130" ry="18" fill="rgba(245,240,232,0.15)" />
            {/* Cap body */}
            <path d="M50 120 Q80 40 150 35 Q220 40 250 120 Q200 130 150 132 Q100 130 50 120Z"
              fill="rgba(245,240,232,0.9)" />
            {/* Brim */}
            <path d="M48 122 Q20 128 15 138 Q14 148 40 148 Q80 150 150 148 Q180 147 200 146 L250 122 Q200 132 150 134 Q95 132 48 122Z"
              fill="rgba(245,240,232,0.7)" />
            {/* Crown panel lines */}
            <path d="M150 36 Q155 80 158 132" stroke="rgba(26,22,18,0.15)" strokeWidth="1" />
            <path d="M150 36 Q145 80 142 132" stroke="rgba(26,22,18,0.15)" strokeWidth="1" />
            <path d="M150 36 Q185 65 210 118" stroke="rgba(26,22,18,0.15)" strokeWidth="1" />
            <path d="M150 36 Q115 65 90 118" stroke="rgba(26,22,18,0.15)" strokeWidth="1" />
            {/* Button */}
            <circle cx="150" cy="37" r="5" fill="var(--rust)" />
            {/* Logo text on cap */}
            <text x="150" y="100" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif"
              fontSize="28" fill="var(--ink)" letterSpacing="4">SHÀMU</text>
            {/* Sweatband */}
            <path d="M60 120 Q150 128 240 120" stroke="rgba(26,22,18,0.2)" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="hero-stat-strip">
          <div className="hero-stat">
            <strong>200+</strong>
            <span>Styles</span>
          </div>
          <div className="hero-stat">
            <strong>5K+</strong>
            <span>Happy Heads</span>
          </div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Premium</span>
          </div>
        </div>
      </div>
    </section>
  )
}
