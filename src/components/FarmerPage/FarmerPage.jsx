import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

function FarmerPage() {

  const {id} = useParams();

useEffect(() => {
  console.log('in use Effect');
	dispatch({ type: 'GET_PROFILE_DATA_FARMER', payload: id });
  dispatch({ type: 'GET_PRODUCT_DATA_FARMER', payload: id });
}, []);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store) => store.farmerProfileReducer);
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.productReducer);
  const info = profile[0];
  const availableProducts = products.filter(item => item.available === true)
  const dispatch = useDispatch();
  






const addToFavorites = () => {
  const id = info.user_id;
  dispatch({ type: 'ADD_FAVORITE_FARMER', payload: {id: id}})
  
}

  console.log(user);
  return (
    
      <section class='FarmerPage'>
        <header class="p-head">
          <h1>FARMER</h1>
          <div className="profile-image"></div>
          { info && <> 
          <h3>{info.page_title}</h3>
          <h4>{info.email}</h4>
          <h4>{info.phone_number}</h4>
          </>
          } 
          <p>
            discription of farmer with beautiful words and thinsg obut the farm
            that has been in there family for one million generations thank you
            farmer and buyres THANK YOU
          </p>
        </header>
        <center>
          <section>
            <h2>Groceries For Sale</h2>
            {availableProducts.map((item) => {
              return (
                <ItemList
                  id={item.id}
                  available={item.available}
                  title={item.item}
                  price={item.asking_price}
                  product_id={item.product_id}
                  quantity={item.quantity}
                />
              );
            })}
          </section>
          <section>
            {user.user_type === true ? (
            <div></div>
            ):(
            <Button
                    type="submit"
                    style={{ height: "40px" }}
                    variant="contained"
                    color="primary"
                    onClick={() => addToFavorites()}
                  >
                    Add To Favorites
                  </Button>
            )}
          </section>
        </center>
      </section>
    
  );
}

// this allows us to use <App /> in index.js
export default FarmerPage;
