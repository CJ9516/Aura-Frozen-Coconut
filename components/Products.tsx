import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products(){
  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold">Products</h3>
        <div className="mt-6 grid gap-6">
          {products.map(p=> <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
