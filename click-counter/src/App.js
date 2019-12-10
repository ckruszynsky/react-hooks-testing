import React, {Component} from 'react';


class App extends Component {
  render() {
    return (
        <div data-test='component-app'>
          <h1>App</h1>
          <h1 data-test='counter-display'>The counter is current:</h1>
          <button data-test="increment-button">Increment counter</button>
        </div>
    );
  }
}

export default App;
