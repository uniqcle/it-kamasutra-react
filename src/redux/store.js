import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogReducer } from "./dialogReducer";
import userReducer, { getUsersThunkCreator } from "./userReducer";
import authReducer from "./authReducer";
import { thunk } from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
