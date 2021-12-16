import SideBar from "../../SideBar/SideBar";
import "./Settings.css";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingSection">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img src="https://i.ibb.co/H4FJSd7/post3.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Polash" />
                    <label>Email</label>
                    <input type="email" placeholder="polash@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <SideBar></SideBar>
        </div>
    );
};

export default Settings;