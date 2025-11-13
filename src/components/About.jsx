import React from 'react'

const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Teen Hustler to AI Business Mentor</h2>
          <p className="mt-5 text-gray-700 leading-relaxed">
            I started at 16, built my first AI project at 17 and hit my first ₹1L. Since then, I’ve helped students, freelancers, and agency owners launch AI-powered offers, automate client acquisition, and scale income using smart systems.
          </p>
          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-purple-500"/>Earned first ₹1,00,000 at age 17 with AI services</li>
            <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-purple-500"/>Mentored 500+ learners to build AI income streams</li>
            <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-purple-500"/>Built repeatable systems to attract and close clients</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-200 via-fuchsia-200 to-blue-200 border border-purple-300/40 shadow-xl" />
        </div>
      </div>
    </section>
  )
}

export default About
