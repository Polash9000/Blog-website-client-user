import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import SideBar from "../../SideBar/SideBar";
import "./Home.css";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search)
            setPosts(res.data);
        }
        fetchPosts();
    }, [search])
    return (
        <>
            <Header></Header>
            <div className="home">
                <Posts posts={posts}></Posts>
                <SideBar></SideBar>
            </div>
        </>
    );
};

export default Home;