import React, { useEffect, useState } from "react";
import { app } from "./fb";
import './stylesheets/Panel.css';
import { Link } from "react-router-dom";
import { db } from './fb';
import 'firebase/firestore';
import { UserComponent } from './UserComponent.js';
import { VehicleComponent } from './VehicleComponent.js';

const userInfo = db.collection('users');
const vehicleInfo = db.collection('vehicles');

const Panel = () => {
  const [users, setUsers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    //real time update
    const unsubscribe = userInfo.onSnapshot((querySnapshot) => {
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(users);
    });

    const unsubscribeVehicles = vehicleInfo.onSnapshot((querySnapshot) => {
      const vehicles = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVehicles(vehicles);
    });
    // Devuelve una función de limpieza que se ejecuta cuando el componente se desmonta
    return () => unsubscribe();
    return () => unsubscribeVehicles();
  }, []);

  return (
    <div className="general">

      <div className="supView">
          <h1 className="statText"> Seguimiento vehicular </h1>
          <a href="/">
            <button className="signOutButton"> Regresar </button>
          </a>
      </div>

      <div className="itemContainer">

            <a href="/panel/modify_user">
                  <button className="addButton"> Modificar usuario </button>
            </a>

            <a href="/panel/add_vehicle">
                  <button className="addButton"> Añadir vehículo </button>
            </a>

            <a href="/panel/modify_vehicle">
                  <button className="addButton"> Modificar vehículo </button>
            </a>

            

          </div>

      
      <h2>Usuarios registrados</h2>

      <div className="titles">
        <p>Nombre</p>
        <p>Identificación</p>
        <p>Dirección de correo</p>
        <p>Tipo de usuario</p>
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

      <h2>Vehículos registrados</h2>
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
    </div>
  );
}

export default Panel;
