import React from 'react'
import About from '../components/About'
import { aboutus } from '../data/values'

const AboutUs = () => {
  return (
    <div>
      <img src='https://yesj.org/assets/in-banners/banner-aboutus.jpg' style={{width:"100%"}}/>
      <About data={aboutus} imgg={true}/>
    </div>
  )
}

export default AboutUs
