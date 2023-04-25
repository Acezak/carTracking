import React from "react";
import { app } from "./fb";
import './stylesheets/Home.css';
import { BrowserRouter, Link } from "react-router-dom";


const Home = () =>{

  //firebase sign out method
  const signOut = () =>{
    app.auth().signOut()
  }

  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Bienvenido </h1>

        <button className="signOutButton" onClick={signOut}> Cerrar sesión </button>

      </div>
      <div className="principal">
        
      <Link to="/panel">
        <div className="layout">
          <img 
            className ='imagen'
            src={require('./images/panel.png')}
            alt='imgPanel'
          />

          <label className="textButton">Panel de control</label>
        </div>
      </Link>
        
      <Link to="/map">
        <div className="layout">
            <img 
                className ='imagen'
                src={require('./images/ubicacion.png')}
                alt='imgMap'
            />
            <label className="textButton">Mapa</label>

        </div>
      </Link>     
      
      </div>
    </div>

  )
}

export default Home;