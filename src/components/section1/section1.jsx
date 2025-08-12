import React from 'react'
import './section1.css'
import img1 from '../../assets/img/section_1/chapora.webp'
import img2 from '../../assets/img/section_1/baga.webp'
import img3 from '../../assets/img/section_1/vagator.webp'
import img4 from '../../assets/img/section_1/anjuna.webp'
import img5 from '../../assets/img/section_1/arambol.webp'
import img7 from '../../assets/img/section_1/vagator_2.webp'
import img6 from '../../assets/img/section_1/candolim.jpg'

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
        <div className="image-item">
          <img src={img4} alt="Anjuna Beach" />
          <div className="image-text">
            <h3 className="image-title">Anjuna, Goa</h3>
            <p className="image-description">
              An iconic 4+ acre private beach destination with dining, a nightclub and private
              member’s lounge featuring exclusive experiences and landmark events.
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={img5} alt="Arambol Beach" />
          <div className="image-text">
            <h3 className="image-title">Arambol, Goa</h3>
            <p className="image-description">
              A collection of 9 beachside residences with luxury amenities with a central

              1 acre bio-filtered, swimmable water lagoon, making for a one-of-a-kind living
            </p>
          </div>
        </div>
        <div className="image-item">
          <img src={img6} alt="Candolim Beach" />
          <div className="image-text">
            <h3 className="image-title">Candolim, Goa</h3>
            <p className="image-description">
              India’s first multi-level beach club across ~22,580 sq.ft. offering the best of
              tropical cuisine & mixology and beachside global music experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1