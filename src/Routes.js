import React, {Component} from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'


import Login from './containers/Login'
import Main from './containers/Main'

import PrivateRoute from './components/PrivateRoute'
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Routes extends Component {
  render() {
    return (
      <TransitionGroup className="container">
      <CSSTransition key={this.props.location.key} timeout={300} classNames="fade" appear>
        {/* Dont remove this div. It's important for the transitions to work */}
        <div>
          <Switch location={this.props.location}>
            <PrivateRoute exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route render={() => <div>Not Found</div>} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
    )
  }
}




export default withRouter(Routes)