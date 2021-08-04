// MAKE THIS INTO CREATE PROFILE PAGE ALSO
// ON CHECK FOR FARMER HAVE ADDITIONAL INPUTS

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [farmName, setFarmName] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        userType: userType,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        farmName: farmName
      },
    });
  };

  return (
    <center>
      <form className="formPanel" onSubmit={registerUser}>
        <h2>Register User</h2>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            <input
              className="inputStyle-1"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
            className="inputStyle-1"
            placeholder="password"
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          </div>
          <div>
          <label htmlFor="fistName">
            <input
              className="inputStyle-1"
              placeholder="First Name"
              type="text"
              value={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
          </div>
          <div>
          <label htmlFor="lastName">
            <input
              className="inputStyle-1"
              placeholder="Last Name"
              type="text"
              value={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          </div>
          <div>
          <label htmlFor="phoneNumber">
            <input
            className="inputStyle-1"
            placeholder="Phone Number"
              type="text"
              value={phoneNumber}
              required
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>
          </div>
          <div>
          <label htmlFor="email">
            <input
            className="inputStyle-1"
            placeholder="@email"
              type="text"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          </div>
          <div></div>
          <div>
            Check for Farmer:
              <input
                type="checkbox"
                name="type"
                value={!userType}
                onChange={(event) => setUserType(event.target.value)}
              />
          </div>
          {userType &&  
          <div>
          <label htmlFor="farName">
            <input
            className="inputStyle-1"
            placeholder="Farm Name"
              type="text"
              value={farmName}
              required
              onChange={(event) => setFarmName(event.target.value)}
            />
          </label>
          </div> 
          }
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    </center>
  );
}



export default RegisterForm;
