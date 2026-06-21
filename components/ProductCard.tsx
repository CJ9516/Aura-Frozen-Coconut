import React from 'react'
import Image from 'next/image'
import { Product } from '../data/products'

export default function ProductCard({p}:{p:Product}){
  return (
    <div className="p-4 rounded-xl glass shadow hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-28 h-36 relative">
          <Image src={p.image} alt={p.name} width={280} height={360} />
        </div>
        <div>
          <h4 className="font-semibold">{p.name}</h4>
          <div className="text-sm text-gray-600">{p.weight}</div>
          <p className="mt-2 text-sm text-gray-700">{p.description}</p>
          <div className="mt-3 flex items-center gap-2">
            <button className="px-3 py-2 bg-auraRed text-white rounded">Add to Cart</button>
            <button className="px-3 py-2 border rounded">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
