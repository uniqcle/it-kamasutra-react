import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import StoreContext from "./StoreContext";

// import state, { subscribe } from "./redux/state";
// import { addPost, updateTextArea } from "./redux/state";

//import store from "./redux/state";
import store from "./redux/store";

// export let rerenderEntireTree = (state) => {
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <App
//                     state={state}
//                     addPost={addPost}
//                     updateTextArea={updateTextArea}
//                 />
//             </BrowserRouter>
//         </React.StrictMode>
//     );
// };

// rerenderEntireTree(state);

// subscribe(rerenderEntireTree);

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
    //debugger;
    root.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </StoreContext.Provider>
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);

store.subscribe(() => {
    let state = store.getState(); 
    rerenderEntireTree(state)
});
