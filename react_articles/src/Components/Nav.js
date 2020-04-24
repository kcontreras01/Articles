import React, {Fragment} from 'react'

const Nav = ({user}) => {
    return (
        <nav>
          <ul>
            <li>Articles</li>
            {user ? (
              <Fragment>
                <li>
                  <button className="navButton" onClick={this.goToAccount}>
                    {this.props.user.first_name}'s SAVED ARTICLES
                  </button>
                </li>
                <li>
                  <button className="navButton" onClick={this.goToNewArticle}>
                    CREATE
                  </button>
                </li>
                <li>
                  <button className="navButton" onClick={this.props.logout}>
                    LOG OUT
                  </button>
                </li>{" "}
              </Fragment>
            ) : null}
          </ul>
        </nav>
    )
}

export default Nav;