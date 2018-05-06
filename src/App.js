import React, { Component } from 'react'
import './App.css'
import Slider from './components/slider/slider'
import feed from './feed.json'

class App extends Component {

  render () {
    let slides = feed.slider

    return (
      <div className="App">
        <div>
          <h2>Slider is here</h2>
          <Slider slides={slides}/>
        </div>
      </div>
    )
  }
}

export default App
