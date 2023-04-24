import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc } from'firebase/firestore'
import { useHistory } from "react-router-dom";

//Style
import './stylesheets/Comp.css';

//Init vars and const
const firestore = getFirestore(app)

//component
const AddVehicle = () =>{

  //history router
  const history = useHistory()

  //Add vehicle function
  const addVehicle = async(e) => {
    e.preventDefault();

    //Form data capture
    const model = e.target.model.value
    const brand = e.target.brand.value
    const plate = e.target.plate.value
    
    //Defined values for register
    const location = [0,0]
    const status = 'free'
    const driverId = 0

      if (model == "" || brand == "" || plate == "" ){
        alert("Debe completar todos los datos antes de continuar")

      } else{
        //Firebase collection
        const docuRef = doc(firestore, 'vehicles', plate);

        //Existence verification and firebase add method
        const docu = await getDoc(docuRef);

        if (docu.exists()){
          alert("Este vehículo ya existe")
          history.goBack();

        }else{
          setDoc(docuRef,{model:model, brand:brand, plate:plate, location:location, status:status, driverId:driverId}).then(() =>{
            alert("Registro exitoso")
            history.goBack();
          })

          .catch(()=>{
            alert("Ocurrió un problema con el registro")
    
          })
          
        }
      }
    }
    
  //Graph comp
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Añadir vehículo </h1>
        <button className="goBackButton" onClick ={history.goBack}> Regresar </button>
      </div>

      <div className='register-container'>

        <form onSubmit={addVehicle}>

        <div className="item-container">

          <div className="vertInput">
          <label htmlFor="model">Modelo</label>
            <input 
              id="model"
              type="text" 
              placeholder="Ingrese el modelo"/>
          </div>
  
          <div className="vertInput">
          <label htmlFor="brand">Marca</label>
              <input 
                id="brand"
                type="text" 
                placeholder="Ingrese la marca"/>
          </div>

          <div className="vertInput">
          <label htmlFor="plate">Placa</label>
            <input 
              id="plate"
              type="text" 
              placeholder="Ingrese la placa"/>
          </div>
            
        </div>

          <button className='register-button' type="submit">Registrar</button>

        </form> 
      </div>
    </div>
  )        
}

export default AddVehicle