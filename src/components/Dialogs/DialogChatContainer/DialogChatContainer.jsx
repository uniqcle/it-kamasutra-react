import React from "react";
import { connect } from "react-redux";
import DialogChat from "../DialogChat/DialogChat";
import {
    updateMessageActionCreator,
    addMessageActionCreator,
} from "../../../redux/state";

//import StoreContext from "../../../_StoreContext";

// const DialogChatContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const { dialogPage } = store.getState();
//                 const { messages } = store.getState().dialogPage;
//                 const { dispatch } = store;

//                 const addMessage = () => {
//                     dispatch(addMessageActionCreator());
//                 };

//                 const updateMessage = (areaText) => {
//                     dispatch(updateMessageActionCreator(areaText));
//                 };

//                 return (
//                     <>
//                         <DialogChat
//                             messages={messages}
//                             addMessage={addMessage}
//                             updateMessage={updateMessage}
//                             dialogPage={dialogPage}
//                         />
//                     </>
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        areaText: state.dialogPage.areaText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessage: (areaText) => {
            dispatch(updateMessageActionCreator(areaText));
        },
    };
};

const DialogChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DialogChat); 



export default DialogChatContainer;
