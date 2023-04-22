// Libraries
import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';
import { BrowserRouter, Link } from "react-router-dom";

//Init vars
const firestore = getFirestore(app)

// Component
const ModifyUser = (props) =>{

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    const name = e.target.name.value
    const cc = e.target.cc.value
    const userType = e.target.userType.value

    console.log(props.email)

    const docuRef = doc(firestore, 'users', props.email);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      await setDoc(docuRef, {
        name:name,
        cc:cc,
        userType:userType
      },{merge:true});
    } else{
      alert('El usuario no existe, realice primero su registro')
      
    }

  }

  const deleteRegister = async (e) => {

    e.preventDefault();

    const docuRef = doc(firestore, 'users', props.email);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      await deleteDoc(docuRef);
    } else{
      alert('El usuario no existe')
      
    }

  }
    
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Modificar elemento </h1>
        <Link to="/panel">
          <button className="signOutButton"> Regresar </button>
        </Link>
      </div>


      <div className='register-container'>

          <form onSubmit={submitHandler}>

          <div className="item-container">

              <label htmlFor="name">Nombre: </label>
              <input 
                id="name"
                type="text" 
                value= {props.name}
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

            </div>
            
            <button className='register-button' type="submit">Modificar usuario</button>
            

          </form> 

        

      </div>
    </div>
  


  )
          
}

export default ModifyUser