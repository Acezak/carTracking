import React from "react";
import { app } from "./fb";
import './stylesheets/Home.css';
import Login from "./Login";

const Home = () =>{

  const signOut = () =>{
    app.auth().signOut()
  }

  const openMap = () =>{
    console.log('map');
  }

  const openPanel = () =>{
    console.log('panel');
  }

  return(

    <div className="general">
      <div className="supView">
        <h1 className="statText"> Bienvenido </h1>
        <button className="signOutButton" onClick={signOut}> Cerrar sesión </button>
      </div>

      <div className="principal">

        <div className="layout" onClick={openPanel}>
          <img 
            className ='imagen'
            src={require('./images/panel.png')}
            alt='imgPanel'
          />
          <label>Panel de control</label>

        </div>

        <div className="layout" onClick={openMap}>
          <img 
            className ='imagen'
            src={require('./images/ubicacion.png')}
            alt='imgMap'
          />
          <label>Mapa</label>

        </div>

      </div>
    </div>

  )
}

export default Home;