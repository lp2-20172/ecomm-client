import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'
import compose from 'recompose/compose'

import {
  Link
} from 'react-router-dom'
import {
  withRouter,
} from 'react-router-dom'
import { RouteWithSubRoutes, findActiveNodeRoute } from '../utils/Routes'
import { routes } from '../routes'
import { connect } from 'react-redux'

//AppBar
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Divider from 'material-ui/Divider';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
//import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import Github from './Github';
import AppMenu from './AppMenu'


const drawerWidth = 240;

const styles = theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      //margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        position: 'fixed',
        background: '#000',
        borderRadius: 1,
        zIndex: theme.zIndex.tooltip,
        top: 0,
        left: 0,
        width: '100%',
        height: 2,
      },
      '& dd, & dt': {
        position: 'absolute',
        top: 0,
        height: 2,
        boxShadow: '#000 1px 0 6px 1px',
        borderRadius: '100%',
        animation: 'nprogress-pulse 2s ease-out 0s infinite',
      },
      '& dd': {
        opacity: 0.6,
        width: 20,
        right: 0,
        clip: 'rect(-6px,22px,14px,10px)',
      },
      '& dt': {
        opacity: 0.6,
        width: 180,
        right: -80,
        clip: 'rect(-6px,90px,14px,-6px)',
      },
    },
    '@keyframes nprogress-pulse': {
      '30%': {
        opacity: 0.6,
      },
      '60%': {
        opacity: 0,
      },
      to: {
        opacity: 0.6,
      },
    },

  },

  root: {

  },
  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%',
  },
  appBar: {
    left: 'auto',
    right: 0,
    transition: theme.transitions.create('width'),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    //position: 'relative',

    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64,
    },
  },
  content: {
    width: '100%',
    //marginLeft: -drawerWidth,
    marginLeft: 0,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  contentShift: {
    //marginLeft: 0,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flex: '1 1 auto',
  },




  
});



class RouteConfigExample extends React.Component {
  constructor(props) {
    super(props);
    let open = false
    if (isWidthUp('lg', props.width)) {
      open = true
    }
    this.state = {
      open: open,
    }

  }
  componentWillMount() {
    //NProgress.start()
  }

  componentDidMount() {
    //NProgress.done()
  }


  handleDrawerOpen = () => {
    this.setState({ open: true });
    //console.log("main.handleDrawerOpen.open:"+this.state.open)
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
    //console.log("main.handleDrawerClose.close:"+this.state.open)
  }

  handleToggleShade = () => {
    this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' });
  }


  render() {
    const { classes, width, location } = this.props
    //console.log('location:' + JSON.stringify(location))
    //const { match, history } = this.props
    //console.log('match:' + JSON.stringify(match))

    const { title } = findActiveNodeRoute(routes, location)
    //console.log('activePage:' + JSON.stringify(activePage))
    //console.log('title:' + JSON.stringify(title))

    let drawerDocked = isWidthUp('lg', width);
    //console.log(width + ' drawerDocked:' + drawerDocked)
    let drawerType = 'persistent' //persistent temporary permanent
    if (drawerDocked) {
      drawerType = 'persistent'
    } else {
      drawerType = 'temporary' // se debe hacer open=true/false
    }
    //console.log(global)


    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>

          <AppBar className={classNames(classes.appBar, ((this.state.open) && drawerDocked) && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, ((this.state.open) && drawerDocked) && classes.hide)}
              >
                <MenuIcon />
              </IconButton>

              <title>
                {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
                - EComm Sys
              </title>

              <Typography type="title" color="inherit" noWrap >
                {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
              </Typography>


              <div className={classes.grow} />

              <IconButton
                title="Toggle light/dark theme"
                color="contrast"
                onClick={this.handleToggleShade}
              >
                <LightbulbOutline />
              </IconButton>
              <IconButton
                component="a"
                title="GitHub"
                color="contrast"
                href="https://github.com/callemall/material-ui/tree/next"
              >
                <Github />
              </IconButton>

            </Toolbar>
          </AppBar>
          <Drawer
            type={drawerType}
            classes={{
              paper: classes.drawerPaper,
            }}
            onRequestClose={this.handleDrawerClose}
            //onClick={!isWidthUp('lg', width) && this.handleDrawerClose}
            open={this.state.open}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />

              <AppMenu routes= {routes}
              onRequestClose={!isWidthUp('lg', width) ? this.handleDrawerClose : () => { }}>
                Loading...
              </AppMenu>

              <ul>
                <li><Link to="/tacos">Tacos</Link></li>
                <li><Link to="/sandwiches">Sandwiches</Link></li>
              </ul>


            </div>
          </Drawer>
          <main className={classNames(classes.content, ((this.state.open) && drawerDocked) && classes.contentShift)}>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} exact={route.exact} {...route} />
            ))}
          </main>
        </div>
      </div>
    )
  }
}

RouteConfigExample.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};


export default compose(
  withRouter,
  withStyles(styles),
  withWidth(),
  connect(),
)(RouteConfigExample)