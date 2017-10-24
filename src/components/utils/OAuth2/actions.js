export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const login = config => ({
  type: LOGIN_REQUEST,
  config
})

export const loginSuccess = (token, expiresAt) => ({
  type: LOGIN_SUCCESS,
  token,
  expiresAt
})

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
})



export const logout = () => ({
  type: LOGOUT
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

export const logoutFailure = error => ({
  type: LOGOUT_FAILURE,
  error
})
