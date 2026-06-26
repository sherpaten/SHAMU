import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a className="nav-logo" href="#home" onClick={() => handleLink('#home')}>
            SH<span>À</span>MU
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); handleLink(l.href) }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <ul className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <a href={l.href} onClick={(e) => { e.preventDefault(); handleLink(l.href) }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
