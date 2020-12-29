import { all } from "redux-saga/effects";

import userSaga from "./userSaga"
import notesSaga from "./notesSaga";

function* rootSaga() {
    yield all([
        userSaga(),
        notesSaga()
    ])
}

export default rootSaga;