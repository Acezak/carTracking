import React from "react";
import './stylesheets/Auth.css'
import {app} from "./fb"

const Login = (props) => { 
  
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    app.auth().signInWithEmailAndPassword(email,password).then((firebaseUser) =>{
      props.setUser(firebaseUser);

    })
  }

  return(

    <div className='sign-in-container'>
      <img 
        className ='image'
        src={require('./images/img.jpg')}
        alt='img'
      />

      <div className="item-container">

        <form onSubmit={submitHandler}>
          <h1 className="auth-title">Iniciar sesión</h1>

          <div className="email-container">
            <label htmlFor="email">Email: </label>
            <input 
              id="email"
              type="email" 
              placeholder="Ingrese su email"/>
          </div>

          <div className="password-container">
            <label htmlFor="password">Contraseña: </label>
            <input 
              id="password"
              type="password" 
              placeholder="Ingrese su contraseña"/>
          </div>

          <button className='auth-button' type="submit">Ingresar</button>

        </form> 

      </div>

    </div>


  )
  
  
}

export default Login