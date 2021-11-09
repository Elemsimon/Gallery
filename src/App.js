import React, { useState, useEffect } from 'react';
import Home from './comps/Home';
import Login from './comps/Login';
import Singup from './comps/Signup';
import {config} from './firebase/config';



function App() {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const [fname  , setFname] = useState("");
  const [lname , setLname] = useState("");
  const [number , setNumber] = useState("");


  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    config
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
    });
  };

  const handleSignup = () => {
    clearErrors();
    config
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
 
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
   const db = config.firestore();
   
   //Creating a basic Users by adding data to the store.
   db.collection("users").add({
       FirstName: fname,
       LastName: lname,
       Number: number,
       Email: email,
   });

  return (
    <div className="App">
      {user ? (
        <Home handleLogout={handleLogout} user = {user} />
      ):(
        <Login 
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        handleLogin = {handleLogin}
        handleSignup = {handleSignup}
        hasAccount = {hasAccount}
        setHasAccount = {setHasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
        fname = {fname}
        setFname = {setFname}
        lname = {lname}
        setLname = {setLname}
        number = {number}
        setNumber = {setNumber}
      />
      )}
      
    
    </div>
  );
}

export default App;