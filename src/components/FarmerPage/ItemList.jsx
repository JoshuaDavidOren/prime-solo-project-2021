import React from 'react'
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function ItemList(item){
    const classes = useStyles();
    const image = 'https://image.shutterstock.com/image-vector/cute-strawberry-vector-graphic-icon-260nw-1014794461.jpg'
    const dispatch = useDispatch();



    const deleteFromList = (product_id) => {
        dispatch({type: "DELETE_FROM_LIST", payload: product_id })
    } 
    const updateAvailable = (product_id) => {
        dispatch({type: "UPDATE_AVAILABLE", payload: product_id })
    } 


            return(  <>
                <Grid item style={{height: "200px", width: '350px' }} id={item.id}> 
               
                  <Paper className={classes.paper}>
                    
                    
                    <br />
                    <table>
                        <tbody>
                            <tr><td><img src={image} width='100px' hight='100px'/></td>
                            <td><h3>{item.title}:</h3></td>
                            <td><h3>{item.price}</h3></td>
                            </tr>
                            <tr>
                                <td>
                                   {item.available === true ?
                                    <Button
                                      style={{ height: "24px" }}
                                      variant="contained"
                                      color="primary"
                                      onClick={() => updateAvailable(item.product_id)}
                                    >
                                      Available
                                    </Button>
                                    :
                                    <Button
                                      style={{ height: "24px" }}
                                      variant="contained"
                                      color="default"
                                      onClick={() => updateAvailable(item.product_id)}
                                    >
                                      Not Available
                                    </Button>
                                    }
                                </td>
                                <div></div>
                                <td>
                                <Button
                                      style={{  height: "24px" }}
                                      variant="contained"
                                      color="secondary"
                                      onClick={() => deleteFromList(item.product_id)}
                                    >
                                      Remove
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 
                  </Paper>
                  

                </Grid>
                </>)
}

export default ItemList;