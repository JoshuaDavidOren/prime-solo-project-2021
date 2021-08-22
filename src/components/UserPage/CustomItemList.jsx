import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  paper: { padding: theme.spacing(2), color: theme.palette.text.secondary },
}));

function ItemList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productReducer);

  const deleteFromList = (product_id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#497442",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove Item!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        confirmedDelete(product_id);
      }
    });
  };

  const confirmedDelete = (product_id) => {
    dispatch({ type: "DELETE_FROM_LIST", payload: product_id });
  };
  const updateAvailable = (product_id) => {
    dispatch({ type: "UPDATE_AVAILABLE", payload: product_id });
  };

  return (
    <>
      {products.map((item) => {
        return (
          <Grid item style={{ height: "256px", width: "320px" }} id={item.id}>
            <Paper
              elevation={3}
              className={classes.paper}
              style={{ height: "240px", width: "320px" }}
            >
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={item.img} width="150px" hight="100px" />
                    </td>
                    <td>
                      <h4>{item.title}</h4>
                      <h4>{item.price}</h4>
                      <p></p>
                      <h4>{item.quantity}</h4>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      {item.available === true ? (
                        <Button
                          style={{
                            height: "24px",
                            backgroundColor: "#497442",
                            color: "#FFFFFF",
                          }}
                          variant="contained"
                          color="primary"
                          onClick={() => updateAvailable(item.product_id)}
                        >
                          Available
                        </Button>
                      ) : (
                        <Button
                          style={{
                            height: "24px",
                            backgroundColor: "#efdeda",
                            color: "#132411",
                          }}
                          variant="contained"
                          color="default"
                          onClick={() => updateAvailable(item.product_id)}
                        >
                          Unavailable
                        </Button>
                      )}
                    </td>
                    <td></td>
                    <td>
                      <Button
                        style={{
                          height: "24px",
                          backgroundColor: "#bec9bc",
                          color: "#132411",
                        }}
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
        );
      })}
    </>
  );
}

export default ItemList;
