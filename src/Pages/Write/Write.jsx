import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import "./Write.css";

const Write = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.picture = filename;
            try {
                await axios.post("/upload", data);
            }
            catch (err) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        }
        catch (err) {

        }
    }
    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormSet">
                    <label htmlFor="fileInput">
                        <i title="Choose a file" className="writeFormSetIcon fas fa-plus"></i>
                    </label>
                    <input className="writeFileInputField" type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title" className="writeInputTextField" autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="writeFormSet">
                    <textarea placeholder="Put your content here..." type="text" className="writeInputTextField writeContent" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button className="contentPublish" type="submit">Publish</button>
            </form>
        </div>
    );
};

export default Write;