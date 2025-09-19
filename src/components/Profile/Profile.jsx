import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
    const { posts, areaText } = props.profilePage;
    const { dispatch } = props;

    return (
        <div className={classes.content}>
            <ProfileInfo dispatch={dispatch} areaText={areaText} />

            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;
