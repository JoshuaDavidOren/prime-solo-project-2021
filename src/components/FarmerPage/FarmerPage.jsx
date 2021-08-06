import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function FarmerPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store) => store.farmerProfileReducer);
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.productReducer);
  const info = profile[0];




  console.log(user);
  return (
    
      <section>
        <header class="p-head">
          <div className="profile-image"></div>
          <h3>{info.page_title}</h3>
          <h4>{info.email}</h4>
          <h4>{info.phone_number}</h4>
          <p>
            discription of farmer with beautiful words and thinsg obut the farm
            that has been in there family for one million generations thank you
            farmer and buyres THANK YOU
          </p>
        </header>
        <center>
          <section>
            <h2>Groceries For Sale</h2>
            {products.map((item) => {
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
        <div>
      
        </div>
        </center>
      </section>
    
  );
}

// this allows us to use <App /> in index.js
export default FarmerPage;
