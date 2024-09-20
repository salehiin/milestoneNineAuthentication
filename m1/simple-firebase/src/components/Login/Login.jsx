import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";
import { useState } from "react";
// import { GithubAuthProvider } from "firebase/auth";



const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    // console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvide = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message)
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvide)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        }) 
        .catch(error => {
            console.log(error)
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
            <div>
                <button onClick={handleGoogleSignIn}>Google login</button>
                <button onClick={handleGithubSignIn}>Github Login</button>
            </div>
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