import React, { Component } from 'react'
import './App.css';
import Membre from './components/Membre'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Membre />
        
      </div>
    );
  }
}

export default App;
