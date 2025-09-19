import { useState } from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import DialogChat from "./DialogChat/DialogChat";

const Dialogs = (props) => {
    let { dialogs, messages, dialogPage, dispatch } = props;

    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={dialogs} />
            <DialogChat
                messages={messages}
                dispatch={dispatch}
                dialogPage={dialogPage}
            />
        </div>
    );
};

export default Dialogs;
