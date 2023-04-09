import React from "react";
import { app } from "./fb";
import './stylesheets/Home.css';
import { Link, Switch, BrowserRouter } from "react-router-dom";


const Main = () =>{

  const signOut = () =>{
    app.auth().signOut()
  }

  return(

    <div className="general">

      <div className="principal">

        <a href="/panel/">;
            <div className="layout">
                <img 
                    className ='imagen'
                    src={require('./images/panel.png')}
                    alt='imgPanel'
                />
                <label>Panel de control</label>

            </div>
        </a>

        <a href="/map/">;
            <div className="layout">
                <img 
                    className ='imagen'
                    src={require('./images/ubicacion.png')}
                    alt='imgMap'
                />
                <label>Mapa</label>

            </div>
        </a>     
        

      </div>
    </div>

  )
}

export default Main;