import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Description from '../components/Description'
import Highlights from '../components/Highlights'
import DonationBanner from '../components/DonationBanner'
import Footer from '../components/Footer'
import HeroBullets from '../components/HeroSection'
import AnimatedText from '../components/AnimatedText'
import Carouselslider from '../components/Carouselslider'
import About from '../components/About'
import NewsLetter from '../components/NewsLetter'
import Contact from '../components/Contact'
import { SimpleGrid, Text, ThemeIcon, rem } from '@mantine/core'
import { IconCircleDotted, IconFileCode, IconFlame, IconReceiptOff } from '@tabler/icons-react'
import HeroSection from '../components/HeroSection'
import ImpactMetrics from '../components/InputMetrics'
import ServicesOverview from '../components/ServicesOverview'
import DynamicProgrammes from '../components/DynamicProgrammes'
import DonorRecognition from '../components/DonorRecognition'
import TestimonialCarousel from '../components/TestimonialCarousel'
import GetInvolved from '../components/GetInvolved'
import SuccessStories from '../components/SuccessStories'
import ContactSection from '../components/ContactSection'
import Chatbot from '../components/Chatbot'
import VerticalScrollingAnnouncement from '../components/VerticalScrollingAnnouncement'
import { CardSpotlight } from '../components/card-spotlight'
// import CardsCarousel from '../components/Carousel'

const Homepage = () => {
  return (
    <div >
   
     {/* <HeroSection/> */}
     <div className="  h-screen  flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 h-2/6 md:h-full">
        <Carouselslider />
      </div>
      <div className="w-full md:w-1/4 h-4/6 md:h-full">
        <VerticalScrollingAnnouncement />
      </div>
    </div>
     {/* <About/> */}
     <CardSpotlight>
     <ImpactMetrics/>
     <ServicesOverview/>
     </CardSpotlight>
     <DynamicProgrammes/>
     <DonationBanner/>
     
     <DonorRecognition/>
     <TestimonialCarousel/>
     <NewsLetter/>
        <SuccessStories />
  
        {/* <Chatbot/> */}
        {/* <Carouselslider/> */}
 
    
   
  
   
  
    
    </div>
  )
}

Homepage.propTypes = {

}

export default Homepage
