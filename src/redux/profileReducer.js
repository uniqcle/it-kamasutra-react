export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST = "UPDATE_NEW_POST_TEXT";

let initialState =  {
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
        }

const profileReducer = (state = initialState, action) => {
    // { type: 'ADD_POST' }
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.areaText,
                likes: 10,
            };
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];

            stateCopy.posts.push(newPost);
            stateCopy.areaText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST: {
            let stateCopy = { ...state };
            stateCopy.areaText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export { profileReducer }; 