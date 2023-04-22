// Libraries
import React, { useRef }from "react";
import { app } from "./fb";
import { getFirestore, doc, setDoc, getDoc } from'firebase/firestore'
import './stylesheets/AddUser.css';
import { Link } from "react-router-dom";

//Initialize firestore
const firestore = getFirestore(app)

// Component
const AddUser = (props) =>{

  // form reference
  const formRef = useRef(null);

  //Registrer function
  const submitHandler = async (e) => {

    e.preventDefault();
    
    //Register variables
    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    const cc = e.target.cc.value
    const userType = e.target.userType.value

    //reference to firebase collection for users
    const docuRef = doc(firestore, `users/${email}`);

    //existence verification
    const docu = await getDoc(docuRef);
    if (docu.exists()){
      alert("El usuario ya se encuentra registrado, no es posible crear un nuevo registro con el mismo email")
      //reset form values
      formRef.current.reset();
      
    }else{
      //Create user account with email and password
      app.auth().createUserWithEmailAndPassword(email,password)
      //Create user register
      setDoc(docuRef,{name:name, cc:cc, userType:userType, email:email}).then(()=>{
        alert("Registro exitoso")
        //reset form values
        formRef.current.reset();
      })
      .catch(()=>{
        alert("Ocurrió un problema con el registro")
        formRef.current.reset();
      }) 
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

          <form onSubmit={submitHandler} ref={formRef}>

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