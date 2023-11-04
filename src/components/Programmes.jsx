import { Container, Flex } from '@mantine/core'
import ImageCard from './ImageCard'
import ProgramsGrid from './ProgramsGrid'
import NewsLetter from './NewsLetter'

const Programmes = () => {
  return (
    <>
        
        <Container py={'10%'} size={'xl'}>
      <ProgramsGrid/>
    </Container>
    <NewsLetter/>
    </>
   
  )
}

export default Programmes
