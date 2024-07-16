import { Container, Flex, Title } from '@mantine/core'
import ImageCard from './ImageCard'
import ProgramsGrid from './ProgramsGrid'
import NewsLetter from './NewsLetter'

const Programmes = () => {
  return (
    <>
   
        <Container py={'2%'} size={'xl'}>
        <Title mb={25} mx={20} >Programmes</Title>
      <ProgramsGrid/>
    </Container>
   
    </>
   
  )
}

export default Programmes
