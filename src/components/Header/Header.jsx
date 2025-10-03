import classes from './Header.module.css'
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=d3b5103d0abfc2290b94707a0e7203c61ec26854-5897285-images-thumbs&n=13://yandex.ru/images/search?pos=1&from=tabbar&img_url=https%3A%2F%2Fsteamuserimages-a.akamaihd.net%2Fugc%2F2296339440150148468%2FD1E7596B00EC41623A8121E5AEF8C96776B1AED3%2F%3Fimw%3D512%26amp%3Bimh%3D400%26amp%3Bima%3Dfit%26amp%3Bimpolicy%3DLetterbox%26amp%3Bimcolor%3D%2523000000%26amp%3Bletterbox%3Dtrue&text=logo&rpt=simage&lr=65"
                alt=""
            />

            <div className={classes.login_block}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )}
            </div>
        </div>
    );
};

export default Header; 