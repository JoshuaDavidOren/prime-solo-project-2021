import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Market() {
  const { id } = useParams();
  useEffect(() => {
    console.log("in use Effect");
    dispatch({ type: "FETCH_MARKET_LOCATIONS" });
  }, []);

  const user = useSelector((store) => store.user);
  const marketMarkers = useSelector((store) => store.marketLocations);
  const info = marketMarkers.filter((item) => item.farmers_markets_id == id);
  const dispatch = useDispatch();
  const market = info[0];

  const addToFavorites = () => {
    const id = info.user_id;
    dispatch({ type: "ADD_FAVORITE_MARKET", payload: { id: id } });
  };

  return (
    <section class="FarmerPage">
      <header class="p-head">
        <h1>MARKET</h1>
        {market && (
          <>
            <div>
              <img src={market.img} />
            </div>
            <h3>{market.name}</h3>
            <h4>{market.availability}</h4>
            <a href={market.link}>{market.link}</a>
          </>
        )}
        {market && (
          <>
            <p>{market.description}</p>
            <p>{market.address}</p>
          </>
        )}
      </header>
      <center>
        <section>
          {user.user_type === true ? (
            <div></div>
          ) : (
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

export default Market;
