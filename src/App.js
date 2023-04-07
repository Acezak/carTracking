import React, { useEffect } from "react";
import {app} from "./fb";
import Home from "./Home";
import Login from "./Login";

function App() {

  const [user, setUser] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
  }, []);
  
  return <> {user ? <Home /> : <Login setUser = {setUser} />} </>;
}

export default App;
