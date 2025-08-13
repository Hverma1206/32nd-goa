import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import heroVideo from '../../assets/video/hero.webm'
import Section1 from '../section1/section1'
import './Home.css'
import Footer from '../footer/footer'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Home = () => {
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)
  const heroSectionRef = useRef(null)
  const heroTitleRef = useRef(null)
  const textOverlayRef = useRef(null)
  const contentSectionRef = useRef(null)

  useEffect(() => {
    if (!leftTextRef.current || !rightTextRef.current || !heroSectionRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        markers: false,
        onComplete: () => {
          // Auto scroll to section1 after animation completes
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: contentSectionRef.current, offsetY: 0 },
            ease: "power2.inOut"
          })
        }
      }
    })

    gsap.set(leftTextRef.current, { x: -400, opacity: 0.3 })
    gsap.set(rightTextRef.current, { x: 400, opacity: 0.3 })
    gsap.set(heroTitleRef.current, { gap: "20rem" })

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
    }, 0)
    .to(textOverlayRef.current, {
      y: "-45vh",
      duration: 1,
      ease: "none"
    })
    .to(heroTitleRef.current, {
      fontSize: "2rem",
      gap: "0.65rem",
      duration: 1,
      ease: "none"
    }, "<")

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
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
        
        <div className='hero-text-overlay' ref={textOverlayRef}>
          <h1 className='hero-title' ref={heroTitleRef}>
            <span ref={leftTextRef} className='text-left'>32ND</span>
            <span ref={rightTextRef} className='text-right'>GOA</span>
          </h1>
        </div>
      </div>
      
      <div className='content-section' ref={contentSectionRef}>
        <Section1 />
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </>
  )
}

export default Home