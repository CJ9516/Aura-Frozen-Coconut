import React from 'react'

export default function Nutrition(){
  const items = [
    {k:'Calories', v:'120 kcal'}, {k:'Healthy fats', v:'9g'}, {k:'Fiber', v:'3g'}, {k:'Protein', v:'2g'}, {k:'Potassium', v:'150mg'}, {k:'Vitamin C', v:'2mg'}
  ]
  return (
    <section className="py-12 bg-white/60 glass">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Nutrition</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(i=> (
            <div key={i.k} className="p-4 rounded-lg bg-white/80">
              <div className="text-sm text-gray-600">{i.k}</div>
              <div className="text-xl font-semibold">{i.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
