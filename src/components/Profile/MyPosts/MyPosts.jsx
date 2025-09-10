import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default MyPosts;
