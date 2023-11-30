import React from 'react'
import NewsLetter, { Search } from '../components/NewsLetter'
import BannerImage from '../components/BannerImage'
import { Flex } from '@mantine/core'
import ArticlesGrid from '../components/ArticlesGrid'
import SignupLetter from './SignupLetter'


const YesjEchos = () => {
  return (
    <>
      <div style={{backgroundColor:"#ccc"}}>
         <BannerImage source={'https://yesj.org/assets/in-banners/banner-programmes.jpg'}/>
       <SignupLetter/>
       
    </div>
    <ArticlesGrid/>
    </>
  
  )
}

export default YesjEchos
