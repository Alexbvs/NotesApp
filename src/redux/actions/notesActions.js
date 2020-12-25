export const NOTES_REQUEST = "NOTES_REQUEST";

export const notesRequest = (notes) => ({
    type: NOTES_REQUEST,
    payload: notes,
});