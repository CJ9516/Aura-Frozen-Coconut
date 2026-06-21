import React from 'react'
import { motion } from 'framer-motion'

const recipes = [
  {title:'Coconut Curry', desc:'A spicy coconut curry.', img:'/images/product-400g.svg'},
  {title:'Pol Sambol', desc:'Coconut sambol, a Sri Lankan classic.', img:'/images/product-1kg.svg'},
  {title:'Coconut Roti', desc:'Flatbreads with coconut.', img:'/images/product-400g.svg'}
]

export default function Recipes(){
  return (
    <section id="recipes" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Recipe Inspiration</h3>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-4">
          {recipes.map(r=> (
            <motion.div key={r.title} whileHover={{ scale: 1.03 }} className="min-w-[240px] p-4 rounded-xl glass">
              <img src={r.img} alt={r.title} className="rounded" />
              <h4 className="mt-3 font-semibold">{r.title}</h4>
              <p className="text-sm text-gray-600">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
