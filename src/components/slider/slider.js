import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './slider.css'
import $ from 'jquery'

export default class Slider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      items: this.props.slides,
      item: {},
      number: 0
    }

    let that = this
    this.interval = setInterval(function () {
      that.goRight()
    }, 2000)

    this.goLeft = this.goLeft.bind(this)
    this.goRight = this.goRight.bind(this)
  }

  componentWillMount () {
    this.state.item = this.state.items[0]
  }

  componentDidMount () {
    let that = this
    $('.slider').on('mouseenter', function () {
      clearInterval(that.interval)
    })

    $('.slider').on('mouseleave', function () {
      that.interval = setInterval(function () {
        that.goRight()
      }, 2000)
    })
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
    let that = this
    this.interval = setInterval(function () {
      that.goRight()
    }, 2000)
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
    let that = this
    this.interval = setInterval(function () {
      that.goRight()
    }, 2000)
  }

  render () {
    const img = this.state.item
    let {hero, text, image} = this.state.item

    return (
      <div>
        <div className="slider">
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