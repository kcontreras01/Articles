import React, {Fragment} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Login from './Login'
import '../styles/nav.css'

const Nav = ({user}) => {
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
            ) : 
          
            <Fragment>
            <li>
              <Link exact="true" to="/login" className="navButton">LOG IN</Link>  
            </li>
            </Fragment>
          }

            
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Nav;