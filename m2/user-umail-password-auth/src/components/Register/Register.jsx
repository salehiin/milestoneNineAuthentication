import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { RxEyeOpen, RxEyeNone } from "react-icons/rx";
import { Link } from "react-router-dom";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    // password show - hide
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        // console.log(email, password, accepted)

        // reset error
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have one uppercase chracter')
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions!')
            return;
        }


        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully.')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="my-4 w-full py-2 rounded-md" type="email" name="email" placeholder="Email Address" id="" required />
                    <br />
                    <div className="mb-4 relative">
                        <input
                            className="w-full py-2 rounded-md"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <RxEyeNone></RxEyeNone> : <RxEyeOpen></RxEyeOpen>
                            }
                        </span>
                    </div>
                    <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary w-full" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-700">{success}</p>
                }
                <p>Already have an account? Please <Link to="/login">Login</Link> </p>
            </div>
        </div>
    );
};
export default Register;