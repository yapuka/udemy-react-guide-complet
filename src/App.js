import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'

class App extends Component {
  render() {
    const { titre } = this.props
    return (
      <div className="App">
        <h1>{titre}</h1>

        <Membre nom="Antho" />
        <Membre nom="Ségolène" />
        <Membre nom="Eléanor" />
        <Membre nom="Mocha" />
      </div>
    )
  }
}

export default App
