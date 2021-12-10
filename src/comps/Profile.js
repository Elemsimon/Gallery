import React, { useState } from 'react';
import {db, auth} from '../firebase/config';

const Profile = () => {
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
        <div className="profile_container">
            <div className="tex_container">
                <h3>First Name: {user.fname}</h3><hr />
                <h3>Last Name: {user.lname}</h3><hr />
                <h3>Email: {user.email}</h3><hr />
            </div>
        </div>
    )
}

export default Profile
