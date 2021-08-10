import React from 'react';
import './Nav.css';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));


export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["home", "Map", "About"].map((text, index) => (
          <ListItem button key={text} onClick={() => history.push(`/${text}`)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const logout = () =>{
  dispatch({ type: 'LOGOUT' });
  history.push('/home');
}


  return (

    <div>
      {["top"].map((anchor) => (
      <React.Fragment>
        <CssBaseline />
        <AppBar style={{ backgroundColor: '#bec9bc', color: '#132411' }}>
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer"onClick={toggleDrawer(anchor, true)}>
              <MenuIcon />
            </IconButton >
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
            <img href="%PUBLIC_URL%/Feast Local logo color.png"/>
            <Button color="inherit" onClick={() => logout()}>LOGOUT</Button>
          </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Box my={2}>
      
          </Box>
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small"
           aria-label="scroll back to top"
           
          style={{backgroundColor: '#497442', color: '#FFFFFF'}}>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    
    ))
    
}
</div>
  );}


// function Nav() {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch();

//   let loginLinkData = {
//     path: '/login',
//     text: 'Login / Register',
//   };

//   if (user.id != null) {
//     loginLinkData.path = '/user';
//     loginLinkData.text = 'Home';
//   }

//   return (
//     <div className="navbar">
//       <div class="dropdown">
//         <button class="dropbtn">Menu
//           <i class="fa fa-caret-down"></i>
//         </button>
    
//         <div class="dropdown-content">
//           <a href="#/home">Home</a>
//           <a href="#searchlist">List</a>
//           <a href="#searchmap">Map</a>
//           <a href="#about">About</a>
//           <a href="#/home"
//             onClick={() => dispatch({ type: 'LOGOUT' })}
//             >Log Out</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Nav;
