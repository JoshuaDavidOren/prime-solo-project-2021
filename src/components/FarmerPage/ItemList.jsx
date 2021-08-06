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

    
    const deleteFromList = (product_id) => {
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Remove Item!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          confirmedDelete(product_id);
        }
        
      })
    }

    const confirmedDelete = (product_id) => {
        dispatch({type: "DELETE_FROM_LIST", payload: product_id })
    } 
    const updateAvailable = (product_id) => {
        dispatch({type: "UPDATE_AVAILABLE", payload: product_id })
    } 


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