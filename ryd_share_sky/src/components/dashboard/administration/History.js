import React, { Component } from 'react'

class History extends Component {
  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">History</div>
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
          <div className="column">
            <div className="box">
              <div className="heading">Top Seller Total</div>
              <div className="title">56,950</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales $</div>
                    <div className="title is-5">250,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Overall $</div>
                    <div className="title is-5">750,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales %</div>
                    <div className="title is-5">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="heading">Top Seller Total</div>
              <div className="title">56,950</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales $</div>
                    <div className="title is-5">250,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Overall $</div>
                    <div className="title is-5">750,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales %</div>
                    <div className="title is-5">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="heading">Top Seller Total</div>
              <div className="title">56,950</div>
              <div className="level">
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales $</div>
                    <div className="title is-5">250,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Overall $</div>
                    <div className="title is-5">750,000</div>
                  </div>
                </div>
                <div className="level-item">
                  <div className="">
                    <div className="heading">Sales %</div>
                    <div className="title is-5">25%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="columns">
          <div className="column">
            History table
          </div>
        </div>
      </div>
    )
  }
}

export default History
