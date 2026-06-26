import React, { useState } from 'react'
import '../styles/Gallery.css'

const CapIcon = () => (
  <svg viewBox="0 0 60 40" fill="none">
    <path d="M10 28 Q18 8 30 7 Q42 8 50 28 Q40 32 30 32 Q20 32 10 28Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M9 29 Q4 32 3 36 Q3 39 10 39 Q30 39 50 29" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <circle cx="30" cy="8" r="2" fill="currentColor"/>
  </svg>
)

const boysCollection = [
  { id: 1, name: 'Street King', price: 'NPR 1,200', style: 'Snapback Classic' },
  { id: 2, name: 'Shadow Flex', price: 'NPR 1,500', style: 'Fitted Dark' },
  { id: 3, name: 'Urban Crest', price: 'NPR 1,350', style: 'Dad Hat Bold' },
  { id: 4, name: 'Navy Pro', price: 'NPR 1,100', style: 'Trucker Mesh' },
  { id: 5, name: 'Desert Drift', price: 'NPR 1,400', style: 'Bucket Sand' },
  { id: 6, name: 'Midnight Run', price: 'NPR 1,600', style: 'Beanie Snap' },
]

const girlsCollection = [
  { id: 1, name: 'Rose Glow', price: 'NPR 1,200', style: 'Pastel Dad Hat' },
  { id: 2, name: 'Blush Vintage', price: 'NPR 1,400', style: 'Retro Snapback' },
  { id: 3, name: 'Pearl Crown', price: 'NPR 1,550', style: 'Fitted Elegant' },
  { id: 4, name: 'Lavender Sky', price: 'NPR 1,150', style: 'Soft Bucket' },
  { id: 5, name: 'Gold Aura', price: 'NPR 1,300', style: 'Trucker Chic' },
  { id: 6, name: 'Ivory Dream', price: 'NPR 1,450', style: 'Low Profile' },
]

export default function Gallery() {
  const [active, setActive] = useState('boys')
  const items = active === 'boys' ? boysCollection : girlsCollection

  return (
    <section id="gallery" className="gallery">
      <div className="container">

        <div className="gallery-header reveal">
          <p className="section-label">Collections</p>
          <h2 className="section-title">Find Your Cap</h2>

          <div className="gallery-tabs">
            <button
              className={`gallery-tab${active === 'boys' ? ' active' : ''}`}
              onClick={() => setActive('boys')}
            >
              Boys
            </button>
            <button
              className={`gallery-tab${active === 'girls' ? ' active' : ''}`}
              onClick={() => setActive('girls')}
            >
              Girls
            </button>
            <button
              className={`gallery-tab${active === 'all' ? ' active' : ''}`}
              onClick={() => setActive('all')}
            >
              All
            </button>
          </div>
        </div>

        <div className="gallery-grid">
          {(active === 'all' ? [...boysCollection, ...girlsCollection].slice(0, 6) : items).map((item, i) => (
            <div
              key={item.id + active}
              className={`gallery-item reveal delay-${Math.min(i % 3 + 1, 4)}`}
            >
              <div className="gallery-item-bg">
                <CapIcon />
                <p>{item.style}</p>
              </div>
              <div className="gallery-item-overlay" />
              <div className="gallery-item-content">
                <p className="gallery-item-name">{item.name}</p>
                <p className="gallery-item-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-more reveal">
          <p>More styles available in store & on request</p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ display: 'inline-block' }}
            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Enquire Now
          </a>
        </div>

      </div>
    </section>
  )
}
