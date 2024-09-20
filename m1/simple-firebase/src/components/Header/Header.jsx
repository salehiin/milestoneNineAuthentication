import { Link } from "react-router-dom";



const Header = () => {
    return(
        <div>
            <div>
            <Link className="mr-2" to="/">Home</Link>
            <Link to="/login">Login</Link>
            </div>
        </div>
    );
};
export default Header;