import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, logout } from './utils/OAuth2'
import config  from '../conn'


class Login extends React.Component {

  login2 = (event) => {
    /*
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {

        let token = result.credential.accessToken
        console.log('FacebookAuthProvider'+token)
        localStorage.setItem('userToken', JSON.stringify(token));
        this.props.history.push('/users')
    })
    */
    this.props.login(config).then(result => {
      console.log('token: ' + JSON.stringify(result.token))
      console.log('expiresAt: ' + JSON.stringify(result.expiresAt))
      localStorage.setItem('userToken', result.token)
    })
  }

  logout2 = (event) => {
    console.log('logout2')
    this.props.logout().then(result => {
      localStorage.removeItem('userToken')
      //console.log('result: ' + JSON.stringify(result))
    })
  }

  render() {
    const { isLoggedIn } = this.props
    if (isLoggedIn) {
      return <div>
        <button onClick={this.logout2} >logout</button>
      </div>
    } else {
      return <div>
        <button onClick={this.login2} >Login</button>
      </div>
    }
  }
}


Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
})
/*
const mapDispatchToProps = {
  login: (config) => login(config),
  logout: () => logout(),
}
*/
export default connect(mapStateToProps,  {
  login,
  logout
})(Login)