import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    let newPostArea = React.createRef();
    let { addPost, areaText, updateTextArea } = props;

    let addNewPost = () => {
        addPost();
    };

    let changeAreaText = () => {
        let text = newPostArea.current.value;
        updateTextArea(text);
        console.log(text);
    };

    return (
        <div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=ea37c708c5ce62c18b1bdd46eee2f008c6dce42c-4546260-images-thumbs&n=133"
                    alt=""
                />
            </div>
            <div className={classes.desc}>ava + description </div>

            <div>
                <textarea
                    name=""
                    rows="8"
                    cols="10"
                    ref={newPostArea}
                    value={areaText}
                    onChange={changeAreaText}
                />
            </div>
            <div>
                <button onClick={addNewPost}>add post</button>
            </div>
        </div>
    );
};

export default ProfileInfo;
