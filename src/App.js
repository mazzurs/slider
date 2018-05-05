import React, { Component } from 'react'
// import {Provider} from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Slider from './components/slider/slider'
import feed from './feed.json'

import animals from './img/animals.jpeg'
import people from './img/people.jpeg'
import sepia from './img/sepia.jpeg'
import sepia1 from './img/sepia1.jpeg'
import sepia2 from './img/sepia2.jpeg'
import tech from './img/tech.jpeg'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  render () {
    let slides = feed.slider

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <h2>Slider is here</h2>
          <Slider slides={slides}/>
        </div>
      </div>
    )
  }
}

export default App
