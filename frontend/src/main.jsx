import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ChakraProvider,
  ColorModeProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import App from './App.jsx';
import theme from './theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      {/* <ColorModeProvider> */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  </React.StrictMode>
);
