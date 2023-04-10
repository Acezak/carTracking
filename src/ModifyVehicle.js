// Libraries
import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';

//Init vars
const firestore = getFirestore(app)

// Component
const ModifyVehicle = (props) =>{

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    const brand = e.target.brand.value
    const plate = e.target.plate.value
    const model = e.target.model.value    

    const docuRef = doc(firestore, 'vehicles', plate);
    const docu = await getDoc(docuRef);

    if (docu.exists()){
      await setDoc(docuRef, {
        brand:brand,
        model:model
      },{merge:true});
    } else{
      alert('El vehículo no existe, realice primero su registro')
    }

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

            <label htmlFor="plate">Placa: </label>
              <input 
                id="plate"
                type="text" 
                placeholder="Ingrese la placa"/>

              <label htmlFor="brand">Marca: </label>
                <input 
                  id="brand"
                  type="text" 
                  placeholder="Ingrese la marca"/>


              <label htmlFor="model">Modelo: </label>
              <input 
                id="model"
                type="text" 
                placeholder="Ingrese el modelo"/>


            </div>
            
            <button className='register-button' type="submit">Modificar usuario</button>

          </form> 

        

      </div>
    </div>
  


  )
          
}

export default ModifyVehicle