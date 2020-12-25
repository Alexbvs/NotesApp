import React from "react";
import {ListGroup} from "react-bootstrap";

const Note = ({id, title, userEmail, category, createdAt}) => {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item action variant="info">
                    <div>id: {id}</div>
                    <div>title: {title}</div>
                    <div>userEmail: {userEmail}</div>
                    <div>category: {category}</div>
                    <div>createdAt: {createdAt}</div>
                </ListGroup.Item>

            </ListGroup>
        </div>
    )
}

export default Note;