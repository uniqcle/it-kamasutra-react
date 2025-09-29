import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <ul>
                <li className={`${classes.item}`}>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                    >
                        Profile
                    </NavLink>
                </li>
                <li className={`${classes.item}`}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                        to="/dialogs"
                    >
                        Dialogs
                    </NavLink>
                </li>
                <li className={`${classes.item}`}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                        to="/users"
                    >
                        Users
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/news"
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                    >
                        News
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/music"
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                    >
                        Music
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? classes.navActiveLink : ""
                        }
                    >
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
