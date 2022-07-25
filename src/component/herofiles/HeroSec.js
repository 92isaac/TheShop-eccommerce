import React from 'react'
import heroimg from '../assests/images/hero-img.png'
import heroleft from '../assests/images/bg-left.png'
import heroright from '../assests/images/bg-right.png'
import '../assests/styles/herosec.css'

const HeroSec = () => {
  return (
    <div className='hero-sec-wrapper'>
        <div className="hero-text">
            <p>Products for every need, at the distance of a click.</p>
        </div>
        <div className="hero-img">
            <img src={heroimg} alt="product-image" className="hero-img1"/>
            <img src={heroleft} alt="product-image" className="hero-img2"/>
            <img src={heroright} alt="product-image" className="hero-img3"/>
        </div>
    </div>
  )
}

export default HeroSec