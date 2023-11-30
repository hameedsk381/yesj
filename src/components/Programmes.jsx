import { Container, Flex } from '@mantine/core'
import ImageCard from './ImageCard'
import ProgramsGrid from './ProgramsGrid'
import NewsLetter from './NewsLetter'
import BannerImage from './BannerImage'

const Programmes = () => {
  return (
    <>
    <BannerImage source={'https://yesj.org/assets/in-banners/banner-media.jpg'}/>
        <Container py={'8%'} size={'xl'}>
         
      <ProgramsGrid/>
    </Container>
    </>
   
  )
}

export default Programmes
