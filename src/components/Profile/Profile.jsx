import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
    const { posts } = props;
    return (
        <div className={classes.content}>
            <ProfileInfo />

            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;
