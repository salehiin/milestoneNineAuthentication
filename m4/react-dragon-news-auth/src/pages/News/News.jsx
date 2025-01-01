import { useLoaderData, useParams } from "react-router-dom";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    // console.log(news)
    return (
        <div>
            <Header/>
            <BreakingNews />
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* MAIN NEWS CONTAINER */}
                <div className="md:col-span-3">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                    {/* {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    } */}
                </div>
                {/* Right Side */}
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;