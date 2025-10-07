import { UsersAPI } from "../api/users-api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PATE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW_PROGRESS = "TOGGLE_IS_FOLLOW_PROGRESS";

let initialState = {
    users: [],
    currentUser: "",
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: [32637],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true,
                        };
                    }
                    return u;
                }),
            };

        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }

        case TOGGLE_IS_FOLLOW_PROGRESS: {
            return {
                ...state,
                followInProgress: action.followInProgress
                    ? [...state.followInProgress, action.userId]
                    : [
                          state.followInProgress.filter(
                              (id) => id !== action.userId
                          ),
                      ],
            };
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unFollowAC = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users,
});

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});

export const setTotalUsersCountAC = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});

export const toggleFollowInProgressAC = (followInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOW_PROGRESS,
    followInProgress,
    userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true));

        UsersAPI.getUsers(currentPage, (pageSize = 10)).then((data) => {
            dispatch(toggleIsFetchingAC(false));
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
        });
    };
};

export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(true, userId));

        UsersAPI.unFollowUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId));
            }
            dispatch(toggleFollowInProgressAC(false, userId));
        });
    };
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(true, userId));

        UsersAPI.followUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(userId));
            }
            dispatch(toggleFollowInProgressAC(false, userId));
        });
    };
};

export default userReducer;
