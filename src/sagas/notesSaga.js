import { put, all, takeLatest } from "redux-saga/effects";
import {
    GET_NOTES_REQUEST,
    ADD_NOTES_REQUEST,
    UPDATE_NOTES_REQUEST,
    addNotesFailed,
    addNotesSuccess,
    getNotesFailed,
    getNotesSuccess,
    updateNotesFailed,
    updateNotesSuccess
} from "../redux/actions/notesActions";

function* getNote({payload}) {
    try {
        localStorage.getItem("notes");

        yield put(getNotesSuccess());
    } catch (error) {
        yield put(getNotesFailed(payload));
    }
}

function* addNote({ payload }) {
    try {
        localStorage.setItem("notes", JSON.stringify(payload));

        yield put(addNotesSuccess(payload));
    } catch (error) {
        yield put(addNotesFailed(error));
    }
}

function* updateNote({payload}) {
    try {
        localStorage.setItem("notes", JSON.stringify(payload));

        yield put(updateNotesSuccess(payload));
    } catch (error) {
        yield put(updateNotesFailed(error));
    }
}

export default function* notesSaga() {
    yield all([
        yield takeLatest(GET_NOTES_REQUEST, getNote),
        yield takeLatest(ADD_NOTES_REQUEST, addNote),
        yield takeLatest(UPDATE_NOTES_REQUEST, updateNote),
    ]);
}