import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
import {
    setUserProfile,
    getProfileThunkCreateor,
} from "../../redux/profileReducer";

function withRouter(Children) {
    return (props) => {
        const match = {
            params: useParams(),
        };
        return <Children {...props} match={match} />;
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 26923; //Пишем Ваш id
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
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile: setUserProfile,
    getProfileThunkCreateor: getProfileThunkCreateor,
})(WithUrlDataContainerComponent);
