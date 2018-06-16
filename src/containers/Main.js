import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logOut} from '../actions/authActions'
import Notification from '../components/Notification/notification'

class App extends Component {
  constructor(props) {
    super(props)
    this._handleLogout = this._handleLogout.bind(this)
  }

  _handleLogout(e) {
    e.preventDefault()
    this.props.logOut()
  }

  render() {
    return (
      <React.Fragment>
        <Notification error={this.props.error}/>
        <h2>Welcome home {this.props.currentUser.username}</h2>
        <button onClick={this._handleLogout}>Logout</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  error: state.auth.error
})

const mapDispatchToProps = {
  logOut: () => logOut(),
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App
