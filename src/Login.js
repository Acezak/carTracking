import React from "react";
import './stylesheets/Auth.css'
import {app} from "./fb"
import { getFirestore, doc, getDoc } from'firebase/firestore'

// Firesore init
const firestore = getFirestore(app)

const Login = (props) => { 

  //user type search 
  async function getType(email){
    const docuRef = doc(firestore, 'users', email);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      const info = docu.data();
      const uType = info.userType;
      return uType;

    } else{
      alert('Usuario no registrado o contraseña inválida')  
    }
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    const uType = await getType(email);

    //user type validation
    if (uType == "Admin"){
      //sign in method by firebase
      app.auth().signInWithEmailAndPassword(email,password).then((firebaseUser) =>{
        props.setUser(firebaseUser);
      })
      .catch(()=>{
        alert("Ocurrió un problema con la autenticación")
      }) 
    } else if (uType == "Driver"){
      alert('No tiene permisos de administrador')
    }
  }

  return(

    //rendering elements
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