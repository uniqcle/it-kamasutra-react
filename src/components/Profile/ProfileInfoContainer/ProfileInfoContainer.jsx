import React from "react";
import { connect } from "react-redux";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import {
    addPostActionCreate,
    updateNewPostTextActionCreator,
} from "../../../redux/state";

// const ProfileInfoContainer = (props) => {
//     let { dispatch, areaText } = props;

//     let addNewPost = () => {
//         dispatch(addPostActionCreate());
//     };

//     let changeAreaText = (text) => {
//         dispatch(updateNewPostTextActionCreator(text));
//     };

//     return (
//         <div>
//             <ProfileInfo
//                 addNewPost={addNewPost}
//                 changeAreaText={changeAreaText}
//                 areaText={areaText}
//             />
//         </div>
//     );
// };

const mapStateToProps = (state) => {
    return {
        areaText: state.profilePage.areaText,
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreate());
        },
        changeAreaText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    };
};

const ProfileInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileInfo);

export default ProfileInfoContainer;
