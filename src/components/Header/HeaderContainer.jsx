import React from 'react'
import Header from "./Header";
import { connect } from "react-redux";
import { authProfileThunkCreator } from "../../redux/profileReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //         withCredentials: true,
        //     })
        //     .then((response) => {
        //         if (response.data.resultCode === 0) {
        //             let { id, login, email } = response.data.data;
        //             this.props.setAuthUserData(id, login, email);
        //         }
        //     });
        // все унесено в thunk
        this.props.authProfileThunkCreator();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {
    authProfileThunkCreator: authProfileThunkCreator,
})(HeaderContainer); 