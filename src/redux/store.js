import { createStore, combineReducers } from "redux";
import { profileReducer } from './profileReducer'
import { dialogReducer  } from "./dialogReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    userPage: userReducer,
});


let store = createStore(reducers); 

window.store = store; 

export default store; 