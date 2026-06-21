import React from 'react'

const features = [
  { title: '100% Natural', icon: '🥥' },
  { title: 'No Preservatives', icon: '🚫' },
  { title: 'No Artificial Colors', icon: '🎨' },
  { title: 'Hygienically Processed', icon: '🧼' },
  { title: 'Fresh Frozen Technology', icon: '❄️' }
]

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/images/product-1kg.svg" alt="Aura product" className="rounded-xl shadow" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">About Aura</h2>
          <p className="mt-4 text-gray-700">Aura Frozen Coconut brings you freshly grated Sri Lankan coconut, flash frozen to preserve nutrients and authentic flavor. Our process ensures purity, safety, and convenience.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map(f=> (
              <li key={f.title} className="flex items-center gap-3 bg-white/60 glass p-3 rounded-md">
                <div className="text-2xl">{f.icon}</div>
                <div className="font-medium">{f.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
