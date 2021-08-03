import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ItemList from './ItemList';

function FarmerPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
      
    <section>
        <header>
            <div className="profile-image"></div>
                <h3>Farm Name</h3>
                <h4>contactInfo@gmail.com</h4>
                <h4>XXX-XXX-7777</h4>
            </header>
            <section>
                <ItemList />
            </section>

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