import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.titre}</h1>

        <Membre nom="Antho" />
        <Membre nom="Ségolène" />
        <Membre nom="Eléanor" />
        <Membre nom="Mocha" />
      </div>
    )
  }
}

export default App
