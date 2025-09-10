import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.nav}>
            <div>Profile</div>
            <ul>
                <li className={`${classes.item} ${classes.active}`}>
                    <a>Messages</a>
                </li>
                <li className={classes.item}>
                    <a>News</a>
                </li>
                <li className={classes.item}>
                    <a>Music</a>
                </li>
                <li className={classes.item}>
                    <a>Setings</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar; 