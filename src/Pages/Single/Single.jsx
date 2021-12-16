import SideBar from "../../SideBar/SideBar";
import SinglePost from "../../SinglePost/SinglePost";
import "./Single.css";

const Single = () => {
    return (
        <div className="single">
            <SinglePost></SinglePost>
            <SideBar></SideBar>
        </div>
    );
};

export default Single;