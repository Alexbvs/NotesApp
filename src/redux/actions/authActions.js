export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const setLogin = (authData) => ({
    type: SET_LOGIN,
    payload: authData,
});

export const setLogout = () => ({
    type: SET_LOGOUT,
    payload: null,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
    payload: true,
});

export const loginFailed = () => ({
    type: LOGIN_FAILED,
    payload: "login failed"
});

export const logoutSuccess = () => ({
    type: LOGIN_SUCCESS,
    payload: false,
});

export const logoutFailed = () => ({
    type: LOGIN_FAILED,
    payload: "logout failed"
});
