import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { RxEyeOpen, RxEyeNone } from "react-icons/rx";


const HeroRegister = () => {
    const [heroRegisterError, setHeroRegisterError] = useState('');
    const [heroSuccess, setHeroSuccess] = useState('');
    const [heroShowPassword, setHeroShowPassword] = useState(false);

    const handleHeroRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted)

        setHeroRegisterError('');
        setHeroSuccess('');

        if(password.length < 6){
            setHeroRegisterError('Password should be at least 6 characters.')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setHeroRegisterError('Your password should have one uppercase chracter')
            return;
        }
        else if(!/[a-z]/.test(password)){
            setHeroRegisterError('Your password should have one lowercase chracter')
            return;
        }
        else if(!/[0-9]/.test(password)){
            setHeroRegisterError('Your password should have one number')
            return;
        }
        else if(!/[^A-Za-z0-9_]/.test(password)){
            setHeroRegisterError('Your password should have special charecter')
            return;
        }
        else if(!accepted){
            setHeroRegisterError('Please accept our terms and conditions!')
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setHeroSuccess('User Created Successfully.')
        })
        .catch(error =>{
            console.error(error);
            setHeroRegisterError(error.message);
        })
        
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleHeroRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input 
                                    type={heroShowPassword ? "text" : "password"} 
                                    placeholder="password" 
                                    name="password" 
                                    className="input input-bordered" 
                                    required />
                                <span onClick={() =>setHeroShowPassword(!heroShowPassword)}>
                                    {
                                        heroShowPassword ? <RxEyeNone></RxEyeNone> : <RxEyeOpen></RxEyeOpen>
                                    }
                                </span>    
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary w-3/4" type="submit" value="Register" />
                            </div>
                        </form>
                        {
                            heroRegisterError && <p className="text-red-700">{heroRegisterError}</p>
                        }
                        {
                            heroSuccess && <p className="text-green-700">{heroSuccess}</p>
                        }
                    </div>
                </div>
            </div>>
        </div>
    )
};

export default HeroRegister;