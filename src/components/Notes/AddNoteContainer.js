import React from "react";
import AddNote from "./AddNote";
import * as Yup from "yup";
import {useNotes} from "./useNotes";
import { v4 as uuidv4 } from 'uuid';

const AddNoteContainer = ({history}) => {

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
        history.push('/notes');
    }

    return (
        <AddNote validationSchema={AddNoteSchema}
                 initialValues={{
                     id: uuidv4(),
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