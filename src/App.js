import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'

const famille = {
  membre1: {
    nom: 'Antho',
    age: 27,
  },
  membre2: {
    nom: 'Ségolène',
    age: 27,
  },
  membre3: {
    nom: 'Eléanor',
    age: 0,
  },
  membre4: {
    nom: 'Mocha',
    age: 2,
  },
}

class App extends Component {
  state = {
    famille,
  }

  handleClick = () => {
    console.log('Click');
  }

  render() {
    const { titre } = this.props
    const { famille } = this.state

    return (
      <div className="App">
        <h1>{titre}</h1>

        <Membre nom={famille.membre1.nom} />
        <Membre nom={famille.membre2.nom} />
        <Membre nom={famille.membre3.nom} />
        <Membre nom={famille.membre4.nom}>
          <strong>Je suis un chien</strong>
        </Membre>

        <button onClick={this.handleClick}>
          Veillir
        </button>
      </div>
    )
  }
}

export default App
