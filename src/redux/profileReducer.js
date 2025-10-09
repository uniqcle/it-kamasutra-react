import { UsersAPI, ProfileAPI } from "../api/users-api";
import { setAuthUserData } from "../redux/authReducer";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST = "UPDATE_NEW_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {
            id: 1,
            message: "Hi, how are you?",
            likes: 12,
        },
        {
            id: 2,
            message: "It's my first project",
            likes: 11,
        },
    ],
    areaText: "some text for area...",
    profile: null,
    status: "sfd111",
};

const profileReducer = (state = initialState, action) => {
    // { type: 'ADD_POST' }
    switch (action.type) {
        case ADD_POST: {
            // let newPost = {
            //     id: 5,
            //     message: state.areaText,
            //     likes: 10,
            // };
            // let stateCopy = { ...state };
            // stateCopy.posts = [...state.posts];

            // stateCopy.posts.push(newPost);
            // stateCopy.areaText = "";
            // return stateCopy;

            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: Math.random(),
                        message: state.areaText,
                        likes: 10,
                    },
                ],
                areaText: "",
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                areaText: action.newText,
            };

            // let stateCopy = { ...state };
            // stateCopy.areaText = action.newText;
            // return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
});

export const getStatusThunkCreator = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then((response) => {
        dispatch(setStatus(response.data));
    });
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(response.data));
        }
    });
};

export const authProfileThunkCreator = () => {
    return (dispatch) => {
        UsersAPI.authProfile().then((data) => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    };
};

export const getProfileThunkCreateor = (userId) => {
    return (dispatch) => {
        UsersAPI.getProfileByUserId(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};

export { profileReducer };
