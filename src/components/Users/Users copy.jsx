import styles from "./Users.module.css";
import axios from "axios";
import avatar from "../../assets/images/user.png";

const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    props.setUsers(response.data.items);
                });
        }
    };

    const unFollowClick = (userId) => {
        props.follow(userId);
    };

    const followClick = (userId) => {
        props.unfollow(userId);
    };

    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            <div className={styles.users}>
                {props.users.map((u) => (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.row}>
                            <div>
                                <img
                                    className={styles.photo}
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : avatar
                                    }
                                    alt=""
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button onClick={() => unFollowClick(u.id)}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button onClick={() => followClick(u.id)}>
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>Имя: {u.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;
