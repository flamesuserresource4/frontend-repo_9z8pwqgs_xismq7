import React from 'react'

const SocialProof = () => {
  const stats = [
    { label: 'Attendees', value: '2,000+' },
    { label: 'Success Stories', value: '500+' },
    { label: 'Avg. Rating', value: '4.9/5' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Results & Love from the Community</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 border border-indigo-200/60 text-center">
              <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">{s.value}</p>
              <p className="text-gray-700 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500">Add Testimonial Screenshot</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
