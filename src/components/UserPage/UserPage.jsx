import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomItemList from "./CustomItemList";
import AddLocationForm from "./AddLocationForm";
import AddItemForm from "./AddItemForm";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store) => store.profileReducer);
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.productReducer);
  const favMarket = useSelector((store) => store.favoriteMarketReducer);
  const favFarmer = useSelector((store) => store.favoriteFarmerReducer);
  const info = profile[0];
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
    dispatch({ type: "GET_PRODUCT_DATA" });
    dispatch({ type: "GET_FAVORITE_FARMER_DATA" });
    dispatch({ type: "GET_FAVORITE_MARKET_DATA" });
  }, []);

  const goToFarmerProfile = (id) => {

  }

  const deleteFromFavorites = (id) => {
    dispatch({type: 'DELETE_FROM_FAVORITES', payload: {id: id}})
  }

  console.log(favFarmer);
  return (
    <center>
      <section>
        <header>
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
                    />
                  );
                })}
              </section>

              <AddItemForm />

              <AddLocationForm />
            </section>
          ) : (
            <div>
              <section>
                <h2>Favorites</h2>
                {favFarmer.map((item) => {
                  return (
                    <Grid
                      item
                      style={{ height: "150px", width: "350px" }}
                      id={item.id}
                    >
                      <Paper className={classes.paper}>
                        <br />
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <h4>{item.first_name} </h4>
                                <h4>{(item.last_name)}</h4>
                              </td>
                              </tr>
                              <tr>
                              <td>
                                <Button
                                  style={{ height: "24px" }}
                                  variant="contained"
                                  color="primary"
                                  onClick={() =>
                                    goToFarmerProfile(item.farmer_type_id)
                                  }
                                >
                                  Go To Profile
                                </Button>
                              </td>
                              <td></td>
                              <td>
                                <Button
                                  style={{ height: "24px" }}
                                  variant="contained"
                                  color="secondary"
                                  onClick={() =>
                                    deleteFromFavorites(item.farmer_type_id)
                                  }
                                >
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Paper>
                    </Grid>
                  );
                })}
                {favMarket.map((item) => {
                  return <div>{item.name}</div>;
                })}
              </section>
            </div>
          )}
        </div>
      </section>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
