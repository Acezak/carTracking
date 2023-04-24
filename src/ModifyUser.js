import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from'firebase/firestore'
import './stylesheets/Comp.css';
import {  useLocation, useHistory } from "react-router-dom";

//Init vars and const
const firestore = getFirestore(app)

// Component
const ModifyUser = () =>{

  //History router
  const history = useHistory()

  //Prev. data capture
  const loc = useLocation();
  const data = loc.state;

  //Modify register function
  const modifyRegister = async (e) => {
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

    if (userType == "Default"){
      userType = data.type
    }

    //Firebase collection
    const docuRef = doc(firestore, 'users', data.email);
    
    //Existence verification and firebase modify method
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

  //Delete register function
  const deleteRegister = async (e) => {
    e.preventDefault();
  
    //Firebase collection
    const docuRef = doc(firestore, 'users', data.email);
    
    //Existence verification and firebase delete method
    const docu = await getDoc(docuRef);

    if (data.email == "admin@admin.com"){
      alert("No es posible eliminar este usuario")
    } else{
      if (docu.exists()){
        await deleteDoc(docuRef);
        alert("Usuario eliminado")
        history.goBack();
  
      } else{
        alert('El usuario no existe')
        history.goBack();
      }
    }
  }
    
  //Graph comp
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Modificar usuario </h1>
        <button className="goBackButton" onClick ={history.goBack}> Regresar </button>
      </div>

      <div className='register-container'>

        <form onSubmit={modifyRegister}>

          <div className="item-container">

            <div className="vertInput">
              <label htmlFor="name">Nombre</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder={data.name}/>
            </div>

            <div className="vertInput">
              <label htmlFor="cc">Identificación</label>
                <input 
                  id="cc"
                  type="number" 
                  placeholder={data.id}/>
            </div>

            <div className="vertInput">
              <label htmlFor="userType">Rol</label>
                <select id="userType">
                  <option value = "Default">Elija una opción</option>
                  <option value = "Admin">Administrador</option>
                  <option value = "Driver">Conductor</option>
                </select>
      
            </div>

          </div>
            
            <button className='register-button' type="submit">Modificar usuario</button>
            <button className='delete-button' onClick={deleteRegister}>Eliminar usuario</button>
        </form> 

      </div>
    </div>
  


  )
          
}

export default ModifyUser

