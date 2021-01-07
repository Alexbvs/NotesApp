import React from "react";
import Button from "react-bootstrap/Button";
import {Field, Form, Formik} from "formik";

const AddNote = ({initialValues, validationSchema, onSubmit}) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({errors, touched, values}) => (
                    <Form className="form__add">
                        <div className="form__add_field">
                            <label> Title* </label>
                            <Field name="title" type="title" className="form__add_field_input"/>
                            {errors.title && touched.title
                                ? <div className="form__error">{errors.title}</div>
                                : null}
                        </div>
                        <div className="form__add_field">
                            <label> Description </label>
                            <Field name="description" type="description" className="form__add_field_input"/>
                            {errors.description && touched.description
                                ? <div className="form__error">{errors.description}</div>
                                : null}
                        </div>
                        <div  className="form__add_field">
                            <label> Category* </label>
                            <select name="category"
                                    // value={values.category}
                            >
                                <option disabled selected label="Select a category"/>
                                <option value="Done" label="Done"/>
                                <option value="In progress" label="In progress"/>
                            </select>
                        </div>
                        <Button variant="success" size="lg" type="submit" className="form_btn btn_add">Add note</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default AddNote;