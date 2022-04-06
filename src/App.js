import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);

function App() {
  const provider =new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(res=>{
      console.log(res.user)

    })
    .catch(error=>{
      console.log(error)
    })
      
  }

  return (
    
    <div className="App">
      <button onClick={handleGoogleSignIn}>sign in</button>
      
     
    </div>
  );
}

export default App;
