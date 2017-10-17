import React from 'react'
import {
  Route,
} from 'react-router-dom'

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const Routes = (route) => (
    <Route path={route.path}  {...route} />
)

export default Routes 