export type Product = {
  id: string
  name: string
  weight: string
  price?: number
  description: string
  nutrition: Record<string,string>
  image: string
}

export const products: Product[] = [
  {
    id: 'aura-400g',
    name: 'Aura Frozen Coconut 400g',
    weight: '400g',
    price: 3.99,
    description: 'Freshly grated, flash frozen coconut — ready to use in curries, sweets and baking.',
    nutrition: { Calories: '120 kcal', Fat: '9g', Fiber: '3g', Protein: '2g', Potassium: '150mg', VitaminC: '2mg' },
    image: '/images/product-400g.svg'
  },
  {
    id: 'aura-1kg',
    name: 'Aura Frozen Coconut 1kg',
    weight: '1kg',
    price: 9.99,
    description: 'Larger pack for families and food service.',
    nutrition: { Calories: '120 kcal', Fat: '9g', Fiber: '3g', Protein: '2g', Potassium: '150mg', VitaminC: '2mg' },
    image: '/images/product-1kg.svg'
  }
]
