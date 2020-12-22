import React from "react";
import {Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = ({initialValues, validationSchema, submitButtonText, onSubmit}) => {

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({errors, touched}) => (
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <Form className="form">
                                <Row>
                                    <Col md={2}>
                                        <label htmlFor="email" className="form__label">Email:</label>
                                    </Col>
                                    <Col md={10}>
                                        <div className="form__field">
                                        <Field name="email" type="email" className="form__field_input"/>
                                        {errors.email && touched.email
                                            ? <div className="form__error">{errors.email}</div>
                                            : null}
                                        </div>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col md={2}>
                                        <label htmlFor="password" className="formTab__label">Password:</label>
                                    </Col>
                                    <Col md={10}>
                                        <div className="form__field">
                                        <Field name="password" type="password" className="form__field_input" />
                                        {errors.password && touched.password
                                            ? <div className="form__error">{errors.password}</div>
                                            : null}
                                        </div>
                                    </Col>

                                </Row>
                                <Button variant="success" size="lg" type="submit" className="form_btn">{submitButtonText}</Button>
                            </Form>
                        </Col>
                    </Row>
                )}
            </Formik>
        </>
    )
}

export default Login;