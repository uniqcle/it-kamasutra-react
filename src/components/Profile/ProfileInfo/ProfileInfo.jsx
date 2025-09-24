import React from "react";
import classes from "./ProfileInfo.module.css";
 

const ProfileInfo = (props) => {
    let newPostAreaElement = React.createRef();

    let addNewPost = () => {
        props.addNewPost();
    };

    let changeAreaText = () => {
        let text = newPostAreaElement.current.value;
        props.changeAreaText(text);
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
                    ref={newPostAreaElement}
                    value={props.areaText}
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
