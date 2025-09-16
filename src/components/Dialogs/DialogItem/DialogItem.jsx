import { Link, NavLink } from "react-router-dom";
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
    const { id, name } = props;
    let path = `/dialogs/${id}`;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};


export default DialogItem; 

