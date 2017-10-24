// @flow

import React from 'react';
import PropTypes from 'prop-types';
//import Linkx from './Link';
//import classNames from 'classnames';
import { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';

import Icon from 'material-ui/Icon';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import {
  Route,
  Link
} from 'react-router-dom'
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';




class MenuItem extends React.Component<any, any> {
  static defaultProps = {
    openImmediately: false,
  };

  state = {
    open: false,
  };

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({ open: true });
      //console.log("MenuItem.componentWillMount.open:" + this.state.open)
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
    //console.log("MenuItem.handleClick.open:" + this.state.open)
  };

  render() {
    const { children, classes, href, title, icon, isChildren, novisible } = this.props;
    const { openImmediately } = this.props;
    //console.log("MenuItem.novisible:" + novisible)
    //console.log("openImmediately:"+openImmediately)
    if (href) {
      //console.log("MenuItem.isChildren:"+isChildren)
      if (novisible) {
        return (
          <Route exact path={href}
             />
        )

      } else {
        return (
          <Route  path={href}
            children={({ match, location }) => (
              <Link to={href}
                className={classes.navLinkButton}>


                <ListItem onClick={this.props.onClick}
                  className={match ? (isChildren ? classes.active : classes.activeNoChildren) : (isChildren ? classes.nested : classes.nestedNoChildren)}
                >

                  <ListItemIcon>
                    <Icon >{icon}</Icon>
                  </ListItemIcon>
                  <ListItemText inset primary={title}>

                  </ListItemText>

                </ListItem>
              </Link>
            )} />
        )
      }

    }

    return (
      <ListItem disableGutters
        className={(openImmediately ? classes.navItemActive : classes.navItem)}

      >
        <Button
          classes={{
            root: classes.button,
            label: openImmediately ? 'algolia-lvl0' : '',
          }}
          onClick={this.handleClick}
        >

          <ListItemIcon>
            <Icon color="accent">{icon}</Icon>
          </ListItemIcon>
          <ListItemText primary={title} />
          {this.state.open ? <ExpandMore /> : <ExpandLess />}
        </Button>

        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isChildren: PropTypes.bool,
  visible: PropTypes.bool,
};

export default MenuItem;
