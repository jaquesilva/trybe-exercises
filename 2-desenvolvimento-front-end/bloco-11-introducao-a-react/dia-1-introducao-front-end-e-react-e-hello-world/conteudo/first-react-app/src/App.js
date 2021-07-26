import React from 'react';
import Component from './Component';
import HelloWorld from './HelloWorld';


function App() {
  return (
    <div>
      <HelloWorld />
      <Component />
    </div>
  )
}

export default App; // estamos exportando esse arquivo para index.js, onde será renderizado por meio do ReactDOM.render
