import React, { Component } from 'react'


class Signup extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      email: '',
      password: '',
      isLoading: false
    }
  }

  render() {

    const { fullName, email, password, isLoading } = this.state
    const {
      auth,
      checkAuth,
      history,
      setStorageItem,
      rmStorageItem
    } = this.props

    return (
      <form
        id="signup-tab"
        className={`tab-content ${auth.type === 'signup' ? 'is-active':''}`}
        onSubmit={async e => {
          e.preventDefault()
          rmStorageItem('token')
          const config = {
              user: {
                  fullName,
                  email,
                  password
              }
          }
          try {
              const user = await fetch('http://localhost:8000/api/account/signup', {
                  method: 'post',
                  headers: {'Content-Type':'application/json'},
                  body: JSON.stringify(config)
              })
              const user_token = await user.json()
              try {
                setStorageItem('token', user_token.user.token)
              } catch(e) {
                console.log('No Token.')
              }
              if(checkAuth())
                history.replace('/dashboard', '/')
              else
                this.setState({ isLoading: false })
          } catch(e) {
              console.log(e)
          }
        }}
      >
          <div className="field">
              <label>Full Name</label>
              <div className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    onChange={e => this.setState({ fullName: e.target.value })}
                    value={fullName}
                    placeholder="Enter fullname"
                    autoComplete="off"
                  />
              </div>
          </div>
          <div className="field">
              <label>Username</label>
              <div className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    onChange={e => this.setState({ email: e.target.value })}
                    value={email}
                    placeholder="Enter email"
                    autoComplete="off"
                  />
              </div>
          </div>
          <div className="field">
              <label>Password</label>
              <div className="control">
                  <input
                    type="password"
                    className="input is-medium"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                    placeholder="Enter password"
                    autoComplete="new-password"
                  />
              </div>
          </div>

          <div className="has-text-centered">
              <button
                type="submit"
                className={`button ${isLoading ? 'is-loading':''} is-fullwidth secondary-btn is-rounded raised`}
                style={{ padding: 0 }}
                onClick={e => {
                  this.setState({ isLoading: true })
                }}
              >
                Signup
              </button>
          </div>
      </form>
    )
  }
}

export default Signup
