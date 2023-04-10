import React from "react";
import { app } from "./fb";
import './stylesheets/Home.css';


const Home = () =>{

  const signOut = () =>{
    app.auth().signOut()
  }

  const openMap = () =>{
    console.log('map')
  }

  const openPanel = () =>{
    console.log('panel')
  }

  return(

    <div className="general">
      <div className="supView">
        <h1 className="statText"> Bienvenido </h1>
        <button className="signOutButton" onClick={signOut}> Cerrar sesión </button>
      </div>
      <div className="principal">
        <a href="/panel/">
            <div className="layout">
                <img 
                    className ='imagen'
                    src={require('./images/panel.png')}
                    alt='imgPanel'
                />
                <label className="textButton">Panel de control</label>

            </div>
        </a>

        <a href="/map/">
            <div className="layout">
                <img 
                    className ='imagen'
                    src={require('./images/ubicacion.png')}
                    alt='imgMap'
                />
                <label className="textButton">Mapa</label>

            </div>
        </a>     
        

      </div>
    </div>

  )
}

export default Home;