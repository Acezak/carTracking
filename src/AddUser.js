// Libraries
import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';

//Init vars
const firestore = getFirestore(app)

// Component
const AddUser = (props) =>{

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const cc = e.target.cc.value
    const userType = e.target.userType.value

    //User account with email and password
    const userInfo = app.auth().createUserWithEmailAndPassword(email,password).then((firebaseUser) =>{

    })

    const docuRef = doc(firestore, `users/${email}`);
    setDoc(docuRef,{name:name, cc:cc, userType:userType, email:email});

      }
    
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Añadir usuario </h1>
        <a href="/panel">
          <button className="signOutButton"> Regresar </button>
        </a>
      </div>


      <div className='register-container'>

          <form onSubmit={submitHandler}>

          <div className="item-container">
              <label htmlFor="name">Nombre: </label>
              <input 
                id="name"
                type="text" 
                placeholder="Ingrese el nombre"/>

                <label htmlFor="cc">Documento de identidad: </label>
                <input 
                  id="cc"
                  type="number" 
                  placeholder="Ingrese el número de cc"/>
              
              <label htmlFor="userType">Rol: 
                <select id="userType">
                  <option value = "Admin">Administrador</option>
                  <option value = "Driver">Conductor</option>
                </select>
              </label>

              <label htmlFor="email">Email: </label>
              <input 
                id="email"
                type="email" 
                placeholder="Ingrese el email"/>
              
              <label htmlFor="password">Contraseña: </label>

              <input 
                id="password"
                type="password" 
                placeholder="Ingrese la contraseña"/>

            </div>
            
            <button className='register-button' type="submit">Añadir usuario</button>

          </form> 

        

      </div>
    </div>
  


  )
          
}

export default AddUser