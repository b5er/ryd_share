import React, { Component } from 'react'

class Review extends Component {
  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Review</div>
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
          <div className="column is-9">
            <div className="box">
              Map
            </div>
          </div>
          <div className="column">
            <div className="columns is-multiline">
              <div className="column is-12">
                <div className="box">
                  <div className="heading">Car model</div>
                  Car
                </div>
              </div>
              <div className="column">
                <div className="box is-12">
                  <div className="heading">Car model</div>
                  Car
                </div>
              </div>
              <div className="column is-12">
                <div className="box">
                  <div className="heading">Car model</div>
                  Car
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Review
