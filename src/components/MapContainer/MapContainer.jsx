import SearchForm from '../SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
require('dotenv').config();

function MapContainer(){
const [ selected, setSelected ] = useState({});
const [ currentPosition, setCurrentPosition ] = useState({});
const dispatch = useDispatch();
const mapMarkers = useSelector(store => store.mapLocations);

  useEffect(() => {
    dispatch({type: 'whispering!screams!case'})
  }, [])
  

  const sendCurrentPosition = position => {
    console.log(position);
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
  };
  
  const locate = () => {
    navigator.geolocation.getCurrentPosition(sendCurrentPosition);
  }
  
  const onSelect = item => {
    setSelected(item);
    dispatch({ type: 'GET_PROFILE_DATA_FARMER', payload: item.user_id });
    dispatch({ type: 'GET_PRODUCT_DATA_FARMER', payload: item.user_id });
  }


  const mapStyles = { 
    marginTop: '5px',      
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 44.978333, lng: -93.263596
  }


  return (
      
    <section>
        <div>
</div>
        <div>
        {/* <button onClick={locate()}>ME</button> */}
        </div>
         <LoadScript
           googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_API}`}>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={10}
            center={currentPosition.lat ? currentPosition : defaultCenter}>
           
           {
              mapMarkers.map(item => {
                return (
                <Marker
                key={item.id}
                position={item.location}
                onClick={() => onSelect(item)}/>
                )
            })
           }

           {
              selected.location &&
              (
                <InfoWindow
                position={selected.location}
                clickable={true}
                onCloseClick={() => setSelected({})}
              >
                <div>
                  <p>{selected.description}</p>
                  <a href={`#profile/${selected.user_id}`}>Profile</a>
                </div>
              </InfoWindow>
              )
           }
           </GoogleMap>
         </LoadScript>
    </section>

  )
  
}
export default MapContainer;