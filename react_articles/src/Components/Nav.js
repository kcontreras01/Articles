import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/nav.css";
import Content from "./Content";
import Login from "./Login";
import SignUp from "./Signup";

const Nav = ({ user }) => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {user ? (
              <Fragment>
                <li>
                  <button className="navButton" onClick={this.goToAccount}>
                    {this.props.user.first_name}'s SAVED ARTICLES
                  </button>
                </li>
                <li>
                  <button className="navButton" onClick={this.props.logout}>
                    LOG OUT
                  </button>
                </li>{" "}
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
                <li>
                  <Link to="/signup">SIGNUP</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;

