import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';
import {  useLocation, Link, useHistory } from "react-router-dom";


//Init vars
const firestore = getFirestore(app)

// Component
const ModifyVehicle = () =>{

  const history = useHistory()
  const loc = useLocation();
  const data = loc.state;
  
  console.log(data)

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    var brand = e.target.brand.value
    var model = e.target.model.value  
    
    if (brand == ""){
      brand = data.brand
    }

    if (model == ""){
      model = data.model
    }

    const docuRef = doc(firestore, 'vehicles', data.plate);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      await setDoc(docuRef, {
        brand:brand,
        model:model
      },{merge:true});

      alert("Modificación exitosa")
      history.goBack();

    } else{
      alert('El vehículo no existe, realice primero su registro')
      history.goBack();
    }

  }

  const deleteRegister = async (e) => {

    e.preventDefault();
  
    const docuRef = doc(firestore, 'vehicles', data.plate);
    const docu = await getDoc(docuRef);
  
    if (docu.exists()){
      await deleteDoc(docuRef);
      alert("Vehículo eliminado")
      history.goBack();
    } else{
      alert('El usuario no existe')
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

              <label htmlFor="brand">Marca: </label>
                <input 
                  id="brand"
                  type="text" 
                  placeholder={data.brand}/>


              <label htmlFor="model">Modelo: </label>
              <input 
                id="model"
                type="text" 
                placeholder={data.model}/>


            </div>
            
            <button className='register-button' type="submit">Modificar usuario</button>
            <button className='register-button' onClick={deleteRegister}>eliminar</button>

          </form> 

        

      </div>
    </div>
  


  )
          
}

export default ModifyVehicle