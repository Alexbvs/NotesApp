import React from "react";


const DetailNote = (id, title, userEmail, category, createdAt) => {

    return(
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>userEmail: {userEmail}</div>
            <div>category: {category}</div>
            <div>createdAt: {createdAt}</div>
            {/*<div>description: {description}</div>*/}

        </div>
    )
}

export default DetailNote;