import React from "react";
import LogoutButton from "./Login/LogoutButton";
import Notes from "./Notes/Notes";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function HomePage() {

    return (
        <>
            <div className="home__header">
                <Link to="/note/add">
                    <Button variant="outline-success" size="sm">Add note</Button>
                </Link>
                <LogoutButton/>
            </div>
            <Notes/>

        </>
    )
}

export default HomePage;