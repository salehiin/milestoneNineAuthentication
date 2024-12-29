import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-1">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={150}>
                <Link className="mr-6" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore. . . . . .</Link>
                <Link className="mr-6" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore. . . . . .</Link>
                <Link className="mr-6" to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore. . . . . .</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;