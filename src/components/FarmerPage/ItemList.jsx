import React from 'react'
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Swal from 'sweetalert2'


const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function ItemList(item){
    const classes = useStyles();
    const image = 'https://image.shutterstock.com/image-vector/cute-strawberry-vector-graphic-icon-260nw-1014794461.jpg'
    const dispatch = useDispatch();

    


            return(  <>
                <Grid item style={{height: "320px", width: '350px' }} id={item.id}> 
               
                  <Paper className={classes.paper}>
                    
                    
                    <br />
                    <table>
                        <tbody>
                            <tr><td><img src={image} width='150px' hight='100px'/></td>
                            <td><h4>{item.title}</h4>
                                    <h4>{item.price}</h4><p></p><h4>
                            {item.quantity}</h4></td>
                            </tr>
                            
                        </tbody>
                    </table>
                 
                  </Paper>
                  

                </Grid>
                </>)
}

export default ItemList;