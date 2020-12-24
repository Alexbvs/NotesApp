import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../Login/useAuth";

function PublicRoute({component: Component, ...rest}) {

    const {isAuth} = useAuth();
    return (
        <Route {...rest}
            render={props =>
                !isAuth
                    ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/notes"/>
                    )
            }
        />
    );
}

export default PublicRoute;