import React, { Component } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'

import { connect } from 'react-redux'
import AppLayout from './app/AppLayout'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { blue, pink } from 'material-ui/colors';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './Login'

class App extends Component {
    componentWillMount() {
    }

    render() {
        const { dark } = this.props

        const theme = createMuiTheme({
            palette: {
                type: dark ? 'dark' : 'light',
                primary: blue, // Purple and green play nicely together.
                secondary: pink,
            },
        })

        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    
                    <AppLayout >
                    <Route path="/login" component={Login} />
                    </AppLayout >
                </Router>
            </MuiThemeProvider>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dark: state.theme.dark
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //getList: (q) => { dispatch(getList(q)) }
    }
}

App.propTypes = {
    dark: PropTypes.bool.isRequired,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App)