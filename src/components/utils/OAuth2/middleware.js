//import { setToken, removeToken } from './util/token'
import { setTokenx, removeTokenx } from './util/token'

import authorize, { unauthorize } from './oauth2'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  loginSuccess,
  loginFailure
} from './actions'

import { LOGOUT_SUCCESS, LOGOUT_FAILURE, logoutSuccess, logoutFailure } from './actions'


const authMiddleware = store => next => action => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return authorize(action.config).then(
        ({ token, expiresAt }) =>
          store.dispatch(loginSuccess(token, expiresAt)),
        error => store.dispatch(loginFailure(error))
      )
    case LOGIN_SUCCESS:
      setTokenx()
      //setToken(action.token, action.expiresAt)
      break
    case LOGIN_FAILURE:
      break
    case LOGOUT:
      return unauthorize().then(
        () =>
          store.dispatch(logoutSuccess()),
        error => store.dispatch(logoutFailure(error))
      )

    case LOGOUT_SUCCESS:
      //removeToken()
      removeTokenx()
      break
    case LOGOUT_FAILURE:break
    /*
    case LOGOUT:
      removeToken()
      break**/
    default: return next(action)

  }

  return next(action)
}

export default authMiddleware
