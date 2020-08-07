import React from 'react';
import ReactDOM from 'react-dom';
// import Calculator from './components/Calculator';
import Conversor from './example/Conversor';
import Logo from './assets/reactLogo.png';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <img src={Logo} alt="React" />
    <h3 style={{color: '#50fa7b', margin: '32px'}}>b1nary c0de trans1at0r</h3>
    <Conversor />
  </React.StrictMode>,
  document.getElementById('root')
);

