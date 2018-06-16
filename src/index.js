import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'

import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router'

import reducers from './reducers'
import Routes from './Routes'




import '../node_modules/renaissancecss/renaissance.css'
import './styles/index.css'


const history = createBrowserHistory()

const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(
    routerMiddleware(history),
    thunk
  ),
)

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Routes location={history.location}/>
    </ConnectedRouter>
  )
}

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    document.getElementById('root')
  )
}

render();

