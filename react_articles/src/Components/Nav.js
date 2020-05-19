import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
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
                  <NavLink exact={true} activeClassName='is-active' to='/'>HOME</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='is-active' to='/login'>LOGIN</NavLink>

                </li>
                <li>
                  <NavLink activeClassName='is-active' to='/signup'>SIGN UP</NavLink>

                </li>
              </Fragment>
            )}
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <section>
              <Login />
            </section>
          </Route>
          <Route path="/signup">
            <section>
              <SignUp />
            </section>
          </Route>
          <Route path="/">
            <section>
              <Content />
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;

