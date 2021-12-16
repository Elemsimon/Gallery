import React,{useState} from 'react';
import {db, auth} from '../firebase/config';

const Title = ({handleLogout}) => {
  const [user, setUser] = useState("")
  const docRef = db.collection("users").doc(auth.currentUser.uid);

  docRef.get().then((doc) => {
      if (doc.exists) {
          setUser(doc.data());
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error );
  });
  
  return (
    <div className="title">
      <nav>
        <h1 className="lift">FireGram</h1>
        <div className="right">
          <h6>{user.fname} {user.lname}</h6>
          <button onClick={handleLogout} className='logout'>Logout</button>
        </div>
      </nav>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;