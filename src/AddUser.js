import React from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc } from'firebase/firestore'
import { useHistory } from "react-router-dom";

//Style
import './stylesheets/Comp.css';

//Init vars and const
const firestore = getFirestore(app)

// Component
const AddUser = () =>{

  //history router
  const history = useHistory()

  //Add user function
  const addUser = async (e) => {
    e.preventDefault();
    
    //Form data capture
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const cc = e.target.cc.value
    const userType = e.target.userType.value

    if (email == "" || password == "" || name == "" || cc == "" || userType == "Default"){
      alert("Debe completar todos los datos antes de continuar")
    
    }else{
      //Firebase collection
      const docuRef = doc(firestore, 'users', email);

      //Existence verification and firebase add method
      const docu = await getDoc(docuRef);

      if (docu.exists()){
        alert("El usuario ya se encuentra registrado, no es posible crear un nuevo registro con el mismo email")
        history.goBack();

      }else{
        //Create user account with email and password
        app.auth().createUserWithEmailAndPassword(email,password)
        //Create user register
        setDoc(docuRef,{name:name, cc:cc, userType:userType, email:email}).then(()=>{
          alert("Registro exitoso")
          history.goBack();
        })
        .catch(()=>{
          alert("Ocurrió un problema con el registro")
        }) 
      }
    }
  }
    
    
  return(
    <div className="general">
      <div className="supView">
        <h1 className="statText"> Añadir usuario </h1>
        <button className="goBackButton" onClick ={history.goBack}> Regresar </button>
      </div>


      <div className='register-container'>

        <form onSubmit={addUser}>

          <div className="item-container">

            <div className="vertInput">
              <label htmlFor="name">Nombre</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Ingrese el nombre"/>
            </div>

            <div className="vertInput">
              <label htmlFor="cc">Identificación</label>
                <input 
                  id="cc"
                  type="number" 
                  placeholder="Ingrese el número de cc"/>
            </div>
              
            <div className="vertInput">
              <label htmlFor="userType">Rol</label>
                <select id="userType">
                  <option value = "Default">Elija una opción</option>
                  <option value = "Admin">Administrador</option>
                  <option value = "Driver">Conductor</option>
                </select>
            </div>

            <div className="vertInput">
            <label htmlFor="email">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="Ingrese el email"/>
            </div>

            <div className="vertInput">
            <label htmlFor="password">Contraseña</label>
              <input 
                id="password"
                type="password" 
                placeholder="Ingrese la contraseña"/>
            </div>
          </div>
            
            <button className='register-button' type="submit">Añadir usuario</button>

        </form> 

      </div>
    </div>
  )        
}

export default AddUser