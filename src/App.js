import React, { Component } from 'react';
import './App.css';
import TextComponent from './Text.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          How fast can you type?
        </p>
        <TextComponent />
      </div>
    );
  }
}

export default App;
