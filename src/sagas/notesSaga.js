import { put, all, takeLatest, call } from "redux-saga/effects";
import {
    GET_NOTES_REQUEST,
    ADD_NOTES_REQUEST,
    UPDATE_NOTES_REQUEST,
    REMOVE_NOTES_REQUEST,
    addNotesFailed,
    addNotesSuccess,
    getNotesFailed,
    getNotesSuccess,
    updateNotesFailed,
    updateNotesSuccess,
    removeNotesSuccess,
    removeNotesFailed
} from "../redux/actions/notesActions";


const getNotesLocal = () => {
    return  localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];
}

const addNotesLocal = (note) => {
    const allNotes = getNotesLocal();
    localStorage.setItem('notes', JSON.stringify( [...allNotes, note]))
    return note;
}

const removeNoteLocal = ({payload}) => {
    const allNotes = getNotesLocal();
    localStorage.setItem('notes', JSON.stringify( allNotes.filter(n => n.id !== payload)))
    return payload;
}

const updateNoteLocal = (id) => {
    const allNotes = getNotesLocal();
    localStorage.setItem('notes', JSON.stringify( allNotes.find(n => n.id === id)))
    return id;
}


function* getNotes({payload}) {
    try {
        const response = getNotesLocal();

        yield put(getNotesSuccess(response));
    } catch (error) {
        yield put(getNotesFailed(payload));
    }
}

function* addNotes({ payload }) {
    try {
        yield call(addNotesLocal, payload);

        yield put(addNotesSuccess(payload));
    } catch (error) {
        yield put(addNotesFailed(error));
    }
}

function* updateNotes({payload}) {
    try {
        const response = updateNoteLocal();

        yield put(updateNotesSuccess(response));
    } catch (error) {
        yield put(updateNotesFailed(error));
    }
}

function* removeNotes({payload}) {
    try {
        const response = removeNoteLocal({payload});

        yield call(removeNotesSuccess, response);

        // yield put(removeNotesSuccess(response));
    } catch (error) {
        yield put(removeNotesFailed(error));
    }
}

export default function* notesSaga() {
    yield all([
        yield takeLatest(GET_NOTES_REQUEST, getNotes),
        yield takeLatest(ADD_NOTES_REQUEST, addNotes),
        yield takeLatest(UPDATE_NOTES_REQUEST, updateNotes),
        yield takeLatest(REMOVE_NOTES_REQUEST, removeNotes),
    ]);
}
