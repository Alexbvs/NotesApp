import React from "react";
import * as Yup from 'yup';
import Login from "./Login";
import {useAuth} from "./useAuth";
import {Redirect} from "react-router-dom";

const LoginContainer = () => {

    const SignupSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                'Must contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number'
            )
            .required('Required'),
    });

    const {onLogin, isAuth} = useAuth();

    const submitAuth = (authData) => {
        onLogin(authData);
    }

    if (isAuth) {
        return <Redirect to="/notes"/>;
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