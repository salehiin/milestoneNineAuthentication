import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <h5>Journalism Witout Fear or Favour</h5>
            <h4 className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</h4>
        </div>
    );
};

export default Header;