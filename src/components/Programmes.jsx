import { Container, Flex, Title } from '@mantine/core'
import ImageCard from './ImageCard'
import ProgramsGrid from './ProgramsGrid'
import NewsLetter from './NewsLetter'
import ProgramList from './ProgramList'

const Programmes = () => {
  return (
    <>
        
        <Container py={'5%'} size={'xl'}>
      <ProgramsGrid/>
    </Container>
   
    </>
   
  )
}

export default Programmes
