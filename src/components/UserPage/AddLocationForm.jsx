import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddLocationForm() {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [description, setDescription] = useState('')
  const [availability, setAvailability] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({type: 'ADD_VENDOR', 
    payload: {
        address: address, 
        city: city, 
        state: state, 
        zip: zip, 
        availability: availability, 
        description: description
    }})
    setAddress('');
    setCity('');
    setState('');
    setZip('');
    setAvailability('');
    setDescription('');
  }

return (
  
    <section class='UserPage'>
        <header>
            <h3>Add A Location to Sell Your Products</h3>
        </header>
        <TextField 
        value={address} type="text" placeholder='street' 
        onChange={(evt) => setAddress('215 4th St')} required />
        <TextField 
        value={city} type="text" placeholder='city'  
        onChange={(evt) => setCity('Minneapolis')} required />
        <TextField 
        value={state} type="text" placeholder='state' 
        onChange={(evt) => setState('MN')} required />
        <TextField 
        value={zip} type="text" placeholder='zip'  
        onChange={(evt) => setZip('55401')} required />
        <div></div>
        <br />
        <TextField
          id="outlined-textarea"
          label="Availability"
          value={availability}
          placeholder="What days and times will you be here?"
          multiline
          variant="outlined"
          onChange={(evt) => setAvailability('Mon - Fri 3PM-5PM')} required
        />
        <div></div>
        <br />
                  <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={description}
          placeholder='Quick Overview of yourself and products'
          variant="outlined"
          onChange={(evt) => setDescription('Stop by my stand for some delicious produce, bread, butter and fresh chicken.')} required
        />
        <div></div>
        <br/>
        <Button
            type='submit'
            style={{ height: "24px", backgroundColor: '#bec9bc', color: '#132411'  }}
            variant="contained"
            color="default"
            onClick={(event) => handleSubmit(event)}
        >
            Submit
        </Button>
                
                </section>
      
)
}

export default AddLocationForm;