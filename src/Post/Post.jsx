import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {post.picture && (
                <img className="postImg" src={PF + post.picture} alt="" />
            )}
            <div className="postInfo">
                <div className="postCtgs">
                    {post.categories.map(c => (
                        <span className="postCtg">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link"><span className="postTitle">
                    {post.title}
                </span></Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDetails">{post.description}</p>
        </div>
    );
};

export default Post;