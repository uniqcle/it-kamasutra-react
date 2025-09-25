import { createStore, combineReducers } from "redux";
import { profileReducer } from './profileReducer'
import { dialogReducer  } from "./dialogReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
});


let store = createStore(reducers); 

window.store = store; 

export default store; 