import React, { useEffect } from "react";
import {app} from "./fb";
import Home from "./Home";
import Login from "./Login";
import './stylesheets/App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Map from './Map'
import Panel from './Panel'

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
          <Route exact path='/map/' render ={ ()  => { return user ? <Map />: <Login /> }} />
          <Route exact path='/panel/' render ={ ()  => { return user ? <Panel />: <Login /> }} />
        </Switch>
        
      </BrowserRouter>
      

    </div>
  )
  
}

export default App;
