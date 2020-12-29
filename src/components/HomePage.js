import React from "react";
import LogoutButton from "./Login/LogoutButton";
import Notes from "./Notes/Notes";
import {Link} from "react-router-dom";

function HomePage() {

    return (
        <>
            <div>Home Page</div>
            <LogoutButton/>
            <Notes/>
            <Link to="/note/add">Add note</Link>
        </>
    )
}

export default HomePage;