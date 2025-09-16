import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {

    const { posts } = props;

    let postElements = posts.map((p) => (
        <Post key={p.id} message={p.message} likes={p.likes} />
    ));

    return <div className={classes.posts}>{postElements}</div>;
};

export default MyPosts;
