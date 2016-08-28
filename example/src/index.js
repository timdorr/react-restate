import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return <div>{JSON.stringify(this.props, null, 2)}</div>
  }
}

// ReactDOM.render(
//   <App foo="bar" />,
//   document.getElementById('root')
// )


const { render } = require('../../index')
render(
  <App foo="bar" />,
  element => console.log(element)
)
