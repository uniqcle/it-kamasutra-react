import ProfileInfoContainer from "./ProfileInfoContainer/ProfileInfoContainer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import classes from "./Profile.module.css";

const Profile = (props) => {
    // const { posts, areaText } = props;
    // const { dispatch } = props;

    return (
        <div className={classes.content}>
            <ProfileHeader profile={props.profile} />
            <ProfileInfoContainer />
        </div>
    );
};

export default Profile;
