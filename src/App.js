import React, { useEffect } from "react";
import {app} from "./fb";
import Home from "./Home";
import Login from "./Login";
import './stylesheets/App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Maps from './Map'
import Panel from './Panel'
import AddUser from "./AddUser";

function App() {

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path ='/' render ={ ()  => { return user ? <Home /> : <Login setUser = {setUser} /> }} />
          <Route exact path='/map/' render ={ ()  => { return user ? <Maps />: <Login /> }} />
          <Route exact path='/panel/' render ={ ()  => { return user ? <Panel />: <Login /> }} />
          <Route exact path='/panel/add_user' render ={ ()  => { return user ? <AddUser />: <Login /> }} />
        </Switch>
        
      </BrowserRouter>
      

    </div>
  )
  
}

export default App;
