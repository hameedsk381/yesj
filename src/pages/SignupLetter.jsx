import { Flex } from '@mantine/core'
import React from 'react'
import { Search } from '../components/NewsLetter'

const SignupLetter = () => {
  return (
    <Flex style={{padding:"1.5rem"}} mx={'lg'}>
    <p style={{width:"75%"}}>Echoes, our quarterly newsletter is the platform through which we regularly communicate, and interact with the world at large. To know what's happening at YES-J, subscribe to ECHOES.</p>
    <Search/>
   </Flex>
  )
}

export default SignupLetter
