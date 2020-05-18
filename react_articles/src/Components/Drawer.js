import React, {Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Content";
import Login from "./Login";
import SignUp from "./Signup";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <Router>
      <div>
        <ListItem button key="Home">
            <Link to="/">
                <ListItemText primary="HOME" />
            </Link>    
        </ListItem>
        <ListItem button key="Login">
            <Link to="/login">
                <ListItemText primary="LOGIN" />
            </Link>    
        </ListItem>
        <ListItem button key="Signup">
            <Link to="/signup">
                <ListItemText primary="SIGNUP" />
            </Link>    
        </ListItem>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>

      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key="right">
          <Button onClick={toggleDrawer("right", true)}>menu</Button>
          <Drawer anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}