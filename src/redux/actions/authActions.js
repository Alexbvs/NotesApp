export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const loginRequest = (authData) => ({
    type: LOGIN_REQUEST,
    payload: authData,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const loginFailed = () => ({
    type: LOGIN_FAILED,
    payload: "login failed"
});

export const logoutRequest = () => ({
    type: LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
    type: LOGIN_SUCCESS
});

export const logoutFailed = () => ({
    type: LOGIN_FAILED,
    payload: "logout failed"
});
