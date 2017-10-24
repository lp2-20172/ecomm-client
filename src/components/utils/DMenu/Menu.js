import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import './Menu.css'
import MenuItem from './MenuItem';
import List from 'material-ui/List';
//import Linkx from './Link';
//import { routes } from '../routes'
//import Button from 'material-ui/Button';
import { pageToTitle } from '../../utils/Core'

import {
    withRouter,
} from 'react-router-dom'
import compose from 'recompose/compose';

//https://reacttraining.com/react-router/web/api/Route/children-func

function renderNavItems(props, pages, activePage, isChildren= false) {
    let navItems = null;
    if (pages && pages.length) {
        // eslint-disable-next-line no-use-before-define
        //console.log("pages: "+JSON.stringify(pages))
        //console.log(" ini---- ")
        navItems = pages.reduce(reduceChildRoutes.bind(null, props, activePage, isChildren), [])
        //console.log("----end ")
    }
    return <List className={props.classes.root}>{navItems}</List>
}

function reduceChildRoutes(props, activePage, isChildren, items, childPage, index) {
    //console.log("activePage: "+JSON.stringify(activePage))
    //let isChildren= false
    if (childPage.routes) {
        isChildren = true
    }
   // console.log("isChildren: "+isChildren)
    //console.log("childPage.routes: "+JSON.stringify(childPage.routes))
    if (childPage.routes && childPage.routes.length > 1) {
        const openImmediately = activePage.pathname.indexOf(childPage.path) !== -1 || false
        //console.log("childPage.routes: "+JSON.stringify(childPage.routes))
        isChildren =true
        items.push(
            <MenuItem
                key={index}
                openImmediately={openImmediately}
                title={pageToTitle(childPage)}
                icon ={childPage.icon}
                novisible ={childPage.novisible}
                //isChildren ={false}
                classes = {props.classes}
            >
                {renderNavItems(props, childPage.routes, activePage, isChildren)}
            </MenuItem>,
        )
    } else if (childPage.title !== false) { 
        childPage =
            childPage.routes && childPage.routes.length === 1 ? childPage.routes[0] : childPage
        //console.log("childPage else: "+JSON.stringify(childPage) )
        items.push(
            <MenuItem
                key={index}
                title={pageToTitle(childPage)}
                icon ={childPage.icon}
                href={childPage.path}
                onClick={props.onRequestClose}
                isChildren ={isChildren}
                novisible ={childPage.novisible}
                classes = {props.classes}
            />,
        );
    }
    return items;
}



class Menu extends Component {
    render() {
        const { routes } = this.props
        //const { classes } = this.props
        // {renderNavItems(props, context.pages, context.activePage)}
        // {renderNavItems(this.props, pages, pages[0])}
        //console.log("menu" + JSON.stringify(this.props))
        return (
            <div>
 
                {renderNavItems(this.props, routes, this.props.location)}

            </div>
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

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
}

export default compose(
    withRouter,
)(Menu)