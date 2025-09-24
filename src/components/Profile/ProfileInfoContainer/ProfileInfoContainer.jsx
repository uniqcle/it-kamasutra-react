import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import {
    addPostActionCreate,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

const ProfileInfoContainer = (props) => {
    let { dispatch, areaText } = props;

    let addNewPost = () => {
        dispatch(addPostActionCreate());
    };

    let changeAreaText = (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div>
            <ProfileInfo
                addNewPost={addNewPost}
				changeAreaText={changeAreaText}
				areaText={areaText}
            />
        </div>
    );
};

export default ProfileInfoContainer;
