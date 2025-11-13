import React from 'react'

const FAQ = () => {
  const faqs = [
    { q: 'When is the webinar and how long is it?', a: 'You’ll receive the date, time, and calendar link immediately after booking. The session is 90 minutes with Q&A.' },
    { q: 'Will I get the recording?', a: 'Yes, recording access will be shared for a limited time after the session.' },
    { q: 'Is there a refund?', a: 'Since this is a highly discounted seat, refunds are not available. If you miss it, you can join the next batch.' },
    { q: 'How do I join the webinar?', a: 'You’ll get a unique link via email and WhatsApp. We also send reminders 24h and 1h before the event.' },
    { q: 'Do I need any prior experience?', a: 'No. This is beginner-friendly. You’ll get step-by-step guidance and templates.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-indigo-300 transition">
              <p className="font-semibold text-gray-900">{f.q}</p>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
