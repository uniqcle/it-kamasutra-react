import ProfileInfoContainer from "./ProfileInfoContainer/ProfileInfoContainer";

 import classes from "./Profile.module.css";

 const Profile = (props) => {
     // const { posts, areaText } = props;
     // const { dispatch } = props;

     return (
         <div className={classes.content}>
             <ProfileInfoContainer />
         </div>
     );
 };

export default Profile;
