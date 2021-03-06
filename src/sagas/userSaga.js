import { put, all, takeLatest } from "redux-saga/effects";
import {
    loginFailed,
    loginSuccess,
    logoutFailed,
    logoutSuccess,
    SET_LOGIN,
    SET_LOGOUT
} from "../redux/actions/authActions";


function* login({ payload }) {
    try {
        localStorage.setItem("user", JSON.stringify(payload));

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
        yield takeLatest(SET_LOGIN, login),
        yield takeLatest(SET_LOGOUT, logout),
    ]);
}