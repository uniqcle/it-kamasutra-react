import { Link, NavLink } from "react-router-dom";
import classes from "./DialogsList.module.css";

const DialogsList = () => {
    return (
        <>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Andrey1</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Andrey2</NavLink>
                </div>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to="/dialogs/3">Andrey3</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Andrey4</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Andrey5</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Andrey6</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/7">Andrey7</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/8">Andrey8</NavLink>
                </div>
            </div>
        </>
    );
};

export default DialogsList;
