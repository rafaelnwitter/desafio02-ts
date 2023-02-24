import './Header.css'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Component } from 'react'


export class Header extends Component  {
  render(){
    return(
    <Box className='header'>
        <Heading className='header' mb={4}>Dio Bank Modern online and offline payments</Heading>
        
    {/* <Text fontSize={'h2'}>
      Paystack helps businesses in Africa get paid by anyone, anywhere in the
      world
    </Text>
    <Button size='lg' colorScheme='green' mt='24px'>
      Check t
    </Button> */}
  </Box>
  )
  }
}