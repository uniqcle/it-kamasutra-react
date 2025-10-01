import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data);

                // this.props.toggleIsFetching(false);
                // this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

	render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    setUserProfile: setUserProfile,
})(ProfileContainer);
