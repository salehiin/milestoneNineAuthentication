

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="my-4 w-3/4 py-2 rounded-md" type="email" name="email" placeholder="Email Address" id="" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 rounded-md" type="password" name="password" placeholder="Password" id="" />
                    <br />
                    <input className="btn btn-secondary w-3/4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};
export default Register;