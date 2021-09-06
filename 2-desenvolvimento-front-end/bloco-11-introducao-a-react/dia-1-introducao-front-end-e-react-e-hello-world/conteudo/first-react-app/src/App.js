import React from 'react';
import Component from './Component';
import HelloWorld from './HelloWorld';
import './App.css';


function App() {
  return (
    <div className='App'>
      <HelloWorld />
      <Component />
    </div>
  )
}

export default App; // estamos exportando esse arquivo para index.js, onde será renderizado por meio do ReactDOM.render
