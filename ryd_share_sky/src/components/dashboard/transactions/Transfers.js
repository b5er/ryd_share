import React, { Component } from 'react'

class Transfers extends Component {
  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Transfers</div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button type="button" className="button is-small">
                {'Today'}
              </button>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column is-6">
            <div className="box">
              Account
            </div>
          </div>
          <div className="column is-6">
            <div className="box">
              Bank
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Transfers
