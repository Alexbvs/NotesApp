import {useSelector} from "react-redux";

export function useNotes() {

    const { items, editItem, isLoading, errorMessage} = useSelector(({ notes }) => notes);

    return {
        items,
        editItem,
        isLoading,
        errorMessage
    }
}