export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

export const setLogin = (authData) => ({
    type: SET_LOGIN,
    payload: authData,
});

export const setLogout = () => ({
    type: SET_LOGOUT,
    payload: null,
});