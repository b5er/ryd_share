import React, { Component } from 'react'

class AddVehicle extends Component {
  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Add</div>
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
          <div className="column is-5">
            <div className="box">
              Add/Remove vehicle form
            </div>
          </div>
          <div className="column is-7">
            <div className="columns is-multiline">
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
              <div className="column is-4">
                <div className="box">
                  vehicle(s)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddVehicle
