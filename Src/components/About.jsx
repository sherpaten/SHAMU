import React from 'react'
import '../styles/About.css'
import ownerImg from '../Assest/Owner.jpg'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Portrait */}
        <div className="about-portrait-wrap reveal">
          <div className="about-portrait">
            <img
              src={ownerImg}
              alt="Shàmu — The Founder"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block'
              }}
            />
          </div>
          <div className="about-portrait-badge">
            <strong>1+</strong>
            <span>Years of<br />Excellence</span>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <p className="section-label reveal">Meet the Founder</p>
          <h2 className="section-title reveal delay-1"><br />Passion</h2>
          <p className="about-name reveal delay-2">Shàmu — The Brand</p>
          <p className="about-bio reveal delay-2">
            Born in the heart of Kathmandu, Shàmu built this brand from a single belief:
            that a great cap can define your entire look. What started as a small stall
            in the local market has grown into one of Nepal's most loved headwear destinations.
          </p>
          <p className="about-bio reveal delay-3">
            Every piece in our collection is personally curated — blending international
            trends with local craftsmanship. We don't just sell caps; we give you a crown
            that fits your story.
          </p>

          <div className="about-quote reveal delay-3">
            <blockquote>
              "A cap isn't just an accessory — it's the first thing people see
              and the last thing they forget."
            </blockquote>
          </div>

          <div className="about-tags reveal delay-4">
            {['Premium Quality', 'Local Pride', 'Boys & Girls', 'Custom Fit', 'Trend-Forward'].map(tag => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}