import { Link, NavLink } from "react-router-dom";
import classes from "./DialogsList.module.css";
import DialogItem from "../DialogItem/DialogItem";

const DialogsList = (props) => {
    const { dialogs } = props;

    const dialogsElements = dialogs.map((d) => (
        <DialogItem key={d.id} id={d.id} name={d.name} />
    ));

    return (
        <>
            <div className={classes.dialogs_items}>{dialogsElements}</div>
        </>
    );
};

export default DialogsList;
