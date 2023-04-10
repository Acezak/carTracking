import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc } from'firebase/firestore'
import './stylesheets/AddVehicle.css';

const firestore = getFirestore(app)

const AddVehicle = () =>{

  const submitHandler = (e) => {

    e.preventDefault();
    const model = e.target.model.value
    const brand = e.target.brand.value
    const plate = e.target.plate.value
    const location = [0,0]
    const status = 'free'
    const driverId = 0

    const docuRef = doc(firestore, `vehicles/${plate}`);
    setDoc(docuRef,{model:model, brand:brand, plate:plate, location:location, status:status, driverId:driverId});

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
              <label htmlFor="model">Modelo: </label>
              <input 
                id="model"
                type="text" 
                placeholder="Ingrese el modelo"/>

                <label htmlFor="brand">Marca: </label>
                <input 
                  id="brand"
                  type="text" 
                  placeholder="Ingrese la marca"/>


              <label htmlFor="plate">Placa: </label>
              <input 
                id="plate"
                type="text" 
                placeholder="Ingrese la placa"/>

            </div>
            
            <button className='register-button' type="submit">Registrar</button>

          </form> 

        

      </div>
    </div>
  


  )
          
}

export default AddVehicle