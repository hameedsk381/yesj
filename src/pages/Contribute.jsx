import React from 'react'
import BannerImage from '../components/BannerImage'
import { Box, Container, Flex, Title } from '@mantine/core'
import Divider from '../components/Divider'
import { incentives } from '../data/values'
import './Contribute.css'
import { colors } from '../themes/colors'

const Contribute = () => {
  return (
    <div>
     
      <Box style={{backgroundColor:"#f4f4f4"}}>
      <BannerImage source={'https://yesj.org/assets/in-banners/banner-contribute.jpg'}/>
        <Container p={3} my={'30px'}>
            <Title ta={'center'}>Donate To Transform</Title>
            <div className='divider' style={{border:`2px solid ${colors.titleColor}`}}></div>
            <div className="grid-container">
            {incentives && incentives.map((inc, idx) => (
                <div key={idx} className="grid-item">
                    <img src={inc.logo} alt="logo" className="image-bounce"/>
                    <h3 style={{ fontWeight: 'bold' }}>{inc.title}</h3>
                    <p>{inc.content}</p>
                </div>
            ))}
        </div>
        </Container>
      </Box>
    </div>
  )
}

export default Contribute
