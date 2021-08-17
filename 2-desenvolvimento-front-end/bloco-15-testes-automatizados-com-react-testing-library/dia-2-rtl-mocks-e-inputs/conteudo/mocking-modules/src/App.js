// App.js
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  // componentDidMount() {
  //   const API_URL = 'https://icanhazdadjoke.com/';
  //   fetch(API_URL, { headers: { Accept: 'application/json' } })
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ joke: data.joke }));
  // }

  async componentDidMount() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const response = await fetch(API_URL, { headers: { Accept: 'application/json' } }); // fetch - resolve uma promisse, que vai nos retornar um objeto
    const data = await response.json();

    this.setState({ joke: data.joke })
  }

//   render() {
//     return (
//       <div className="App">
//         {this.state.joke}
//       </div>
//     );
//   }
// }

  render() {
    const { joke } = this.state;
    return (
      <div className="App" data-testid="joke-element">
        {joke}
      </div>
    )
  }
}

export default App;