import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Get the Redux DevTools extension and fallback to a no-op function
let devtools = x => x;

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}
let middlewares = [thunk];

if (
    process.env.NODE_ENV !== 'production'
) {
    // eslint-disable-next-line global-require
    const createLogger = require('redux-logger').createLogger;

    middlewares = [...middlewares, createLogger()];
}



const store = createStore(
    reducers,
    compose(
        applyMiddleware(...middlewares),
        devtools
    )
)

export default store
