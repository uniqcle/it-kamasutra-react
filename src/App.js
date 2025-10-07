import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NotFound from "./components/NotFound/NotFound";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    // const { dialogs, messages } = props.state.dialogPage;
    // const { profilePage, dialogPage } = props.state;
    // const { dispatch } = props;

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/profile/:userId" element={<ProfileContainer />} />

                <Route path="/dialogs" element={<Dialogs />} />
                {/* <Route index element={<DialogLayout />} /> */}
                {/* <Route path=":dialogId" element={<Dialogs />} /> */}
                {/* /dialogs/1, /dialogs/2 и т.д. */}

                <Route path="/users" element={<UsersContainer />} />

                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            {/* <Profile /> */}
            {/* <Dialogs /> */}
        </div>
    );
}

export default App;
