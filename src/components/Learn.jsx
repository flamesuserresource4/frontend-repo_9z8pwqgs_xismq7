import React from 'react'

const Learn = () => {
  const points = [
    'Automate client acquisition with AI funnels and outreach',
    'Top AI tools and workflows that save 10+ hours/week',
    'Design high-income productized services powered by AI',
    'Systems to deliver results fast without hiring a big team',
    'How to price, pitch, and onboard clients with confidence',
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What You’ll Learn</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl border border-indigo-200/60 bg-indigo-50/30 hover:bg-indigo-50 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold mb-3">{i+1}</div>
              <p className="text-gray-800">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learn
