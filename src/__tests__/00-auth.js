import * as authActions from '../actions/authActions'
import { logIn } from '../actions/authActions'
import Reducer from '../reducers/authReducer'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Login actions',  () => {
    it('Check success to log In', () => {
        const data = {username: 'admin', password: 'lisa'}
        var start;
        const expectedActions = [
            {
                type: authActions.LOGGED_IN_START,
                start
            },
            {
                type: authActions.LOGGED_IN_SUCCESS,
                data
            },
            {
                payload: {args: ["/"], method: "push"}, 
                type: "@@router/CALL_HISTORY_METHOD"
            }
        ]
        const initialState = {}
        const store = mockStore(initialState)
        store.dispatch(logIn(data))

        expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('Login Reducers', () => {

    const data = {username: 'admin', password: 'lisa'}
    const initialState = {
        error: false,
        currentUser: {},
        fetching: true
    }
    it('Check success to update current user with reducer', () => {
        
        const action = { type: authActions.LOGGED_IN_SUCCESS, data}
       
        const expectedAction = {
            currentUser: { password: 'lisa', username: 'admin'},
            error: false,
            fetching: false
        }
        
        expect(Reducer({...initialState}, action)).toEqual(expectedAction)

    })
    it('Check login fail  with reducer', () => {
        
        const action = { type: authActions.LOGGED_IN_ERROR, data}
       
        const expectedAction = {
            currentUser: {},
            error: { password: 'lisa', username: 'admin'},
            fetching: false
        }
        
        expect(Reducer({...initialState}, action)).toEqual(expectedAction)

    })
})