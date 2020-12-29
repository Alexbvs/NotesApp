import React from "react";
import {useNotes} from "./useNotes";
import Note from "./Note";

const Notes = () => {

    const {items} = useNotes();

    return(
        <div>
            {
                items.length > 0
                    ? items.map(item => <Note key={item.id}
                                              {...item} />)
                    : (<p>Your Notes is empty</p>)
            }
        </div>
    )
}

export default Notes;