import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {
    addNotesRequest,
    getNotesRequest,
    removeNotesRequest,
    updateNotesRequest
} from "../../redux/actions/notesActions";

export function useNotes() {
    const dispatch = useDispatch();
    const { items, editItem, isLoading, errorMessage} = useSelector(({ notes }) => notes);

    const onGetNotes = useCallback((items) => dispatch(getNotesRequest(items)), [dispatch]);
    const onAddNotes = useCallback((note) => dispatch(addNotesRequest(note)), [dispatch]);
    const onUpdateNotes = useCallback((note) => dispatch(updateNotesRequest(note)), [dispatch]);
    const onRemoveNotes = useCallback((id) => dispatch(removeNotesRequest(id)), [dispatch]);

    return {
        items,
        editItem,
        isLoading,
        errorMessage,
        onGetNotes,
        onAddNotes,
        onUpdateNotes,
        onRemoveNotes
    }
}