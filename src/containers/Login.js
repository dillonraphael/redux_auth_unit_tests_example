import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logIn} from '../actions/authActions'
import Notification from '../components/Notification/notification'

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      error: false,
      username: '',
      password: '',
    }
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.logIn(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <Notification error={this.props.error}/>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <div>
            <input
              name="username"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.username}
            />
          </div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
})

const mapDispatchToProps = {
  logIn: (data) => logIn(data),
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
