import React, { useEffect, useState } from 'react'

const Offer = ({ onCTAClick }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes

  useEffect(() => {
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [])

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const ss = String(timeLeft % 60).padStart(2, '0')

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Worth ₹4999 – Join Now for Only ₹9</h2>
          <p className="mt-4 text-white/90">Limited-time offer for action takers. Secure your seat and get instant WhatsApp confirmation with reminders so you never miss it.</p>
          <div className="mt-6 inline-flex items-center gap-3 bg-white/10 rounded-xl border border-white/20 px-4 py-2">
            <span className="text-sm">Countdown:</span>
            <span className="text-2xl font-mono">{mm}:{ss}</span>
            <span className="ml-3 text-xs bg-emerald-400 text-emerald-900 font-bold px-2 py-1 rounded">Limited Seats Available</span>
          </div>
          <div className="mt-8">
            <button onClick={onCTAClick} className="px-6 py-3 rounded-xl bg-white text-indigo-700 font-bold shadow-lg hover:shadow-xl transition">Book Your Seat for ₹9</button>
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold">WhatsApp Automation Integration</h3>
          <p className="mt-2 text-white/90">After payment, attendees receive instant confirmation and reminder messages via WhatsApp. We integrate with tools like Twilio WhatsApp API, Interakt, or WATI. Just connect your number and map the flow.</p>
          <ul className="mt-4 space-y-2 text-white/90">
            <li>• Payment success → Instant confirmation message</li>
            <li>• 24 hrs before → Reminder with calendar link</li>
            <li>• 1 hr before → Join link and bonus checklist</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Offer
