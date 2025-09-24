import { useState } from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import DialogChatContainer from "./DialogChatContainer/DialogChatContainer";

const Dialogs = (props) => {
    let { dialogs, messages, dialogPage, dispatch } = props;

    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={dialogs} />
            <DialogChatContainer
                messages={messages}
                dispatch={dispatch}
                dialogPage={dialogPage}
            />
        </div>
    );
};

export default Dialogs;
