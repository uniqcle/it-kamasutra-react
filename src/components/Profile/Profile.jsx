import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = (props) => {
    const { posts, areaText } = props.profilePage;
    const { addPost, updateTextArea } = props;

    return (
        <div className={classes.content}>
            <ProfileInfo
                addPost={addPost}
                areaText={areaText}
                updateTextArea={updateTextArea}
            />

            <MyPosts posts={posts} />
        </div>
    );
};

export default Profile;
