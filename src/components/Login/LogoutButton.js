import React from "react";
import {useAuth} from "./useAuth";
import {Button} from "react-bootstrap";

const LogoutButton = () => {
    const {onLogout, isAuth} = useAuth();
    return isAuth ? (
        <Button variant="outline-success" size="sm" onClick={onLogout}>
            Logout
        </Button>
    ) : null
}

export default LogoutButton;