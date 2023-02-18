import { Box, ChakraProvider, Center, Input, Button } from "@chakra-ui/react"
import { login } from "../services/login"

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <div>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
    </div>
  )
}

export const Login = () =>  {
  return(
    <ChakraProvider>
          <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='10px' >
              <Center>
                <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Center>
                <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                  Button
                </Button>
              </Center>
            </Box>
          </Box>
    </ChakraProvider>
  )
}