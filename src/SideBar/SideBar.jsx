import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        };
        getCats();
    }, [])
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className="sideBarImg" src="https://i.ibb.co/3YqdkzH/profile.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, harum repellendus.</p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sideBarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocialIcon">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-instagram-square"></i>
                    <i className="sideBarIcon fab fa-pinterest-square"></i>
                    <i className="sideBarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBar;