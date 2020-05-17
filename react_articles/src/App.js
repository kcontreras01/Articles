import React from 'react';
import './App.css';
import './styles/buttons.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"

import Content from './components/Content';
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
  )
}

export default App;