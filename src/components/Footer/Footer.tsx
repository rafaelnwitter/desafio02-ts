import { Box, Button, Link, OrderedList, ListItem, Stack, Text } from '@chakra-ui/react'
import { Component, ReactNode} from 'react'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import './Footer.css'

class Footer extends Component {
  private ButtonLinkedin = (): ReactNode => {
    return (
      <Link href="https://linkedin.com/in/rafaelnwitt" target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoLinkedin />}
        value="@rafaelnwitt"
      />

    </Link>
    )  
  }
  private ButtonGithub = (): ReactNode => {
    return (
      <Link href="https://wwww.github.com/rafaelnwitter" target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoGithub />}
        value="@rafaelnwitt"
      />

    </Link>
    )  
  }
  private ButtonInstagram = (): ReactNode => {
    return (
      <Link href="https://wwww.instagram.com/r_witt" target="_blank">
      <Button
        variant="ghost"
        colorScheme="teal"
        leftIcon={<IoLogoInstagram />}
          value="@r_witt"
          width={'100%'}
      />
    </Link>
    )  
  }
    
  render() {
    return (
      <>
      <Box className="footer">
        <Text>&copy; {new Date().getFullYear()} Rafael Nilson Witt.</Text>
        <Box className='footer--icons'>
          {this.ButtonLinkedin()}
          {this.ButtonGithub()}
          {this.ButtonInstagram()}
        </Box>
      </Box>
      </>
    )
  }
}

export default Footer
