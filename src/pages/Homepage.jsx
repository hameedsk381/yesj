import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Description from '../components/Description'
import Highlights from '../components/Highlights'
import DonationBanner from '../components/DonationBanner'
import Footer from '../components/Footer'
import HeroBullets from '../components/HeroBullets'
import AnimatedText from '../components/AnimatedText'
import Carouselslider from '../components/Carouselslider'
import About from '../components/About'
import NewsLetter from '../components/NewsLetter'
import Contact from '../components/Contact'
// import CardsCarousel from '../components/Carousel'

const Homepage = () => {
  return (
    <div>
     
        {/* <Carouselslider/> */}
    {/* <HeroBullets/> */}
    {/* <AnimatedText/> */}
    <About/>
    <NewsLetter/>
    <DonationBanner/>
    
      {/* <Footer /> */}
    </div>
  )
}

Homepage.propTypes = {

}

export default Homepage
