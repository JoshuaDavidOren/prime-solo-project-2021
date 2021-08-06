import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from "@material-ui/core/TextField";

function AddLocationForm() {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({type: '-PIERCED-MAN-CASE-', payload: {address: address, city: city, state: state, zip: zip}})
    setAddress('');
    setCity('');
    setState('');
    setZip('');
  }

return (
  
                <section>
                  <input value={address} type="text" placeholder='street' onChange={(evt) => setAddress(evt.target.value)} required />
                  <input value={city} type="text" placeholder='city'  onChange={(evt) => setCity(evt.target.value)} required />
                  <input value={state} type="text" placeholder='state' onChange={(evt) => setState(evt.target.value)} required />
                  <input value={zip} type="text" placeholder='zip'  onChange={(evt) => setZip(evt.target.value)} required />
                  
                  <TextField
          id="outlined-textarea"
          label="Availability"
          placeholder="What days and times will you be here?"
          multiline
          variant="outlined"
        />
                  <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          placeholder='Quick Overview of yourself and products'
          variant="outlined"
        />
        <br/>
                  <button type='submit' onClick={(event) => handleSubmit(event)}>submit</button>
                </section>
      
)
}

export default AddLocationForm;