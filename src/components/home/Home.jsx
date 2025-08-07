import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../../assets/video/hero.webm'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)
  const heroSectionRef = useRef(null)
  const heroTitleRef = useRef(null)

  useEffect(() => {
    if (!leftTextRef.current || !rightTextRef.current || !heroSectionRef.current) return

    // Create a timeline for coordinated animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        markers: false // Set to true for debugging
      }
    })

    // Set initial positions - far apart
    gsap.set(leftTextRef.current, { x: -400, opacity: 0.3 })
    gsap.set(rightTextRef.current, { x: 400, opacity: 0.3 })
    gsap.set(heroTitleRef.current, { gap: "20rem" })

    // Animate both texts coming together and gap decreasing
    tl.to([leftTextRef.current, rightTextRef.current], {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(heroTitleRef.current, {
      gap: "2rem",
      duration: 1,
      ease: "power2.out"
    }, 0) // Start at the same time as text animation

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className='hero-section' ref={heroSectionRef}>
      <div className='hero-video'>
        <video 
           autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className='hero-text-overlay'>
        <h1 className='hero-title' ref={heroTitleRef}>
          <span ref={leftTextRef} className='text-left'>32ND</span>
          <span ref={rightTextRef} className='text-right'>GOA</span>
        </h1>
      </div>
    </div>
  )
}

export default Home