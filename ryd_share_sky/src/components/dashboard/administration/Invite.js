import React, { Component } from 'react'

class Invite extends Component {
  render() {
    return (
      <div>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title">Invite</div>
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
              Invite form
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invite
