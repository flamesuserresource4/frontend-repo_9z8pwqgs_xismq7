import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#0d0d2b] via-[#0b0b33] to-[#001021] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d2bb3] via-[#0b0b33cc] to-[#001021] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Workshop • Limited Seats
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            How to Build a Profitable
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
              AI-Powered Business in 2025
            </span>
            — Even If You’re Just Starting Out
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
            Learn how to use AI to automate your business and 10x your income in 2025. Actionable systems, tools, and templates you can deploy in days.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <button onClick={onCTAClick} className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/20 transition">
              Book Your Seat for ₹9
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
            </button>
            <a href="#preview" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition">
              Watch 30s Preview
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="w-8 h-8 rounded-full border border-white/30 bg-gradient-to-br from-purple-400/60 to-blue-400/60" />
              ))}
            </div>
            <p className="text-sm">2,000+ attendees • 4.9/5 average rating</p>
          </div>
        </div>

        <div id="preview" className="relative">
          <div className="aspect-video rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
            <iframe
              title="Webinar Preview"
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute -bottom-4 -right-4 hidden sm:block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            New for 2025
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
