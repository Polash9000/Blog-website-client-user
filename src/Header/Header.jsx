import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">HTML & CSS</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://i.ibb.co/GWmLN0Y/headerbanner.png" alt="" className="headerImg" />
        </div>
    );
};

export default Header;