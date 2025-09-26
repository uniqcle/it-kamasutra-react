export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: Math.random(),
                        message: state.areaText,
                    },
                ],
                areaText: "",
            };

            // stateCopy.messages.push({
            //     id: Math.random(),
            //     message: state.areaText,
            // });
        }
        case UPDATE_MESSAGE: {
            return {
                ...state,
                areaText: action.areaText,
            };
        }
        default:
            return state;
    }
};

export { dialogReducer };
