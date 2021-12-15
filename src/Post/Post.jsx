import "./Post.css";

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://i.ibb.co/hCgWXtB/post1.jpg" alt="" />
            <div className="postInfo">
                <div className="postCtgs">
                    <span className="postCtg">Sports</span>
                    <span className="postCtg">Movie</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDetails">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero autem maxime dicta voluptas reiciendis? Ipsum ipsa voluptatum fuga animi quis, facilis nulla odit architecto consequuntur. Veritatis natus fugit illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero autem maxime dicta voluptas reiciendis? Ipsum ipsa voluptatum fuga animi quis, facilis nulla odit architecto consequuntur. Veritatis natus fugit illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero autem maxime dicta voluptas reiciendis? Ipsum ipsa voluptatum fuga animi quis, facilis nulla odit architecto consequuntur. Veritatis natus fugit illum.</p>
        </div>
    );
};

export default Post;