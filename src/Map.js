import React, { Component } from 'react';
import { app } from "./fb";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './stylesheets/Map.css';

const Maps = () =>{

  const markers = [
    {
      geocode: [6.217, -75.567],
      popUp: "Placa: FIX 492, Conductor: Juan Acevedo"
    },

    {
      geocode: [4.60971, -74.08175],
      popUp: "Placa: FIX 599, Conductor: Mariana castro"
    },

    {
      geocode: [3.43722, -76.5225],
      popUp: "Placa: FIX 471, Conductor: Irma sánchez"
    },
  ];

  const customIcon =new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10000/10000307.png",
    iconSize:[30, 30]
  })

  return(
    <div className="general">
      <div className="supView">
          <h1 className="statText"> Seguimiento vehicular </h1>
          <a href="/">;
            <button className="signOutButton"> Regresar </button>
          </a>
      </div>

      <div className='mapContainer'>
        <MapContainer center={[4.570868, -74.297333]} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {markers.map(marker => (
            <Marker position={marker.geocode} icon={customIcon}>
              <Popup>
                {marker.popUp}
              </Popup>

            </Marker>

          ))
          }
        </MapContainer>

      </div>

    </div>  
  )
}

export default Maps