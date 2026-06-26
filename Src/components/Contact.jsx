import React, { useState } from 'react'
import '../styles/Contact.css'

const WHATSAPP_NUMBER = '9779845415515'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    const text = [
      '🧢 *New Message from Shàmu Website*',
      '',
      '👤 *Name:* ' + form.name,
      '📞 *Phone:* ' + (form.phone || 'Not provided'),
      '📧 *Email:* ' + form.email,
      '🎯 *Interested in:* ' + (form.interest || 'Not specified'),
      '',
      '💬 *Message:*',
      form.message || 'No message provided',
    ].join('\n')

    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      window.open(url, '_blank')
    }, 1000)
  }

  const phoneStyle = {
    color: 'inherit',
    textDecoration: 'none',
    display: 'block'
  }

  const successIconStyle = {
    width: '56px',
    height: '56px',
    stroke: '#25D366',
    fill: 'none',
    strokeWidth: '1.5',
    display: 'block',
    margin: '0 auto 1.2rem'
  }

  const sendAgainStyle = {
    marginTop: '1.5rem',
    background: 'var(--ink)',
    color: 'var(--cream)',
    padding: '0.75rem 2rem',
    borderRadius: 'var(--radius)',
    fontSize: '0.78rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit'
  }

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="contact-info">
          <p className="section-label reveal">Get in Touch</p>
          <h2 className="section-title reveal delay-1">Visit Us or<br />Send a Message</h2>
          <p className="contact-intro reveal delay-2">
            Looking for the perfect cap? Come visit our store or drop us a message.
            We'd love to help you find exactly what you need.
          </p>

          <div className="contact-details">

            <div className="contact-detail reveal delay-2">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="var(--cream)"/>
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Location</strong>
                <span>Arubhari, Jorpati, Kathmandu<br />Nepal</span>
              </div>
            </div>

            <div className="contact-detail reveal delay-3">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Phone / WhatsApp</strong>
                <a href={'https://wa.me/' + WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer" style={phoneStyle}>
                  +977 9845415515
                </a>
              </div>
            </div>

            <div className="contact-detail reveal delay-3">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <span>hello@shamu.np</span>
              </div>
            </div>

            <div className="contact-detail reveal delay-4">
              <div className="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-detail-text">
                <strong>Store Hours</strong>
                <span>Sun – Fri: 10am – 8pm<br />Saturday: 11am – 6pm</span>
              </div>
            </div>

          </div>

          <div className="contact-social reveal delay-4">
            <a href="#" className="contact-social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="contact-social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" className="contact-social-link" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap reveal delay-2">
          {sent ? (
            <div className="form-success">
              <svg viewBox="0 0 24 24" style={successIconStyle} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <h3>Sent to WhatsApp!</h3>
              <p>WhatsApp opened with your message. We will reply as soon as possible!</p>
              <button onClick={() => setSent(false)} style={sendAgainStyle}>
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-sub">Fill in your details — we will open WhatsApp with your message ready.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="+977 98XX XXXXXX" value={form.phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">I am interested in</label>
                  <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                    <option value="">Select a category</option>
                    <option value="boys">Boys Collection</option>
                    <option value="girls">Girls Collection</option>
                    <option value="custom">Custom / Bulk Order</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" placeholder="Tell us what you are looking for" value={form.message} onChange={handleChange} />
                </div>

                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  )
}