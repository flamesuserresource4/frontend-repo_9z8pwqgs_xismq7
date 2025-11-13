import React, { useRef } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Learn from './components/Learn'
import WhyAttend from './components/WhyAttend'
import SocialProof from './components/SocialProof'
import Offer from './components/Offer'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import FeedbackCarousel from './components/FeedbackCarousel'

function App() {
  const ctaRef = useRef(null)

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero onCTAClick={scrollToCTA} />
      <About />
      <Learn />
      <WhyAttend />
      <SocialProof />
      <div ref={ctaRef}>
        <Offer onCTAClick={scrollToCTA} />
      </div>
      <FAQ />
      <FeedbackCarousel />
      <FinalCTA onCTAClick={scrollToCTA} />
      <footer className="py-10 text-center text-sm text-gray-500">© 2025 AI Business Webinar • Built with love</footer>
    </div>
  )
}

export default App
