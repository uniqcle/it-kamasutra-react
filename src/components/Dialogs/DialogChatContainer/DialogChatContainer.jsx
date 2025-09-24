import React from "react";
import DialogChat from "../DialogChat/DialogChat";
import {
    updateMessageActionCreator,
    addMessageActionCreator,
} from "../../../redux/state";

import StoreContext from "../../../StoreContext";

const DialogChatContainer = (props) => {
	 

    return (
        <StoreContext.Consumer>
			{(store) => {
				

                const { dialogPage } = store.getState();
				const { messages }  = store.getState().dialogPage;
                const { dispatch } = store;

                const addMessage = () => {
                    dispatch(addMessageActionCreator());
                };

                const updateMessage = (areaText) => {
                    dispatch(updateMessageActionCreator(areaText));
                };

                return (
                    <>
                        <DialogChat
                            messages={messages}
                            addMessage={addMessage}
                            updateMessage={updateMessage}
                            dialogPage={dialogPage}
                        />
                    </>
                );
            }}
        </StoreContext.Consumer>
    );
};

export default DialogChatContainer;
