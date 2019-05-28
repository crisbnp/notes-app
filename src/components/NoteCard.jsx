import React from 'react';
import NoteHeader from './NoteHeader';
import NoteContent from './NoteContent'

const NoteCard = ({timestamp, handleDelete, handleEdit, yourNotes}) => {
    return (
        <div>
            <NoteHeader timestamp={timestamp} handleEdit={handleEdit} handleDelete={handleDelete}></NoteHeader>
            <NoteContent yourNotes={yourNotes}/>
        </div>
    )
}

export default NoteCard;
