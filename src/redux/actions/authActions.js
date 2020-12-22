export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

export const setLogin = (email) => ({
    type: SET_LOGIN,
    payload: email,
});

export const setLogout = () => ({
    type: SET_LOGOUT,
    payload: null,
});