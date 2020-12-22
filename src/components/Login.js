import React from "react";
import {Field, Form, Formik} from "formik";

const Login = ({initialValues, validationSchema, submitButtonText, onSubmit}) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="email" className="formTab__label">Email:</label>
                        <Field name="email" type="email"/>
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <label htmlFor="password" className="formTab__label">Password:</label>
                        <Field name="password" type="password"/>
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        <button type="submit" className="btn">{submitButtonText}</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login;