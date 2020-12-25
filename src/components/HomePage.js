import React from "react";
import LogoutButton from "./Login/LogoutButton";
import Notes from "./Notes/Notes";


function HomePage() {
    return (
        <>
            <div>Home Page</div>
            <LogoutButton/>
            <Notes />
        </>
    )
}

export default HomePage;