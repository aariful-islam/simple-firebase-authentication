import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const provider =new GoogleAuthProvider();
  const [user, setuser]=useState({})

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(res=>{
      setuser(res.user)
      console.log(res.user)

    })
    .catch(error=>{
      console.log(error)
    })
      
  }
   const handleSignout=()=>{
     signOut(auth)
     .then( ()=>{
       setuser({})
     })
   }
  return (
    
    <div className="App">
      <button onClick={handleGoogleSignIn}>sign in</button>
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <button onClick={handleSignout}>Sign out</button>
      
     
    </div>
  );
}

export default App;
