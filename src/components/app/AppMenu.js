import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Menu from '../utils/DMenu'
import compose from 'recompose/compose'



const styles = theme => ({
    //estilos para el Menu
    root: {

      },

      //estilos para el MenuItem
button: {
    // borderRadius: 0,
  
  
    //justifyContent: 'flex-start',
    //justifyContent: 'flex-end',
    textTransform: 'none',
    width: '100%',
    //minWidth: 360,
    // display: 'inline-flex',
    // justifyContent: 'space-between',
    // transition: theme.transitions.create('background-color', {
    //  duration: theme.transitions.duration.shortest,
    // }),
   
  },
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  
  },
  navItemActive: {
    ...theme.typography.body,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    //background: '#E0E0E0;',
    background: theme.palette.background.appBar,
    
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLinkButton: {
    color: theme.palette.text.secondary,
  
    textDecoration: 'none',
  },
  activeButton: {
    color: theme.palette.text.primary,
  },
  
  
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    
  },
  active: {
    paddingLeft: theme.spacing.unit * 4,
    background: '#9E9E9E;',
    color: theme.palette.text.primary,
    
  },
  
  nestedNoChildren: {
    paddingLeft: theme.spacing.unit * 2,
  },
  activeNoChildren: {
    paddingLeft: theme.spacing.unit * 2,
    background: '#9E9E9E;',
    color: theme.palette.text.primary,
  
      
  },
      
})




class AppMenu extends Component {
    render() {
        const { routes, onRequestClose, classes } = this.props
        //const { classes } = this.props
        // {renderNavItems(props, context.pages, context.activePage)}
        // {renderNavItems(this.props, pages, pages[0])}
        //console.log("menu" + JSON.stringify(this.props))
        return (
            <Menu routes= {routes} classes= {classes}
              onRequestClose={onRequestClose}>
                Loading...
              </Menu>
        )
    }
}
/*
                <ul className={classes.ul}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/abouts">About</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>

                    <li><Link to="/counters">counters</Link></li>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/ecomms">ecomms</Link></li>
                </ul>
*/

AppMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
}

export default compose(
    withStyles(styles),
)(AppMenu)