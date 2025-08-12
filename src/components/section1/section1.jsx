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
        </div>
        <div className="image-item">
          <img src={img2} alt="Baga Beach" />
        </div>
        <div className="image-item">
          <img src={img3} alt="Vagator Beach" />
        </div>
      </div>
    </div>
  )
}

export default Section1