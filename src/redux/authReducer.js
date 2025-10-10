import { authProfileThunkCreator } from "./profileReducer";
import { AuthAPI } from "../api/users-api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }

        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login) => ({
    type: SET_USER_DATA,
    data: { id, email, login },
});

export const login = (email, password, rememberMe) => (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(authProfileThunkCreator());
        }
    });
};

export const logout = () => (dispatch) => {
    AuthAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(authProfileThunkCreator(null, null, null));
        }
    });
};

export default authReducer;
