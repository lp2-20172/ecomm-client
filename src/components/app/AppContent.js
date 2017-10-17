import React from 'react'
import {
  Link
} from 'react-router-dom'

import { RouteWithSubRoutes } from '../utils/Routes'

const Content = ({ routes }) => (
  <div>
    
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
    ))}
  </div>
)





class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>d

            </div>
    );
  }
}

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
      <li><Link to="/tacos/about/8">about</Link></li>


    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
    ))}
  </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

class About extends React.Component {
  render() {
    //console.log("json"+JSON.stringify(this.props))
    return (
      <div>
        <h2>About</h2>
        id= {this.props.match.params.id}

      </div>
    );
  }
}



export {Content, Home, Tacos, Bus, Cart, About, Sandwiches}


/*
import {
  BrowserRouter as Router,
  //Route,
  Link
} from 'react-router-dom'

import Routes, {RouteWithSubRoutes} from '../utils/Routes'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bubblegum">Bubblegum</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Routes
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: '10px' }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Routes
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample

*/