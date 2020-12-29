export const GET_NOTES_REQUEST = "GET_NOTES_REQUEST";
export const GET_NOTES_SUCCESS = "GET_NOTES_SUCCESS";
export const GET_NOTES_FAILED = "GET_NOTES_FAILED";

export const ADD_NOTES_REQUEST = "ADD_NOTES_REQUEST";
export const ADD_NOTES_SUCCESS = "ADD_NOTES_SUCCESS";
export const ADD_NOTES_FAILED = "ADD_NOTES_FAILED";

export const UPDATE_NOTES_REQUEST = "UPDATE_NOTES_REQUEST";
export const UPDATE_NOTES_SUCCESS = "UPDATE_NOTES_SUCCESS";
export const UPDATE_NOTES_FAILED = "UPDATE_NOTES_FAILED";

export const getNotesRequest = (items) => ({
    type: GET_NOTES_REQUEST,
    payload: items,
});

export const getNotesSuccess = () => ({
    type: GET_NOTES_SUCCESS
});

export const getNotesFailed = () => ({
    type: GET_NOTES_FAILED,
    payload: "get notes failed"
});


export const addNotesRequest = (items) => ({
    type: ADD_NOTES_REQUEST,
    payload: items
});

export const addNotesSuccess = () => ({
    type: ADD_NOTES_SUCCESS
});

export const addNotesFailed = () => ({
    type: ADD_NOTES_FAILED,
    payload: "add notes failed"
});


export const updateNotesRequest = (note) => ({
    type: UPDATE_NOTES_REQUEST,
    payload: note
});

export const updateNotesSuccess = () => ({
    type: UPDATE_NOTES_SUCCESS
});

export const updateNotesFailed = () => ({
    type: UPDATE_NOTES_FAILED,
    payload: "add notes failed"
});