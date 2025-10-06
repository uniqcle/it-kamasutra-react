import React from "react";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    toggleIsFetchingAC,
    toggleFollowInProgressAC,
} from "../../redux/userReducer";

import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI } from "../../api/users-api";

let mapStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followInProgress: state.userPage.followInProgress,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetchingAC: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     };
// };

class UsersAPIComponent extends React.Component {
    unFollowClick = (userId) => {
        try {
            this.props.toggleFollowInProgress(true, userId);

            UsersAPI.unFollowUser(userId).then((data) => {
                if (data.resultCode === 0) {
                    this.props.follow(userId);
                }
                this.props.toggleFollowInProgress(false, userId);
            });
        } catch (e) {
            console.info(e);
        }
    };

    followClick = (userId) => {
        this.props.toggleFollowInProgress(true, userId);

        UsersAPI.followUser(userId).then((data) => {
            if (data.resultCode === 0) {
                this.props.unfollow(userId);
            }
            this.props.toggleFollowInProgress(false, userId);
        });
    };

    componentDidMount() {
        this.props.toggleIsFetching(true);

        UsersAPI.getUsers(
            this.props.currentPage,
            (this.props.pageSize = 10)
        ).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toggleIsFetching(true);

        UsersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        isFetching={this.props.isFetching}
                        followInProgress={this.props.followInProgress}
                        unFollowClick={this.unFollowClick}
                        followClick={this.followClick}
                        onPageChanged={this.onPageChanged}
                    />
                )}
            </>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
// либо 2-й вариант. Сразу закидываем объект коллбэков. connect сам сделает dispatch

// данные передаются в UsersAPIComponent
export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowInProgress: toggleFollowInProgressAC,
})(UsersAPIComponent);
