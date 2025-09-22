/*
let rerenderEntireTree = () => {
    console.log("State was changed...");
};

let state = {
    profilePage: {
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
    },
    dialogPage: {
        dialogs: [
            { id: 1, name: "Кирилл" },
            { id: 2, name: "Мария" },
            { id: 3, name: "Алина" },
            { id: 4, name: "Ксения" },
            { id: 5, name: "Сергей" },
            { id: 6, name: "Ирина" },
            { id: 7, name: "Михаил" },
            { id: 8, name: "Борис" },
            { id: 9, name: "Никита" },
        ],
        messages: [
            {
                id: 1,
                message: "Hi",
            },
            {
                id: 2,
                message: "How are you?",
            },
            {
                id: 3,
                message: "I'm fine",
            },
            {
                id: 4,
                message: "thanks",
            },
        ],
    },
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.areaText,
        likes: 10,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.areaText = "";
    rerenderEntireTree(state);
};

export const updateTextArea = (newText) => {
    state.profilePage.areaText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

//export default state;
*/

import { ADD_MESSAGE, UPDATE_MESSAGE, dialogReducer } from "./dialogReducer";
import { ADD_POST, UPDATE_NEW_POST, profileReducer } from "./profileReducer";

/////////////////////////////////////////////

// const ADD_POST = "ADD_POST";
// const UPDATE_NEW_POST = "UPDATE_NEW_POST_TEXT";

// const ADD_MESSAGE = "ADD_MESSAGE";
// const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            dialogs: [
                { id: 1, name: "Кирилл" },
                { id: 2, name: "Мария" },
                { id: 3, name: "Алина" },
                { id: 4, name: "Ксения" },
                { id: 5, name: "Сергей" },
                { id: 6, name: "Ирина" },
                { id: 7, name: "Михаил" },
                { id: 8, name: "Борис" },
                { id: 9, name: "Никита" },
            ],
            messages: [
                {
                    id: 1,
                    message: "Hi",
                },
                {
                    id: 2,
                    message: "How are you?",
                },
                {
                    id: 3,
                    message: "I'm fine",
                },
                {
                    id: 4,
                    message: "thanks",
                },
            ],
            areaText: "text for dialog page...",
        },
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("No subscribers");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {},

    // updateTextArea(newText) {},

    // dispatch(action) {
    //     // { type: 'ADD_POST' }
    //     if (action.type === ADD_POST) {
    //         let newPost = {
    //             id: 5,
    //             message: this._state.profilePage.areaText,
    //             likes: 10,
    //         };
    //         this._state.profilePage.posts.push(newPost);
    //         this._state.profilePage.areaText = "";
    //         this._callSubscriber(this._state);
    //     } else if (action.type === UPDATE_NEW_POST) {
    //         this._state.profilePage.areaText = action.newText;
    //         this._callSubscriber(this._state);
    //     } else if (action.type === ADD_MESSAGE) {
    //         this._state.dialogPage.messages.push({
    //             id: Math.random(),
    //             message: this._state.dialogPage.areaText,
    //         });
    //         this._state.dialogPage.areaText = "";

    //         this._callSubscriber(this._state);
    //     } else if (action.type === UPDATE_MESSAGE) {
    //         this._state.dialogPage.areaText = action.areaText;
    //         this._callSubscriber(this._state);
    //     }
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    },
};

export const addPostActionCreate = () => ({
    type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text,
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
});

export const updateMessageActionCreator = (areaText) => ({
    type: UPDATE_MESSAGE,
    areaText: areaText,
});



export default store;
