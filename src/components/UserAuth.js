import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import Cookies from './helpers/Cookies';
import UserAuth from './Components/UserAuth';

class UserAuth extends Component {
  constructor(){
    super();
    // set up state
    this.state = {
      user: false, // default user is no user
      mode: 'login' // keeps track of if the user is logging in or signing up
    }

    this.logout = this.logout.bind(this);

  }

  toggleMode(e){ // toggle between the two modes
    e.preventDefault();
    this.setState(prev => { // the mode is what it is not
      prev.mode = prev.mode === "login" ? 'signup' : 'login';
      return prev
    })
  }

  // method to log out
  logout(){
    // take away the cookie
    Cookies.set('token', '');
    // remove the user and set the mode to displayForm
    this.setState({user: false, mode: 'displayForm'});
  }

  render(){
    return this.state.mode === "login" ? (
      <Login {...this.props} toggleMode={this.toggleMode.bind(this)} />
    ) : (
      <Signup {...this.props} toggleMode={this.toggleMode.bind(this)} />
    )
  }
}
export default UserAuth;
