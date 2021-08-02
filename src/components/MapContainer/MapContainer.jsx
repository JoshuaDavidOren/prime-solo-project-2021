import React from 'react'
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { useDispatch, useSelector } from 'react-redux';
// require('dotenv').config();

function MapContainer(){
// const [ selected, setSelected ] = useState({});
//   const [ currentPosition, setCurrentPosition ] = useState({});
//   const dispatch = useDispatch();
//   const alderaan = useSelector(store => store.youMayFireWhenReady);


//   useEffect(() => {
//     dispatch({type: 'whispering!screams!case'})
//   }, [])
  

//   const sendCurrentPosition = position => {
//     console.log(position);
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     }
//     setCurrentPosition(currentPosition);
//   };
  
//   const locate = () => {
//     navigator.geolocation.getCurrentPosition(sendCurrentPosition);
//   }
  
//   const onSelect = item => {
//     setSelected(item);
//   }


//   const mapStyles = { 
//     marginTop: '5px',      
//     height: "100vh",
//     width: "100%"};
  
//   const defaultCenter = {
//     lat: 44.978333, lng: -93.263596
//   }

  return (
//     <section>
//         <div>
//         <button onClick={locate()}>ME</button>
//         </div>
//          <LoadScript
//            googleMapsApiKey={`${process.env.react_app_google_api}`}>
//             <GoogleMap
//             mapContainerStyle={mapStyles}
//             zoom={13}
//             center={currentPosition.lat ? currentPosition : defaultCenter}>
           
//            {
//               alderaan.map(item => {
//                 return (
//                 <Marker
//                 key={item.id}
//                 position={item.location}
//                 onClick={() => onSelect(item)}/>
//                 )
//             })
//            }

//            {
//               selected.location &&
//               (
//                 <InfoWindow
//                 position={selected.location}
//                 clickable={true}
//                 onCloseClick={() => setSelected({})}
//               >
//                 <p>{selected.id}</p>
//               </InfoWindow>
//               )
//            }
//            </GoogleMap>
//          </LoadScript>
//     </section>
<h1>I'm a Map</h1>
  )
  
}
export default MapContainer;