import React from 'react';
import './Nav.css';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from 'react-router-dom';
import Logo from "../UserPage/Logo.png";
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
        {["home", "Map", "List", "About",].map((text, index) => (
          <ListItem button key={text} onClick={() => history.push(`/${text}`)}>
            <ListItemIcon>
              {index  === 0 ? <HomeIcon /> : <MapIcon />}
              <ListIcon/> <InfoIcon/>
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
            <img src={Logo} height='40px'/>
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
