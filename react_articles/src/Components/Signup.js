import React, { Component } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// this will render if the mode in user auth is signup
class SignUp extends Component {
  constructor(){
    super();
    // set up initial state
    this.state = { // track inputs for form
      inputs: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  // method to sign up
  signUp(e){
    e.preventDefault(); // prevent default form action
    // make request to server to create a new user
    axios.post('http://localhost:8080/users', this.state.inputs)
      .then(res => { // the response will be the user
        // set the user
        this.props.setUser(res.data);
      })
  }

  // method to change one of the inputs
  changeInput(e, input){
    const val = e.target.value;
    this.setState(prev => { // set the input in the state to the value
      prev.inputs[input] = val;
      return prev;
    });
  }

  render(){
    return(
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e => this.changeInput(e, 'first_name')}
                value={this.state.inputs.first_name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => this.changeInput(e, 'last_name')}
                value={this.state.inputs.last_name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => this.changeInput(e, 'email')}
                value={this.state.inputs.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => this.changeInput(e, 'password')}
                value={this.state.inputs.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
                onChange={e => this.changeInput(e, 'password_confirmation')}
                value={this.state.inputs.password_confirmation}              />
            </Grid>
            <Grid item xs={12}>
              
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="default"
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
    )
  }
}

export default SignUp;