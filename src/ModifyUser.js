// Libraries
import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';
import {  useLocation, Link, useHistory } from "react-router-dom";

//Init vars
const firestore = getFirestore(app)

// Component
const ModifyUser = () =>{

  const history = useHistory()
  const loc = useLocation();
  const data = loc.state;

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    var name = e.target.name.value
    var cc = e.target.cc.value
    var userType = e.target.userType.value

    if (name == ""){
      name = data.name
    }

    if (cc == ""){
      cc = data.id
    }

    

    
    const docuRef = doc(firestore, 'users', data.email);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      await setDoc(docuRef, {
        name:name,
        cc:cc,
        userType:userType
      },{merge:true});

      alert("Modificación exitosa")
      history.goBack();

    } else{
      alert('El usuario no existe, realice primero su registro')
      history.goBack();
      
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
                placeholder={data.name}/>

                <label htmlFor="cc">Documento de identidad: </label>
                <input 
                  id="cc"
                  type="number" 
                  placeholder={data.id}/>
              
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

