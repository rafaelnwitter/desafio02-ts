import { Button, Flex, Stack, useColorMode } from '@chakra-ui/react';
import { Card } from './components/Card';
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { Layout } from './components/Layout';
import { CustomBadge } from './styles/Style';
import { IoContrastSharp, IoStar } from 'react-icons/io5';
// import ThemeToggleButton from './components/Button/Button';

function App() {
  return (
  <Layout children={<Card />} />

  );
}

export default App;
