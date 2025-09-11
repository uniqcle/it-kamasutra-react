import classes from "./Post.module.css";

const Post = (props) => {
    console.log("test...");

    return (
        <div className={classes.item}>
            <img
                src="https://avatars.mds.yandex.net/get-yapic/40841/v4k7jopH1MHphuE5zBGDsa4fyRs-1/orig"
                alt=""
            />
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;
