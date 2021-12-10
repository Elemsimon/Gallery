import React, { useState, useEffect } from 'react';
import Home from './comps/Home';
import Login from './comps/Login';
import {config} from './firebase/config';




function App() {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const [fname  , setFname] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  
  const handleLogout = () =>{
    config.auth().signOut();
  };

  const authListener = () => {
    config.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  },
   []);


  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} user = {user} />
      ):(
        <Login 
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        clearErrors= {clearErrors}
        setEmailError={setEmailError}
        setPasswordError={setPasswordError}
        setFname={setFname}
      />
      )}
      
    
    </div>
  );
}

export default App;