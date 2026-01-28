import React from 'react'
import HeroSection from '../components/heroSection'
import AboutUs from '../components/aboutUsSection'
import Products from '../components/products'
import Testimonials from '../components/testimonials'

const Home = () => {
    return (
        <React.Fragment>
          <HeroSection />
          <AboutUs />
          <Products />
          <Testimonials />
        </React.Fragment>
    )
}

export default Home