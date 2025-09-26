
import { followAC, setUsersAC, unFollowAC } from '../../redux/userReducer';
import Users from './Users'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
	return {
        users: state.userPage.users
    };
}

const mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		}, 
		unfollow: (userId) => {
			dispatch(unFollowAC(userId))
		}, 
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		}
	}
}

 

export default connect(mapStateToProps, mapDispatchToProps)(Users)