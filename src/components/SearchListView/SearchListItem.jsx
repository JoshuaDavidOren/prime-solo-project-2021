import React from 'react'
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},grid: {justifyContent: 'space-evenly', spacing: 5}, paper: {padding: theme.spacing(2), color: theme.palette.text.secondary}}));

function SearchItem(item) {
    const classes = useStyles();   
const listItem = item.item;
return(
    <center class='FarmerPage'>
        <Grid className={classes.grid} item style={{height: "280px", width: '320px' }} id={item.id}>
        
                      <Paper  elevation={7} className={classes.paper}>
        
                            
                        <table>
                        <tbody>
                          <tr>
                          <td><h3>{listItem.name}</h3></td>
                          </tr>
                            <tr>
                                {/* <td><img src={image} width='150px' hight='100px'/></td> */}
                            <td><h4>{listItem.address}</h4>
                                    <h4>{listItem.availability}</h4><p></p></td>
                            </tr>
        
                        </tbody>
                    </table>
        
                    {/* {
                    farmers.map(item => {
                      return (
                        <table>
                        <tbody>
                            <tr><td><img src={image} width='150px' hight='100px'/></td>
                            <td><h4>{item.title}</h4>
                                    <h4>{item.price}</h4><p></p><h4>
                            {item.quantity}</h4></td>
                            </tr>
        
                        </tbody>
                    </table>
                      )
                    })} */}
                        <br />
        
        
                      </Paper>
        
                    </Grid>
    </center>
)
}

export default SearchItem;