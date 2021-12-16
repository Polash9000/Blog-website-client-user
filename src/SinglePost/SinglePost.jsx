import "./SinglePost.css";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostUi">
                <img src="https://i.ibb.co/hCgWXtB/post1.jpg" alt="" className="singlePostUiImg" />
                <h1 className="singlePostUiTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostUiEdit">
                        <i className="singlePostUiIcon far fa-edit"></i>
                        <i className="singlePostUiIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostUiInfo">
                    <span className="singlePostUiAuthor">Author: <b>Polash</b></span>
                    <span className="singlePostUiDate">1 hour ago</span>
                </div>
                <p className="singlePostUiDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et corporis nisi officia hic corrupti cumque esse, alias veniam enim consequatur! Sed aut cupiditate recusandae, magnam deleniti voluptatibus fugit quo?</p>
            </div>
        </div>
    );
};

export default SinglePost;