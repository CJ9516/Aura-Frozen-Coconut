import React from 'react'

const reviews = [
  {name:'Maya', text:'Tastes like fresh coconut!', rating:5},
  {name:'Arun', text:'Great quality and texture.', rating:5},
  {name:'Priya', text:'Convenient and pure.', rating:5},
  {name:'Liam', text:'Excellent for curries.', rating:5},
  {name:'Sara', text:'My pantry staple!', rating:5}
]

export default function Testimonials(){
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Testimonials</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {reviews.map(r=> (
            <div key={r.name} className="p-4 rounded-lg bg-white shadow">
              <div className="text-yellow-500">{'★'.repeat(r.rating)}</div>
              <p className="mt-2 text-gray-700">{r.text}</p>
              <div className="mt-3 text-sm text-gray-500">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
