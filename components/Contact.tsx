import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12 bg-white/60 glass">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold">Contact</h3>
          <p className="mt-2 text-gray-700">Address: 123 Coconut Way, Colombo, Sri Lanka</p>
          <p className="mt-1">Phone: +94 77 123 4567</p>
          <p className="mt-1">Email: hello@aurafrozencoconut.example</p>
          <div className="mt-4">
            <a href="https://wa.me/94771234567" className="px-4 py-2 bg-green-600 text-white rounded">WhatsApp</a>
          </div>
        </div>
        <form className="space-y-3">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" rows={5} />
          <button className="px-5 py-3 bg-auraRed text-white rounded">Send Message</button>
        </form>
      </div>
    </section>
  )
}
