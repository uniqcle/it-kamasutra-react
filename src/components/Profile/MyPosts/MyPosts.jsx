import classes from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className="posts">
            <Post message="First message" likes="10" />
            <Post message="Second message" likes="15" />
            <Post message="Third message" likes="20" />
        </div>
    );
};

export default MyPosts;
