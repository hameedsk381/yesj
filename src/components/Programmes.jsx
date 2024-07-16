import { Container, Flex } from '@mantine/core'
import ImageCard from './ImageCard'
import ProgramsGrid from './ProgramsGrid'
import NewsLetter from './NewsLetter'
import ProgramList from './ProgramList'

const Programmes = () => {
  return (
    <div className='h-72 bg-gradient-to-r from-purple-600  via-blue-600 to-purple-600'>
        
        <Container py={'5%'} size={'xl'}>
      <ProgramList/>
      <NewsLetter/>
    </Container>
    </div>
   
  )
}

export default Programmes
