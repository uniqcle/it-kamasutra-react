import styles from "./Users.module.css";
import avatar from "../../assets/images/user.png";

const Users = (props) => {
    // количество страниц     общее кол-во / размер страницы
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                                    props.currentPage === p
                                        ? styles.selected_page
                                        : ""
                                }
                                onClick={(e) => props.onPageChanged(p)}
                            >
                                {p}
                            </span>
                        );
                    })}
                </div>
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
                                        <button
                                            onClick={() =>
                                                props.unFollowClick(u.id)
                                            }
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                props.followClick(u.id)
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
};

export default Users;
