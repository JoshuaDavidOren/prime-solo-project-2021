import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function NormalUser() {
    const favMarket = useSelector((store) => store.favoriteMarketReducer);
    const favFarmer = useSelector((store) => store.favoriteFarmerReducer);
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();


    const goToFarmerProfile = (id) => {
        dispatch({ type: 'GET_PROFILE_DATA_FARMER', payload: id });
        dispatch({ type: 'GET_PRODUCT_DATA_FARMER', payload: id });
        history.push(`/profile/${id}`)
      }
    
      const goToMarketPage = (id) => {
        history.push(`/market/${id}`)
      }
    
      const deleteFavoriteFarmer = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#497442',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove Item!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your favorite has been removed.',
                'success'
              )
              deleteFromFavoriteFarmer(id);
            }
            
          })
        }
    
        const deleteFromFavoriteFarmer = (id) => {
          dispatch({type: 'DELETE_FROM_FAVORITES_FARMER', payload: {id: id}})
        }
    
        const deleteFavoriteMarket = (id) => {
          Swal.fire({
              title: 'Are you sure?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#497442',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Remove Item!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your favorite has been removed.',
                  'success'
                )
                deleteFromFavoriteMarket(id);
              }
              
            })
          }
    
      
    
      const deleteFromFavoriteMarket = (id) => {
        dispatch({type: 'DELETE_FROM_FAVORITES_MARKET', payload: {id: id}})
      }
    

    return (
        <section>
            <div>
              <section>
                <h2>Favorites</h2>
                <h3>Farmers</h3>
                {favFarmer.map((item) => {
                  return (
                    <Grid
                      item
                      style={{ height: "200px", width: "350px" }}
                      id={item.id}
                    >
                      <Paper elevation={3} className={classes.paper}>
                        <br />
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <h4>{item.first_name} {(item.last_name)} </h4>
                              </td>
                              </tr>
                              <tr>
                              <td>
                                <Button
                                  style={{ height: "24px", backgroundColor: '#497442', color: '#FFFFFF'  }}
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
                                  style={{ height: "24px", backgroundColor: '#efdeda', color: '#132411' }}
                                  variant="contained"
                                  color="secondary"
                                  onClick={() =>
                                    deleteFavoriteFarmer(item.farmer_type_id)
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
                <h3>Markets</h3>
                {favMarket.map((item) => {
                  return (
                    <Grid
                      item
                      style={{ height: "200px", width: "350px" }}
                      id={item.id}
                    >
                      <Paper className={classes.paper}>
                        <br />
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <h3>{item.name} </h3>
                              </td>
                              </tr>
                              <tr>
                              <td>
                                <h3>{item.availability} </h3>
                              </td>
                              </tr>
                             <tr>
                              <td>
                              <Button
                                  style={{ height: "24px", backgroundColor: '#497442', color: '#FFFFFF'  }}
                                  variant="contained"
                                  color="primary"
                                  onClick={() =>
                                    goToMarketPage(item.farmers_markets_id)
                                  }
                                >
                                  Market Page
                                </Button>
                                </td>
                                <td></td>
                                <td>
                                <Button
                                  style={{ height: "24px", backgroundColor: '#efdeda', color: '#132411' }}
                                  variant="contained"
                                  color="secondary"
                                  onClick={() =>
                                    deleteFavoriteMarket(item.id)
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
              </section>
            </div>

        </section>
    )
}

export default NormalUser;