import './App.css';

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false
    };
  }

  onIncrement = () => {
   this.setState({counter: this.state.counter +1, error: false});
  }

  onDecrement = () => {
    if (this.state.counter === 0) {
      this.setState({
        error: true
      });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  render() {
    const errorClass = this.state.error ? '' : 'hidden';
    return (
      <div data-test='component-app'>
        <h1>App</h1>
        <h1 data-test='counter-display'>The counter is currently : {this.state.counter}</h1>
        <div 
          data-test='error-message'
          className={`error ${errorClass}`}>
              The counter cannot go below zero
          </div>
       <button
          data-test="increment-button"
          onClick={()=> this.onIncrement()}>
          Increment counter
          </button>
        <button
          data-test="decrement-button"
          onClick={() => this.onDecrement()}
        >Decrement counter</button>
      </div>
    );
  }
}

export default App;
