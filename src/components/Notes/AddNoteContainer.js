import React from "react";
import AddNote from "./AddNote";
import * as Yup from "yup";
import {useNotes} from "./useNotes";
import {Redirect} from "react-router-dom";

const AddNoteContainer = () => {

    const AddNoteSchema = Yup.object().shape({
        title: Yup.string()
            .min(3, 'Too Short!')
            .required('Required'),
        description: Yup.string()
            .min(3, 'Too Short!')
    });

    let created = new Date();

    const {onAddNotes, items} = useNotes();

    const submitAuth = (items) => {
        onAddNotes(items);
    }

    if (items.length > 0) {
        return <Redirect to="/notes"/>;
    }

    return (
        <AddNote validationSchema={AddNoteSchema}
                 initialValues={{
                     id: 1,
                     title: "",
                     userEmail: localStorage.getItem('user'),
                     category: "",
                     createdAt: created,
                     description: ""
                 }}
                 onSubmit={submitAuth}/>
    )
}

export default AddNoteContainer