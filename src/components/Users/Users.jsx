import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import avatar from "../../assets/images/user.png";

class Users extends React.Component {
    unFollowClick = (userId) => {
        this.props.follow(userId);
    };

    followClick = (userId) => {
        this.props.unfollow(userId);
    };

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <>
                <button onClick={this.getUsers}>Get Users</button>
                <div className={styles.users}>
                    {this.props.users.map((u) => (
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
                                        <button
                                            onClick={() =>
                                                this.unFollowClick(u.id)
                                            }
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                this.followClick(u.id)
                                            }
                                        >
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
    }
}

export default Users;
