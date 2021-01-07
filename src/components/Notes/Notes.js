import React, {useEffect} from "react";
import {useNotes} from "./useNotes";
import Note from "./Note";

const Notes = () => {

    const {items, onGetNotes, onRemoveNotes} = useNotes();

    useEffect(() => {
        if (localStorage.getItem('notes')) {
            onGetNotes();
        }
    }, [onGetNotes]);


    return (
        <div>
            {
                items.length > 0
                    ? items.map(item => <Note key={item.id}
                                              onRemoveNotes={onRemoveNotes}
                                              {...item} />)
                    : (<p>Your Notes is empty</p>)
            }
        </div>
    )
}

export default Notes;