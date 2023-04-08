import React, { useEffect } from "react";
import {app} from "./fb";
import Home from "./Home";
import Login from "./Login";
import './stylesheets/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  
  return (
  <div className="App">
    <> {user ? <Home /> : <Login setUser = {setUser} />} </>

    <>
      <Router>
        <Switch>
          <Route path='/map' component={Map}></Route>
          <Route path='/panel' component={Panel}></Route>
        </Switch>
      </Router>
    </>
    
  </div>
  )
  
}

export default App;
