import {SET_LOGIN, SET_LOGOUT} from "../actions/authActions";

let initialState = {
    email: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                email: action.payload,
                isAuth: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                email: action.payload,
                isAuth: false
            }
        default:
            return state;
    }
};

export default authReducer;