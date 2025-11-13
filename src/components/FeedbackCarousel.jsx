import React, { useEffect, useRef, useState } from 'react'

const FeedbackCarousel = () => {
  const items = [
    {
      name: 'Aarav, Student',
      text: 'Closed my first client in 10 days using the AI outreach system shared. Unreal value for ₹9!'
    },
    {
      name: 'Neha, Freelancer',
      text: 'The automations saved me 12 hours a week. Landed 3 projects this month.'
    },
    {
      name: 'Rohan, Agency Owner',
      text: 'Finally a clear, proof-based roadmap. Our conversions and margins went up together.'
    },
    {
      name: 'Ishita, Content Creator',
      text: 'Loved the templates and pricing frameworks. I feel confident pitching now.'
    }
  ]

  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What Attendees Say</h2>
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-indigo-200/60 text-center min-h-[180px]">
            <p className="text-gray-800 text-lg">“{items[index].text}”</p>
            <p className="mt-4 text-sm text-gray-600">— {items[index].name}</p>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackCarousel
