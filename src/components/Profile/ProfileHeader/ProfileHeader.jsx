import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileHeader = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=ea37c708c5ce62c18b1bdd46eee2f008c6dce42c-4546260-images-thumbs&n=133"
                    alt=""
                />
            </div>

            <ProfileStatus {...props} />

            <div>
                <h3>{props.profile.aboutMe}</h3>
            </div>
        </>
    );
};

export default ProfileHeader