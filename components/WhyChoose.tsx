import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  { title: 'Farm Fresh', icon: '🥥' },
  { title: 'Instant Frozen', icon: '❄️' },
  { title: '100% Natural', icon: '🌱' },
  { title: 'Healthy Choice', icon: '❤️' }
]

export default function WhyChoose(){
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Why Choose Aura</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((c,i)=> (
            <motion.div key={c.title} whileHover={{y:-6}} className="p-6 rounded-xl glass shadow-sm text-center">
              <div className="text-4xl">{c.icon}</div>
              <div className="mt-3 font-semibold">{c.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
