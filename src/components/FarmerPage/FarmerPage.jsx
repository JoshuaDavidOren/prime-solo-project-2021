import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import ItemList from './ItemList';

function FarmerPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store => store.profileReducer))
  const user = useSelector((store) => store.user);
  const info = profile[0];

  return (
      
    <section>
        <header>
            <div className="profile-image"></div>
                <h3>{info.page_title}</h3>
                <h4>{info.email}</h4>
                <h4>{info.phone_number}</h4>
                <p>discription of farmer with beautiful words and thinsg obut the farm that has been in there family for one million generations thank you farmer and buyres THANK YOU</p>
            </header>
            <section>
                <h2>Groceries For Sale</h2>
                {profile.map((item) => {
                    return (<ItemList key={item.id} url={item.id} title={item.item} price={item.asking_price} />);
                })}
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