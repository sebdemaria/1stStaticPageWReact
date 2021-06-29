import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Wrapper />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

