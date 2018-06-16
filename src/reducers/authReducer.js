import {
  LOGGED_IN_START,
  LOGGED_IN_SUCCESS,
  LOGGED_IN_ERROR,
  LOGGED_OUT_SUCCESS
} from '../actions/authActions';

const initialState = {
  error: false,
  currentUser: {},
  fetching: true
}

export default (state = { ...initialState }, action) => {

  switch(action.type) {

    case LOGGED_IN_START:
      return {...state, error: false, fetching: true}
    case LOGGED_IN_SUCCESS:
      return{...state, error: false, currentUser: action.data, fetching: false}
    case LOGGED_IN_ERROR:
      return {...state, error: action.data, fetching: false}
    case LOGGED_OUT_SUCCESS:
      return {...state, error: action.data}
    default:
      return state
  }
  
}
