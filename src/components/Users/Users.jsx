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
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);

        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        // количество страниц     общее кол-во / размер страницы
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

        // массив страниц
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                <div className={styles.user_page}>
                    <div className={styles.pagination}>
                        {pages.map((p) => {
                            return (
                                <span
                                    className={
                                        this.props.currentPage === p
                                            ? styles.selected_page
                                            : ""
                                    }
                                    onClick={(e) => this.onPageChanged(p)}
                                >
                                    {p}
                                </span>
                            );
                        })}
                    </div>
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
                </div>
            </>
        );
    }
}

export default Users;
