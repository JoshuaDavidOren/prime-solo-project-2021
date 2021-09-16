import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomItemList from "./CustomItemList";
import AddLocationForm from "./AddLocationForm";
import AddItemForm from "./AddItemForm";
import { useParams } from "react-router-dom";
import NormalUser from "./NormalUser";

function UserPage() {
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "GET_PROFILE_DATA", payload: { id: Number(id) } });
    dispatch({ type: "GET_ALL_PRODUCTS" });
    dispatch({ type: "GET_PRODUCT_DATA" });
    dispatch({ type: "GET_FAVORITE_FARMER_DATA" });
    dispatch({ type: "GET_FAVORITE_MARKET_DATA" });
  }, []);

  const profile = useSelector((store) => store.profileReducer);
  const user = useSelector((store) => store.user);
  const info = profile[0];
  const dispatch = useDispatch();

  return (
    <center>
      <section class="UserPage">
        <header>
          {info && (
            <>
              <h3>{info.page_title}</h3>
              <h4>{info.email}</h4>
              <h4>{info.phone_number}</h4>
            </>
          )}
        </header>

        <div>
          {user.user_type === true ? (
            <section>
              <h2>Groceries For Sale</h2>
              <CustomItemList />
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

export default UserPage;