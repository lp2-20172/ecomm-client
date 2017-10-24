//import { hasToken, getToken, getExpiresAt } from './util/token'
import { hasTokenize } from './util/token'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions'
import { LOGOUT_SUCCESS, LOGOUT_FAILURE } from './actions'
/*
const initialState = {
  isLoggedIn: hasToken(),
  token: getToken(),
  expiresAt: getExpiresAt(),
  isLoggingIn: false,
  error: null
}*/
const initialState = {
  isLoggedIn: hasTokenize(),
  token: null,
  expiresAt: null,
  isLoggingIn: false,
  error: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: true
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.token,
        expiresAt: action.expiresAt,
        error: null,
        isLoggingIn: false
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        expiresAt: null,
        error: action.error,
        isLoggingIn: false
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
      })


    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        expiresAt: null,
        error: null,
        isLoggingIn: false
      })
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        expiresAt: null,
        error: action.error,
        isLoggingIn: false
      })

    default:
      return state
  }
}

export default auth
