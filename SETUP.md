# Premium Saree Showcase - Setup Guide

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📦 Features Implemented

### Frontend Features
- ✅ Premium luxury design with Indian aesthetic
- ✅ Smooth animations (GSAP, Framer Motion, AOS)
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Product catalog with filters and sorting
- ✅ Shopping cart system
- ✅ Wishlist functionality
- ✅ Product detail pages with image zoom
- ✅ Checkout flow with coupon system
- ✅ Razorpay payment integration structure

### Admin Dashboard
- ✅ Product management (Add, Edit, Delete)
- ✅ Order management
- ✅ Analytics dashboard
- ✅ Beautiful admin UI matching main site

## 🎨 Design System

### Colors
- Primary Maroon: `#6D1B2D`
- Gold Accent: `#C9A24D`
- Ivory Background: `#FAF7F2`
- Text Black: `#111111`

### Typography
- Headings: Playfair Display
- Body: Poppins

## 🔧 Configuration

### Razorpay Integration

To enable payment processing:

1. Sign up at [Razorpay](https://razorpay.com)
2. Get your API keys
3. Update `src/pages/Checkout.jsx`:
   ```javascript
   key: 'YOUR_RAZORPAY_KEY_ID'
   ```
4. Include Razorpay script in `index.html`:
   ```html
   <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   ```
5. Uncomment the Razorpay initialization in `handlePayment` function

### Coupon Codes
Currently available coupon codes:
- `WELCOME10` - 10% discount
- `SAVE20` - 20% discount
- `LUXURY30` - 30% discount

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Home page sections
│   ├── Preloader.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Checkout.jsx
│   └── Admin/         # Admin dashboard
├── context/           # React Context providers
│   ├── CartContext.jsx
│   └── WishlistContext.jsx
├── data/              # Mock data
│   └── products.js
└── App.jsx            # Main app component
```

## 🎯 Key Technologies

- **React 18** - UI library
- **React Router** - Navigation
- **GSAP** - Advanced animations
- **Framer Motion** - Page transitions
- **AOS** - Scroll animations
- **Lenis** - Smooth scrolling
- **Bootstrap 5** - Grid system
- **React Icons** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 992px
- Desktop: > 992px

## 🎨 Animation Features

- GSAP text reveal animations
- Framer Motion page transitions
- Magnetic button effects
- Parallax scrolling
- Hover animations
- Smooth scroll (Lenis)

## 🔐 Admin Access

Navigate to `/admin` to access the admin dashboard.

Current features:
- View analytics
- Manage products
- View orders
- Add/edit products

## 📝 Notes

- Images are using Unsplash placeholders - replace with actual product images
- Product data is mock data - integrate with your backend
- Payment integration structure is ready - add Razorpay keys
- All animations are optimized for performance

## 🚀 Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure environment variables if needed
4. Set up Razorpay keys in production

## 💡 Future Enhancements

- Backend API integration
- User authentication
- Order tracking
- Email notifications
- Product reviews
- Advanced search
- Multi-language support


