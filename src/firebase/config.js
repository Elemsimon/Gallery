import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfBjMeoRPRXcbGgKvmG_Soj3eqXEwbz4U",
  authDomain: "sim-firegram.firebaseapp.com",
  projectId: "sim-firegram",
  storageBucket: "sim-firegram.appspot.com",
  messagingSenderId: "738870491957",
  appId: "1:738870491957:web:912fb91dba3e87949d6a7c"
};

// Initialize Firebase
const config = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, config, timestamp };
  
  export const auth = firebase.auth();
  
  export default config;