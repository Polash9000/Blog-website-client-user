import "./SideBar.css";

const SideBar = () => {
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
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Movie</li>
                    <li className="sideBarListItem">Travel</li>
                    <li className="sideBarListItem">Sports</li>
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