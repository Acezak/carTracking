import React from "react";
import { app } from "./fb";

const Home = () =>{

  const signOut = () =>{
    app.auth().signOut()
  }
  return(
    <div>
      <h1> Bienvenido </h1>
      <button onClick={signOut}> Cerrar sesión </button>
    </div>
  )
};

export default Home;