import React from "react";
import * as Yup from 'yup';
import Login from "./Login";

const LoginContainer = () => {

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                'Must Contain 8 Characters, One Uppercase, One Lowercase and one Number'
            )
            .required('Required'),
    });

    // only for testing
    const submitAuth = (authData) => {
        alert(JSON.stringify(authData, null, 2));
    }

    return (
            <Login initialValues={{
                email: "",
                password: ""
            }}
                   submitButtonText={"Login"}
                   onSubmit={submitAuth}
                   validationSchema={SignupSchema}
            />
    )
};

export default LoginContainer;