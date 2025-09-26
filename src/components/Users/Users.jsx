import styles from "./Users.module.css";

const Users = (props) => {

	if (!props.users.length === 0) {
		props.setUsers([])
	}

	const unFollowClick = (userId) => {
		props.follow(userId)
		 
	}

	const followClick = (userId) => {
		props.unfollow(userId)
	 
	}

    return (
        <>
            {" "}
            <div className={styles.users}>
                {props.users.map((u) => (
                    <div key={u.id} className={styles.user}>
                        <div className={styles.row}>
                            <div>
                                <img
                                    className={styles.photo}
                                    src={u.photo}
                                    alt=""
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button onClick={() => unFollowClick(u.id)}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button onClick={() => followClick(u.id) }>
                                        Follow
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div>Город: {u.location.city}</div>
                            <div>Страна: {u.location.country} </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;
