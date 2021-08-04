import React from 'react'
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles((theme) => ({root: {flexGrow: 1},paper: {padding: theme.spacing(2), textAlign: "center", color: theme.palette.text.secondary}}));

function ItemList(item){
    const classes = useStyles();
   
            return(  <>
                <Grid item style={{height: "520px" }} id={item.id}> 
                <Card>
                  <Paper className={classes.paper}>
                  <CardMedia
                  className={item.item}
                  style = {{ height: '100px'}}
                  component="img"
                  alt={item.title}
                  src={item.url}
                  title={item.item}
                />
                    <br />
                    <Button
                      style={{ width: "180px", height: "42px" }}
                      variant="contained"
                      color="primary"
                      onClick={() => postToFavorites(item)}
                    >
                      Delete Item
                    </Button>
                    <CardActions>
                    
                    </CardActions>
                  </Paper>
                  </Card>
                </Grid>
                </>)
}

export default ItemList;