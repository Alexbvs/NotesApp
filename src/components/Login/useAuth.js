import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, logoutRequest} from "../../redux/actions/authActions";

export function useAuth() {
    const dispatch = useDispatch();
    const { authData, isAuth, isLoading, errorMessage } = useSelector(({ auth }) => auth);

    const onLogin = useCallback((authData) => dispatch(loginRequest(authData)), [dispatch]);
    const onLogout = useCallback(() => dispatch(logoutRequest()), [dispatch]);

    return {
        authData,
        isAuth,
        isLoading,
        errorMessage,
        onLogout,
        onLogin
    }
}