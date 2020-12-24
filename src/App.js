import React from "react";
import LoginContainer from "./components/Login/LoginContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage";


function App() {


    return (
        <div className="App">
            <Switch>
                <Route path="/login" render={() => <LoginContainer/>}/>
                <Route path="/notes" render={() => <HomePage/>}/>
                <Redirect from='*' to="/notes"/>
            </Switch>
        </div>
    );
}

export default App;











