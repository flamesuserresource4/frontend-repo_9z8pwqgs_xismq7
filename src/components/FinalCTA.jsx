import React from 'react'

const FinalCTA = ({ onCTAClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white text-center">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Stop Waiting. Start Building Your AI Business Now.</h2>
        <p className="mt-3 text-white/90">This 90-minute session could change your 2025.</p>
        <button onClick={onCTAClick} className="mt-6 px-8 py-3 rounded-xl bg-white text-indigo-700 font-bold shadow-lg hover:shadow-xl transition">Join the Webinar for ₹9</button>
      </div>
    </section>
  )
}

export default FinalCTA
