import React from 'react';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes'
import GlobalStyle from './global'

function App() {
  return (
    <>
      <BrowserRouter>
          <GlobalStyle />
          <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
