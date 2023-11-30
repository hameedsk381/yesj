import {   Flex,  SimpleGrid } from '@mantine/core'
import CustomSection from './CustomSection'
import Values from './values'
import { values } from '../data/values'

const OurMission = () => {
  return (
    <div style={{width:"100%"}}>
{/* <Flex px={> */}
    
      {/* <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}> */}
      <img src='https://yesj.org/assets/in-banners/banner-aboutus.jpg' style={{width:"100%"}}/>
 <Values values={values} readmore={false}/>
       
{/* // </Flex> */}
    </div>
  )
}

export default OurMission
