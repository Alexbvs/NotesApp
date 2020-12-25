import { put, all, takeLatest } from "redux-saga/effects";
import {
    LOGIN_REQUEST,
    LOGOUT_REQUEST,
    loginFailed,
    loginSuccess,
    logoutFailed,
    logoutSuccess,
} from "../redux/actions/authActions";


function* login({ payload }) {
    try {
        localStorage.setItem("user", JSON.stringify(payload.email));

        yield put(loginSuccess(payload));
    } catch (error) {
        yield put(loginFailed(payload));
    }
}

function* logout() {
    try {
        localStorage.removeItem("user");

        yield put(logoutSuccess());
    } catch (error) {
        yield put(logoutFailed(error));
    }
}

export default function* userSaga() {
    yield all([
        yield takeLatest(LOGIN_REQUEST, login),
        yield takeLatest(LOGOUT_REQUEST, logout),
    ]);
}