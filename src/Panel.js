import React, { useEffect, useState } from "react";
import {Link, useHistory } from "react-router-dom";
import { db } from './fb';
import 'firebase/firestore';
import { UserComponent } from './UserComponent.js';
import { VehicleComponent } from './VehicleComponent.js';

//Style
import './stylesheets/Panel.css';

//User firebase collection
const userInfo = db.collection('users');
//vehicles firebase collection
const vehicleInfo = db.collection('vehicles');

const Panel = () => {

  //History router
  const history = useHistory()

  //States to collect
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    //real time update for users
    const unsubscribe = userInfo.onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(users);
    });

    // real time update for vehicles
    const unsubscribeVehicles = vehicleInfo.onSnapshot((querySnapshot) => {
      const vehicles = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVehicles(vehicles);
    });

    // Clean removed data
    return () => unsubscribe();
    return () => unsubscribeVehicles();
  }, []);

  return (
    <div className="general">

      <div className="supView">
          <h1 className="statText"> Panel de administración </h1>
          <button className="signOutButton" onClick ={history.goBack}> Regresar </button>
          
      </div>
    
      <div className="itemContainer">
      
          <h2 className="panelTitle">USUARIOS REGISTRADOS</h2>

          <div className="titles">
            <h3 className="subt">Nombre</h3>
            <h3 className="subt">Identificación</h3>
            <h3 className="subt">Dirección de correo</h3>
            <h3 className="subt">Tipo de usuario</h3>
            <h3 className="subt">Acciones</h3>
          </div>

          {users.map(user => (
            <UserComponent
              key={user.id}
              id={user.cc}
              name={user.name}
              email={user.email}
              type={user.userType}
            />
          ))}

          <Link to="/panel/add_user">
            <button className="addButton"> Añadir usuario </button>
          </Link>

          <div className="divider"/>

          <h2 className="panelTitle">VEHÍCULOS REGISTRADOS</h2>

          <div className="titles">
            <h3 className="subtv">Placa</h3>
            <h3 className="subtv">Marca</h3>
            <h3 className="subtv">Modelo</h3>
            <h3 className="subtv">Estado</h3>
            <h3 className="subtv">Conductor</h3>
            <h3 className="subtv">Acciones</h3>
          </div>

          {vehicles.map(vehicle => (
            <VehicleComponent
              key={vehicle.id}
              brand={vehicle.brand}
              driverId={vehicle.driverId}
              model={vehicle.model}
              plate={vehicle.plate}
              status={vehicle.status}
            />
          ))}

          <Link to="/panel/add_vehicle">
            <button className="addButton"> Añadir vehículo </button>
          </Link>
      </div>
    </div>
  );
}

export default Panel;
