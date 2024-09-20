import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    // console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }
    
    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
    }

    return(
        <div>
            {   user ?
            <button onClick={handleSignOut}>Sign Out</button> :
            <button onClick={handleGoogleSignIn}>Google login</button>
            }
            {user && <div>
                <h3>User: {user?.displayName}</h3>
                <p>User: {user?.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};
export default Login;