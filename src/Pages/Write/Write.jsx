import "./Write.css";

const Write = () => {
    return (
        <div className="write">
            <img src="https://i.ibb.co/xmbQqb1/post2.jpg" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormSet">
                    <label htmlFor="fileInput">
                        <i title="Choose a file" className="writeFormSetIcon fas fa-plus"></i>
                    </label>
                    <input className="writeFileInputField" type="file" id="fileInput" />
                    <input type="text" placeholder="Title" className="writeInputTextField" autoFocus={true} />
                </div>
                <div className="writeFormSet">
                    <textarea placeholder="Put your content here..." type="text" className="writeInputTextField writeContent"></textarea>
                </div>
                <button className="contentPublish">Publish</button>
            </form>
        </div>
    );
};

export default Write;