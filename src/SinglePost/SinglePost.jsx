import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import "./SinglePost.css";

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMOde] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = axios.get("/posts/" + path)
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        }
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/post/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        }
        catch (err) {

        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/post/${post._id}`, {
                username: user.username,
                title,
                description,
            });
            setUpdateMOde(false)
        }
        catch (err) {

        }
    };
    return (
        <div className="singlePost">
            <div className="singlePostUi">
                {post.picture && (
                    <img src={PF + post.picture} alt="" className="singlePostUiImg" />
                )}
                {updateMode ? (
                    <input type="text" value={title} className="singlePostUiTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} />
                ) : (
                    <h1 className="singlePostUiTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostUiEdit">
                                <i className="singlePostUiIcon far fa-edit" onClick={() => setUpdateMOde(true)}></i>
                                <i className="singlePostUiIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singlePostUiInfo">
                    <span className="singlePostUiAuthor">Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostUiDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea className="singlePostUiDescriptionInput" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                ) : (
                    <p className="singlePostUiDetails">{description}</p>
                )}
                {updateMode && (
                    <button className="singlePostUiUpdateButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div >
    );
};

export default SinglePost;