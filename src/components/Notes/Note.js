import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import DetailNote from "./DetailNote";

const Note = ({id, title, userEmail, category, createdAt, onRemoveNotes}) => {

    const handleRemoveNotes = () => {
        onRemoveNotes(id);
    }

    // ?????
    const hangleDetails = () => {
        return <DetailNote id={id}
                           title={title}
                           userEmail={userEmail}
                           category={category}
                           createdAt={createdAt}
        />
    }

    return (
        <div className="note">
            <div className="note__item">
                <div className="note__header">
                    <div>id: {id}</div>
                    <div>title: {title}</div>
                    <Button className="btn_del" variant="danger" size="sm" onClick={handleRemoveNotes}>x</Button>
                </div>
                <div className="note__footer">
                    <div>userEmail: {userEmail}</div>
                    <div>category: {category}</div>
                    <div>createdAt: {createdAt}</div>
                </div>
                <Link to={`/notes/${id}`}><Button variant="success" size="sm"
                                                  onClick={hangleDetails}>Details</Button></Link>
            </div>
        </div>
    )
}

export default Note;