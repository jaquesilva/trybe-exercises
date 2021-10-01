import React from 'react';
// import staringCat from './staringCat.jpeg';
// import Image from './Image';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {

    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
    <div className="App">
      {/* <Image source={staringCat} alternativeText="Cute cat staring" /> */}
      <h1> Orders recently created </h1>
      <Order order={ headphone }/>
      <Order order={ energyDrink }/>
    </div>
    );
  }
}

export default App;

// O que o componente App é em relação a Order ? R= O componente 'App.js' é pai do componente 'Order.js'
