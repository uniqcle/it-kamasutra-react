import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {

	return (
		<div>
		 <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=ea37c708c5ce62c18b1bdd46eee2f008c6dce42c-4546260-images-thumbs&n=133"
                    alt=""
                />
            </div>
            <div className={classes.desc}>ava + description </div>
		</div>
	)
}

export default ProfileInfo; 