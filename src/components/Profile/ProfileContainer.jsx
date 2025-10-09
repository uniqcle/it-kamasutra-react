import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import {
    setUserProfile,
    getStatusThunkCreator,
    updateStatusThunkCreator,
    getProfileThunkCreateor,
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function withRouter(Children) {
    return (props) => {
        const match = {
            params: useParams(),
        };
        return <Children {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 32637; //Пишем Ваш id
        }

        // axios
        //     .get(
        //         `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        //     )
        //     .then((response) => {
        //         this.props.setUserProfile(response.data);

        //         // this.props.toggleIsFetching(false);
        //         // this.props.setUsers(response.data.items);
        //         // this.props.setTotalUsersCount(response.data.totalCount);
        //     });

        this.props.getProfileThunkCreateor(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

// let AuthRedirectComponent = (props) => {
//     if (props.isAuth === false) return <Navigate to="/login" />;
//     return <ProfileContainer {...props} />;
// };

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

// export default connect(mapStateToProps, {
//     setUserProfile: setUserProfile,
//     getProfileThunkCreateor: getProfileThunkCreateor,
// })(WithUrlDataContainerComponent);

/// аналогичная запись. цепочка вызовов hoc
export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUserProfile: setUserProfile,
        getProfileThunkCreateor: getProfileThunkCreateor,
        getProfileStatus: getStatusThunkCreator,
        updateProfileStatus: updateStatusThunkCreator,
    })
)(ProfileContainer);
