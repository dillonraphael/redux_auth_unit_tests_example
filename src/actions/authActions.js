import { push } from 'connected-react-router'
import config from '../config'

/*Log In User */
  export const LOGGED_IN_START = 'LOGGED_IN_START';
  export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
  export const LOGGED_IN_ERROR = 'LOGGED_IN_ERROR';

  const logInStart = (data) =>{
    return { type: LOGGED_IN_START, data}
  }
  const logInSuccess = (data) => {
    return { type: LOGGED_IN_SUCCESS, data}
  }

  const loginFail = (data) => {
    return {type: LOGGED_IN_ERROR, data}
  }

  export const logIn = (data) => {
    return (dispatch) => {
      dispatch(logInStart())
      if (data.password === config.password) {
         
         dispatch(logInSuccess(data))
         dispatch(push('/'))
         
      } else {
        dispatch(loginFail('wrong password'))
      }
    }
  }
/** */

/*Log Out User */

export const LOGGED_OUT_SUCCESS = 'LOGGED_OUT_SUCCESS';

const logOutSuccess =(data) => {
  return { type: LOGGED_OUT_SUCCESS, data}
}

export const logOut = () => {
  return (dispatch) => {
    dispatch(logOutSuccess('Sorry to see you go!'))
    dispatch(push('/login'))
  }
}
/** */