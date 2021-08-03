import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function FarmerPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
      
    <section>
        <header>
            <div className="profile-image"></div>
        </header>

        <div className="container">
          <h2>Welcome, {user.username}!</h2>
          <h1>YOUR A FARMER</h1>
          <p>Your ID is: {user.id}</p>
          <p>Your user type is: {user.user_type? "true" : "false"}</p>
        </div>
    </section>
  );
}

// this allows us to use <App /> in index.js
export default FarmerPage;