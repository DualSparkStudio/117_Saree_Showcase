// Mock product data
export const products = [
  {
    id: 1,
    name: 'Royal Banarasi Silk Saree',
    category: 'Banarasi',
    price: 45000,
    discountedPrice: 35000,
    image: 'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/34107842/pexels-photo-34107842.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/34107842/pexels-photo-34107842.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/34107842/pexels-photo-34107842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/34673465/pexels-photo-34673465.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/33350574/pexels-photo-33350574.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/33350574/pexels-photo-33350574.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/34673465/pexels-photo-34673465.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/34673465/pexels-photo-34673465.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/33729217/pexels-photo-33729217.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/33729217/pexels-photo-33729217.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    image: 'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/34481840/pexels-photo-34481840.jpeg?auto=compress&cs=tinysrgb&w=800',
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

