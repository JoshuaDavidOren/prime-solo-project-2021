import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useDispatch, useSelector } from 'react-redux';
import mapStyles from './GoogleMapsStyles';
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

  const options = {
    styles: mapStyles,
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
            mapId={'979bb291522548a7'}
            options={options}
            mapContainerStyle={mapStyles}
            zoom={10}
            center={currentPosition.lat ? currentPosition : defaultCenter}
            styles={
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#f5f5f5"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.business",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#497442"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#ffffff"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#dadada"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#e5e5e5"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#eeeeee"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#c9c9c9"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#000042"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              }
} 
          
            >
              
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