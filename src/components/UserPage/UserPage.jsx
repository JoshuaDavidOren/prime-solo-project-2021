import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomItemList from "./CustomItemList";
import AddLocationForm from "./AddLocationForm";
import AddItemForm from "./AddItemForm";
import { useParams } from "react-router-dom";
import NormalUser from "./BaseUser";



function UserPage() {

  const {id} = useParams();
  console.log(Number(id));  

  useEffect(() => {
    dispatch({ type: 'GET_PROFILE_DATA', payload: {id: Number(id)} });
    dispatch({ type: "GET_ALL_PRODUCTS" });
    dispatch({ type: "GET_PRODUCT_DATA" });
    dispatch({ type: "GET_FAVORITE_FARMER_DATA" });
    dispatch({ type: "GET_FAVORITE_MARKET_DATA" });
  }, []);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store) => store.profileReducer);
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.productReducer);
  const info = profile[0];
  const dispatch = useDispatch();
  

  
  

  
  return (
    <center >
      <section class='UserPage'>
        <header>
          { info && <> 
          <h3>{info.page_title}</h3>
          <h4>{info.email}</h4>
          <h4>{info.phone_number}</h4>
          </>
          } 
        </header>

        <div>
          {user.user_type === true ? (
            <section>
              <section>
                <h2>Groceries For Sale</h2>
                {products.map((item) => {
                  return (
                    <CustomItemList
                      id={item.id}
                      available={item.available}
                      title={item.item}
                      price={item.asking_price}
                      product_id={item.product_id}
                      quantity={item.quantity}
                      img={item.img}
                    />
                  );
                })}
              </section>
              <AddItemForm />
              <AddLocationForm />
            </section>
          ) : (
            <NormalUser />
          )}
        </div>
      </section>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
