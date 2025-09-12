import { Link, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import DialogChat from "./DialogChat/DialogChat";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <DialogsList />
            <DialogChat />
        </div>
    );
};

export default Dialogs;
