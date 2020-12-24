import React from "react";
import LoginContainer from "./components/Login/LoginContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
    return (
        <div className="App">
            <Switch>
                <PublicRoute path="/login" component={LoginContainer} />
                <PrivateRoute path="/notes" component={HomePage} />
                <Redirect from='*' to="/notes"/>
            </Switch>
        </div>
    );
}

export default App;











