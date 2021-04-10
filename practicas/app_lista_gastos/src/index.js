import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'

WebFont.load({

  // Asi se usan las fuentes en react con webfontloader
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});


const Index = () => {
  return(
    <App />
  );
};


ReactDOM.render(<Index />, document.getElementById('root'));
