import React from "react";
import * as Yup from 'yup';
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../redux/actions/authActions";

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

    const dispatch = useDispatch();

    const { authData, isAuth } = useSelector(({ auth }) => auth);

    const submitAuth = (authData) => {
        dispatch(setLogin(authData));
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