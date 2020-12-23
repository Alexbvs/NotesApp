import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT_FAILED,
    LOGOUT_SUCCESS,
    SET_LOGIN,
    SET_LOGOUT
} from "../actions/authActions";

let initialState = {
    authData: null,
    isAuth: false,
    error: false,
    errorMessage: ""
};


const authReducer = (state = initialState, action) => {
    console.log("state => ", state)
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                authData: action.payload,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: true,
                errorMessage: action.payload
            }
        case SET_LOGOUT:
            return {
                ...state,
                authData: action.payload,
                isAuth: false
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: action.payload,
            }
        case LOGOUT_FAILED:
            return {
                ...state,
                error: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }
};

export default authReducer;