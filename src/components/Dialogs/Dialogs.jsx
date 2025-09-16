import { useState } from "react";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import DialogChat from "./DialogChat/DialogChat";

const Dialogs = (props) => {
    let { dialogs, messages } = props;

    return (
        <div className={classes.dialogs}>
            <DialogsList dialogs={dialogs} />
            <DialogChat messages={messages} />
        </div>
    );
};

export default Dialogs;
