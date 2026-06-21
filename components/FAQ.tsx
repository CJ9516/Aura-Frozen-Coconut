import React from 'react'

const faqs = [
  {q:'How long does frozen coconut last?', a:'Up to 6 months when kept frozen.'},
  {q:'Is it preservative free?', a:'Yes — 100% natural, no preservatives.'},
  {q:'Can it be used directly?', a:'Yes, thaw slightly or use frozen in cooking.'},
  {q:'How should it be stored?', a:'Keep in a freezer at -18°C or below.'}
]

export default function FAQ(){
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">FAQ</h3>
        <div className="mt-6">
          {faqs.map(f=> (
            <details key={f.q} className="p-4 border rounded mb-2">
              <summary className="font-medium">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
