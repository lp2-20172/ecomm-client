export const hasTokenize = () => window.localStorage.getItem("isAuth") !== null

export const setTokenx = () => {
  window.localStorage.setItem("isAuth", true)

}
export const removeTokenx = () => {
  window.localStorage.removeItem("isAuth")
}

/*const TOKEN_KEY = 'token'
const EXPIRES_AT_KEY = 'expiresAt'

export const getExpiresAt = () =>
  Number(window.localStorage.getItem(EXPIRES_AT_KEY)) || null

export const hasToken = () => getToken() !== null

export const getToken = () => {
  const expiresAt = getExpiresAt()
  if (expiresAt === null || expiresAt > Date.now()) {
    return window.localStorage.getItem(TOKEN_KEY) || null
  }
  return null
}

export const setToken = (token, expiresAt) => {
  window.localStorage.setItem(TOKEN_KEY, token)
  if (expiresAt !== null) {
    window.localStorage.setItem(EXPIRES_AT_KEY, expiresAt)
  } else {
    window.localStorage.removeItem(EXPIRES_AT_KEY)
  }
}

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY)
  window.localStorage.removeItem(EXPIRES_AT_KEY)
}


  
  }*/

  //https://github.com/danilobuerger/redux-implicit-oauth2/blob/master/src/middleware.js
  