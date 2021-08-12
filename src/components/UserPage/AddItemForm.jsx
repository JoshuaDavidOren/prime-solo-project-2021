import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

function AddItemForm() {
 
  const allProducts = useSelector((store) => store.allProductsReducer);
  const dispatch = useDispatch();
  const [nameProduct, setNameProduct] = React.useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [newImg, setNewImg] = useState("");

  const list = allProducts.map((item) => {
    return item.item;
  });

  const addItem = () => {
    event.preventDefault();
    const itemFromList = allProducts.filter(
      (item) => item.item === nameProduct
    );
    const productId = itemFromList[0].id;
    dispatch({
      type: "ADD_ITEM_FARMER_LIST",
      payload: { productId: productId, price: price, quantity: quantity },
    });
    setNameProduct("");
    setPrice("");
    setQuantity("");
  };

  
  
  const addNewProduct = () => {
    event.preventDefault();
    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: { newProduct: newProduct, newImg: newImg },
    });
    setNewProduct("");
    setNewImg("");
  };
  return (
    <section>
      <h3>Add Item</h3>
      <br />
      <form action="submit">
        <Autocomplete
          inputValue={nameProduct}
          onInputChange={(event, newInputValue) => {
            setNameProduct(newInputValue);
          }}
          id="controllable-states-demo"
          options={list}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Item Name" variant="outlined" />
          )}
        />
        <br />
        <TextField
          id="outlined-basic1"
          value={price}
          label="Set Price"
          variant="outlined"
          onChange={(evt) => setPrice(evt.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          value={quantity}
          label="Quantity"
          variant="outlined"
          onChange={(evt) => setQuantity(evt.target.value)}
        />
        <br />
        <Button
          type="submit"
          style={{ height: "40px", backgroundColor: '#bec9bc', color: '#132411' }}
          variant="contained"
          color="primary"
          onClick={() => addItem()}
        >
          Submit
        </Button>
      </form>
      <h4>Can't find the product you would like to add?</h4>
      <h3>Add it Here</h3>
      <TextField
        id="outlined-basic"
        value={newProduct}
        label="New Item"
        variant="outlined"
        onChange={(evt) => setNewProduct(evt.target.value)}
      />
      <Button
        type="submit"
        style={{ height: "57px", backgroundColor: '#bec9bc', color: '#132411'  }}
        variant="contained"
        color="primary"
        onClick={() => addNewProduct()}
      >
        ADD
      </Button>
     
      <TextField
        id="outlined-basic"
        value={newImg}
        label="Image URL"
        variant="outlined"
        onChange={(evt) => setNewImg(evt.target.value)}
      />
    </section>
  );
}

export default AddItemForm;
