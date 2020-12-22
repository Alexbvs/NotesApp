import {SET_LOGIN, SET_LOGOUT} from "../actions/authActions";

let initialState = {
    authData: null,
    isAuth: false,
};


const authReducer = (state = initialState, action) => {
    console.log("state => ", state)
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                authData: action.payload,
                isAuth: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                authData: action.payload,
                isAuth: false
            }
        default:
            return state;
    }
};

export default authReducer;