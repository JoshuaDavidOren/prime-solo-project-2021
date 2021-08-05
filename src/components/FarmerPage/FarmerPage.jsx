import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

function FarmerPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const profile = useSelector((store) => store.profileReducer);
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.productReducer);
  const allProducts = useSelector((store) => store.allProductsReducer)
  const favMarket = useSelector((store) => store.favoriteMarketReducer);
  const favFarmer = useSelector((store) => store.favoriteFarmerReducer);
  const info = profile[0];
  const dispatch = useDispatch();

  const array = [
    { name: "apples" },
    { name: "bananas" },
    { name: "peaches" },
    { name: "eggplants" },
  ];
  const [nameProduct, setNameProduct] = React.useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [ newProduct, setNewProduct] = useState('');

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS" });
    dispatch({ type: "GET_PRODUCT_DATA" });
    dispatch({ type: "GET_FAVORITE_FARMER_DATA" });
    dispatch({ type: "GET_FAVORITE_MARKET_DATA" });
  }, []);

  const addItem = () => {
    event.preventDefault();
    dispatch({
      type: "ADD_ITEM_FARMER_LIST",
      payload: { nameProduct: nameProduct, price: price, quantity: quantity },
    });
    setNameProduct('');
    setPrice('');
    setQuantity('');
  };

  const addNewProduct = () => {
    event.preventDefault();
    dispatch({
      type: "ADD_NEW_PRODUCT",
      payload: newProduct,
    });
    setNewProduct('');
  } 

  console.log(user);
  return (
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
      {user.user_type === true ? (
        <section>
          <h2>Groceries For Sale</h2>
          {products.map((item) => {
            return (
              <ItemList
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
      ) : (
        <section>
          <h2>Favorites</h2>
          {favFarmer.map((item) => {
            return <div>{item.first_name}</div>;
          })}
          {favMarket.map((item) => {
            return <div>{item.name}</div>;
          })}
        </section>
      )}

      <div>
        {user.user_type === true ? 
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
                options={array}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Item Name" variant="outlined" />
                )}
              />
              <br/>
              <TextField
                id="outlined-basic1"
                value={price}
                label="Set Price"
                variant="outlined"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <br/>
              <TextField
                id="outlined-basic"
                value={quantity}
                label="Quantity"
                variant="outlined"
                onChange={(evt) => setQuantity(evt.target.value)}
              />
              <br/>
              <Button
                type="submit"
                style={{ height: "40px" }}
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
                style={{ height: "40px" }}
                variant="contained"
                color="primary"
                onClick={() => addNewProduct()}
              >
                ADD
              </Button>
          </section>
         : 
          <div></div>
        }
      </div>
    </section>
  );
}

// this allows us to use <App /> in index.js
export default FarmerPage;
