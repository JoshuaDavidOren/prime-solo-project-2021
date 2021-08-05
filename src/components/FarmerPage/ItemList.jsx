import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function ItemList(item){
    const classes = useStyles();
    const image = 'https://image.shutterstock.com/image-vector/cute-strawberry-vector-graphic-icon-260nw-1014794461.jpg'
    const dispatch = useDispatch();

    const deleteFromList = (id) => {
        console.log('d',id);
        dispatch({type: "DELETE_FROM_LIST", payload: id })
    } 
    const updateAvailable = (id) => {
        console.log('up',id);
        dispatch({type: "UPDATE_AVAILABLE", payload: id })
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
                                      onClick={() => updateAvailable(item.id)}
                                    >
                                      Available
                                    </Button>
                                    :
                                    <Button
                                      style={{ height: "24px" }}
                                      variant="contained"
                                      color="default"
                                      onClick={() => updateAvailable(item.id)}
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
                                      onClick={() => deleteFromList(item.id)}
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