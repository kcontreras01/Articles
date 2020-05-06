import React, {Fragment} from 'react'
import '../styles/nav.css';

const Nav = ({user}) => {
    return (
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
              <button className="navButton">
                LOG IN
              </button>
            </li>
            </Fragment>
          }

            
          </ul>
        </nav>
    )
}

export default Nav;