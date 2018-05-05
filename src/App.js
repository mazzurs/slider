import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Slider from './components/slider/slider'
import feed from './feed.json'

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
