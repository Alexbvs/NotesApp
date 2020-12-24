import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
} from "../actions/authActions";

let initialState = {
    authData: null,
    isAuth: false,
    isLoading: false,
    errorMessage: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                authData: action.payload,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                authData: null,
                isLoading: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                isLoading: false
            }
        case LOGOUT_FAILED:
            return {
                ...state,
                errorMessage: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};

export default authReducer;