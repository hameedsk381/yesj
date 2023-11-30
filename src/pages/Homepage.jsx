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
import Values from '../components/values'
import { homepageValues } from '../data/values'
// import CardsCarousel from '../components/Carousel'
const about = [
  {
    title : "YOUTH EMPOWERING SERVICE - JESUITS ",
    content : [" In India, the Telugu speaking states of Andhra Pradesh and Telangana consist of almost 85 million people of which a vast majority are young. Most of the youth living in rural, semi-urban and urban slum areas encounter the harsh realities of poverty, lack of education, unemployment, casteism, gender discrimination and social inequality. We exist to bring social, psychological, spiritual and practical help to young people in need, irrespective of their caste, religion and social background. "],
  }
]
const Homepage = () => {
  return (
    <div>
     
        {/* <Carouselslider/> */}
    {/* <HeroBullets/> */}
    {/* <AnimatedText/> */}
    <About navigationEnabled slider={true} data={about}/>
    <Values values={homepageValues} readmore={true}/>
    <NewsLetter/>
    <DonationBanner/>
    
      {/* <Footer /> */}
    </div>
  )
}

Homepage.propTypes = {

}

export default Homepage
