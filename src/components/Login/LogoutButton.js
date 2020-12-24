import React from "react";
import {useAuth} from "./useAuth";

const LogoutButton = () => {
    const {onLogout, isAuth} = useAuth();
    return isAuth ? (
        <button onClick={onLogout}>
            Logout
        </button>
    ) : null
}

export default LogoutButton;