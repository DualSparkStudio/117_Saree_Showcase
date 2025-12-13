import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '../components/sections/Hero'
import Categories from '../components/sections/Categories'
import FeaturedCollection from '../components/sections/FeaturedCollection'
import Offers from '../components/sections/Offers'
import VideoLookbook from '../components/sections/VideoLookbook'
import Testimonials from '../components/sections/Testimonials'
import Instagram from '../components/sections/Instagram'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
      <FeaturedCollection />
      <Offers />
      <VideoLookbook />
      <Testimonials />
      <Instagram />
    </div>
  )
}

export default Home

