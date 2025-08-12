import React from 'react'
import './section1.css'
import img1 from '../../assets/img/section_1/chapora.webp'
import img2 from '../../assets/img/section_1/baga.webp'
import img3 from '../../assets/img/section_1/vagator.webp'

const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="image-grid">
        <div className="image-item">
          <img src={img1} alt="Chapora Beach" />
          <div className="image-text">
            <h3 className="image-title">Chapora, Goa</h3>
            <p className="image-description">
              An ultra-luxurious property with 21 waterside estates along
              the Chapora river managed by a 5-star hospitality partner.
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={img2} alt="Baga Beach" />
          <div className="image-text">
            <h3 className="image-title">Baga, Goa</h3>
            <p className="image-description">
              Goa's first organised retail development spanning 7 acres with a
              versatile mix of entertainment, events and F&B.
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={img3} alt="Vagator Beach" />
          <div className="image-text">
            <h3 className="image-title">Vagator, Goa</h3>
            <p className="image-description">
              A 15+ acre campus with 35+ world-class F&B experiences, 7 luxury
              residences, a resort and 5-star hospitality overlooking the Arabian Sea
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1