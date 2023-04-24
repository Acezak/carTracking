import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from'firebase/firestore'
import {  useLocation, useHistory } from "react-router-dom";

//style
import './stylesheets/Comp.css';

//Init vars and const
const firestore = getFirestore(app)

// Component
const ModifyVehicle = () =>{

  //History router
  const history = useHistory()

  //Prev. data capture
  const loc = useLocation();
  const data = loc.state;

  //Modify register function
  const modifyRegister = async (e) => {
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

    //Firebase collection
    const docuRef = doc(firestore, 'vehicles', data.plate);
    
    //Existence verification and firebase modify method
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

  //Delete register function
  const deleteRegister = async (e) => {
    e.preventDefault();
  
    //Firebase collection
    const docuRef = doc(firestore, 'vehicles', data.plate);
    
    //Existence verification and firebase delete method
    const docu = await getDoc(docuRef);
  
    if (docu.exists()){
      if (data.status == "free"){
        await deleteDoc(docuRef);
        alert("Vehículo eliminado")
        history.goBack();
      } else{
        alert("El vehículo se encuentra en uso, no es posible eliminarlo")
      }

    } else{
      alert('El vehículo no existe')
      history.goBack();
    }
  }
   
  //Graph comp
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Modificar vehículo </h1>
        <button className="goBackButton" onClick ={history.goBack}> Regresar </button>
      </div>

      <div className='register-container'>

        <form onSubmit={modifyRegister}>

          <div className="item-container">

            <div className="vertInput">
            <label htmlFor="brand">Marca</label>
              <input 
                id="brand"
                type="text" 
                placeholder={data.brand}/>
            </div>

            <div className="vertInput">
            <label htmlFor="model">Modelo</label>
              <input 
                id="model"
                type="text" 
                placeholder={data.model}/>
            </div>

          </div>
            
            <button className='register-button' type="submit">Modificar vehículo</button>
            <button className='delete-button' onClick={deleteRegister}>Eliminar vehículo</button>

        </form> 

        

      </div>
    </div>
  


  )
          
}

export default ModifyVehicle