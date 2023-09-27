import React, { Component } from 'react'
import loading3 from './loading3.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="my-3" src={loading3} alt="loading" />
      </div>
    )
  }
}

export default Spinner