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

/////////////////////////////////////////////

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

    addPost() {
        //debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.areaText,
            likes: 10,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.areaText = "";
        this._callSubscriber(this._state);
    },

    updateTextArea(newText) {
        this._state.profilePage.areaText = newText;
        this._callSubscriber(this._state);
    },
};

export default store;
