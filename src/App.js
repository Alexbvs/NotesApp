import React from "react";
import LoginContainer from "./components/LoginContainer";
import {useDispatch, useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {logoutFailed, logoutSuccess, setLogout} from "./redux/actions/authActions";

function App() {

    const dispatch = useDispatch();

    const { errorMessage } = useSelector(({ auth }) => auth);

//will be passed to the home page
    const submitLogout = () => {
        dispatch(setLogout());
        localStorage.getItem("user");
        if (localStorage.user === 0) {
            dispatch(logoutSuccess());
        } else {
            dispatch(logoutFailed());
            console.log(errorMessage);
        }
    };

    return (
        <div className="App">
            <LoginContainer />
        </div>
    );
}

export default App;
