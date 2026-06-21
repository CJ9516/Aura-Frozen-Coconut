import React from 'react'

const steps = ['Farm','Cleaning','Grating','Blast Freezing','Quality Inspection','Packaging','Distribution']

export default function Timeline(){
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Manufacturing Process</h3>
        <div className="mt-6 flex flex-col gap-6">
          {steps.map((s,i)=> (
            <div key={s} className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-auraGreen text-white">{i+1}</div>
              <div className="font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
