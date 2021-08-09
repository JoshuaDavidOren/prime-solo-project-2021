import React from 'react';
import './Nav.css';
import {useDispatch, useSelector} from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="navbar">
      <div class="dropdown">
        <button class="dropbtn">Menu
          <i class="fa fa-caret-down"></i>
        </button>
    
        <div class="dropdown-content">
          <a href="#/home">Home</a>
          <a href="#searchlist">List</a>
          <a href="#searchmap">Map</a>
          <a href="#about">About</a>
          <a href="#/home"
            onClick={() => dispatch({ type: 'LOGOUT' })}
            >Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
