// Mock product data
export const products = [
  {
    id: 1,
    name: 'Royal Banarasi Silk Saree',
    category: 'Banarasi',
    price: 45000,
    discountedPrice: 35000,
    image: 'https://images.unsplash.com/photo-1583912267550-c5289c0e724e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583912267550-c5289c0e724e?w=800&q=80',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    ],
    fabric: 'Pure Banarasi Silk',
    occasion: 'Wedding',
    description: 'Exquisite Banarasi silk saree with intricate zari work and elegant patterns.',
    inStock: true,
    isNew: true,
  },
  {
    id: 2,
    name: 'Kanjivaram Temple Border Saree',
    category: 'Kanjivaram',
    price: 55000,
    discountedPrice: 45000,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
      'https://images.unsplash.com/photo-1583912267550-c5289c0e724e?w=800&q=80',
    ],
    fabric: 'Pure Kanjivaram Silk',
    occasion: 'Wedding',
    description: 'Traditional Kanjivaram saree with temple border design and rich zari work.',
    inStock: true,
    isNew: false,
  },
  {
    id: 3,
    name: 'Designer Embroidered Saree',
    category: 'Designer',
    price: 35000,
    discountedPrice: 28000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80',
    ],
    fabric: 'Georgette with Embroidered Work',
    occasion: 'Party',
    description: 'Modern designer saree with intricate embroidery and contemporary design.',
    inStock: true,
    isNew: true,
  },
  {
    id: 4,
    name: 'Silk Wedding Saree',
    category: 'Wedding',
    price: 65000,
    discountedPrice: 55000,
    image: 'https://images.unsplash.com/photo-1566479179817-7d8b3e1e0c94?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566479179817-7d8b3e1e0c94?w=800&q=80',
    ],
    fabric: 'Pure Silk',
    occasion: 'Wedding',
    description: 'Luxurious wedding saree with heavy zari work and traditional motifs.',
    inStock: true,
    isNew: false,
  },
  {
    id: 5,
    name: 'Party Wear Georgette Saree',
    category: 'Party',
    price: 25000,
    discountedPrice: 20000,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
    ],
    fabric: 'Georgette',
    occasion: 'Party',
    description: 'Elegant party wear saree with modern prints and comfortable drape.',
    inStock: true,
    isNew: true,
  },
  {
    id: 6,
    name: 'Pure Silk Traditional Saree',
    category: 'Silk',
    price: 40000,
    image: 'https://images.unsplash.com/photo-1583912267550-c5289c0e724e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583912267550-c5289c0e724e?w=800&q=80',
    ],
    fabric: 'Pure Silk',
    occasion: 'Wedding',
    description: 'Classic silk saree with traditional patterns and elegant drape.',
    inStock: true,
    isNew: false,
  },
]

export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id))
}

export const getProductsByCategory = (category) => {
  if (!category) return products
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export const categories = [
  'Silk Sarees',
  'Banarasi',
  'Kanjivaram',
  'Designer Sarees',
  'Wedding Sarees',
  'Party Wear',
]

