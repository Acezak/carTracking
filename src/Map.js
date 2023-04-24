import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { db } from './fb';
import 'firebase/firestore';
import { useHistory, Link } from "react-router-dom";

//Style
import './stylesheets/Map.css';

//import vehicles collection from firestore
const markersRef = db.collection('vehicles');


const Maps = () => {
  //history router
  const history = useHistory()
  const [markers, setMarkers] = useState([]);

  useEffect(() => {

    //real time update
    const unsubscribe = markersRef.onSnapshot((querySnapshot) => {
      const markers = [];

      //draw markers for some vehicle on Duty
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.status == "onDuty"){
          markers.push({
            id: data.plate,
            position: data.location,
            popUp: 'Placa: '+data.plate+', Conductor: '+data.driverId,
          });
        }
        
      });
      setMarkers(markers);
    });
  
    //Clean view
    return () => unsubscribe();
  }, []);
  
  //Icon onDuty vehicles
  const customIcon =new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10000/10000307.png",
    iconSize:[30, 30]
  })


  //Leaflet map config
  return(
    <div className="general">
      <div className="supView">
          <h1 className="statText"> Seguimiento vehicular </h1>
          <button className="goBackButton" onClick ={history.goBack}> Regresar </button>
      </div>

      <div className='mapContainer'>
        <MapContainer center={[4.570868, -74.297333]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>  
  )
}

export default Maps;
