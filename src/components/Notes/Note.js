import React from "react";
import {ListGroup} from "react-bootstrap";

const Note = ({id, title, userEmail, category, createdAt}) => {
    console.log('1',id)
    console.log('2',title)
    console.log('3',userEmail)
    console.log('4',category)
    console.log('5',createdAt)
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