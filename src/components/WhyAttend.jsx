import React from 'react'

const WhyAttend = () => {
  const pains = [
    'Trying random side hustles with no real plan',
    'Confused by the flood of AI tools and hype',
    'Inconsistent clients and unpredictable income',
    'Wasting time on manual tasks that could be automated',
  ]

  const transform = [
    'A clear roadmap to build your AI-powered offer',
    'Proven templates and automations to implement fast',
    'Simple client acquisition system you can run daily',
    'Confidence to charge more and deliver results',
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/60 to-white">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why You Should Attend</h2>
          <p className="mt-4 text-gray-700">If you’re tired of trying random side hustles that don’t work, this webinar will change how you see online business forever.</p>
          <ul className="mt-6 space-y-3 text-gray-800">
            {pains.map((p, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-purple-500"/>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">The Transformation</h3>
          <ul className="mt-4 space-y-3 text-gray-800">
            {transform.map((t, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-blue-500"/>{t}</li>
            ))}
          </ul>
          <div className="mt-8 p-6 rounded-2xl bg-white border border-indigo-200/60">
            <p className="text-gray-700">You’ll also get a step-by-step action plan for the next 30 days so you can start landing clients and building systems immediately.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAttend
