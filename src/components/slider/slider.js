import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './slider.css'

export default class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      items: this.props.slides,
      item: {},
      number: 0
    }

    this.goToTheRightEveryTwoSeconds()

    this.goLeft = this.goLeft.bind(this)
    this.goRight = this.goRight.bind(this)
    this.goToTheRightEveryTwoSeconds = this.goToTheRightEveryTwoSeconds.bind(this)
  }

  componentWillMount () {
    this.state.item = this.state.items[0]
  }

  componentDidMount () {
    document.getElementById('slider').onmouseover =
      document.getElementById('slider').onmouseout = handler

    let that = this
    function handler (event) {
      if (event.type == 'mouseover') {
        clearInterval(that.interval)
      }
      if (event.type == 'mouseout') {
        that.goToTheRightEveryTwoSeconds()
      }
    }
  }

  goLeft () {
    if (this.state.number <= 0) {
      this.setState((prevState) => ({
        number: this.state.items.length - 1,
        item: prevState.items[this.state.items.length - 1]
      }))
    } else {
      this.setState((prevState) => {
        return {
          item: prevState.items[prevState.number - 1],
          number: prevState.number - 1
        }
      })
    }
    clearInterval(this.interval)
    this.goToTheRightEveryTwoSeconds()
  }

  goRight () {
    if (this.state.number >= this.state.items.length - 1) {
      this.setState((prevState) => ({
        number: 0,
        item: prevState.items[0]
      }))
    } else {
      this.setState((prevState) => {
        return {
          item: prevState.items[prevState.number + 1],
          number: prevState.number + 1
        }
      })
    }
    clearInterval(this.interval)
    this.goToTheRightEveryTwoSeconds()
  }

  goToTheRightEveryTwoSeconds () {
    let that = this
    this.interval = setInterval(function () {
      that.goRight()
    }, 2000)
  }

  render () {
    let {hero, text, image} = this.state.item

    return (
      <div>
        <div id="slider" className="slider">
          <img className="hero" src={hero} alt="text"/>
          <img className="image" itemID="image" src={image} alt="text"/>
          <label className="text" htmlFor="text">{text}</label>
        </div>
        <div>
          <div className="arrow-left" onClick={this.goLeft}>
            <i className="fa fa-arrow-left fa-5x"></i>
          </div>
          <div className="arrow-right" onClick={this.goRight}>
            <i className="fa fa-arrow-right fa-5x"></i>
          </div>
        </div>
      </div>
    )
  }
}