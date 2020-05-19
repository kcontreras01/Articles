import React, { Component } from "react";
import axios from "axios";
import Cookies from "../helpers/Cookies";
import "../styles/login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        email: "",
        password: "",
      },
    };
    this.setUser = this.setUser.bind(this);
  }

  login(e) {
    e.preventDefault();

    axios.post("/login", this.state.inputs).then((res) => {
      this.props.setUser(res.data);
    });
  }

  changeInput(e, input) {
    const val = e.target.value;
    this.setState((prev) => {
      prev.inputs[input] = val;
      return prev;
    });
  }

  // method to initialize our user
  initUser() {
    // get the token from the cookie
    const token = Cookies.get("token");

    // if there is a token
    if (token && token !== "") {
      // send a request to our API to validate the user
      axios
        .get(`${this.state.url}/users/validate`, {
          // include the token as a parameter
          params: { auth_token: token },
        })
        .then((res) => {
          // the response will be the user
          // set the user in the state, and change the mode to content
          this.setState({ user: res.data, mode: "content" });
        })
        .catch((err) => {
          // if there is an error
          Cookies.set("token", ""); // take away the cookie
          // change the state so that there is no user and render the auth
          this.setState({ user: false, mode: "auth" });
        });
    } else {
      // if there is no token
      // we should render the auth forms
      this.setState({ mode: "auth" });
    }
  }

  setUser(user) {
    // set a cookie with the user's token
    Cookies.set("token", user.token);
    // set state to have the user and the mode to content
    this.setState({ user: user, mode: "content" });
  }

  render() {
    return (
      <form>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="email"
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              autoFocus
              onChange={(e) => this.changeInput(e, "email")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="current-password"
              onChange={(e) => this.changeInput(e, "password")}
            />
          </Grid>

          <Grid item xs={12} sm={6}></Grid>

          <Grid container justify="flex-end">
            <Button type="submit" variant="contained" color="default">
              Login
            </Button>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default Login;