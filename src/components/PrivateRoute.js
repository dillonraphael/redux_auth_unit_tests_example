import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'


class PrivateRoute extends Component {
  render() {
    
    // Make sure initial route is same as initial component before redirecting to login. This removes console.log error
    let allowRedirect = this.props.match.url === this.props.location.pathname;

    return (
      <Route render={props => this.props.currentUser.username ? (<this.props.component {...props} />) : (allowRedirect && <Redirect push to="/login" />) } />
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
})




PrivateRoute = withRouter(connect(mapStateToProps)(PrivateRoute))
export default PrivateRoute