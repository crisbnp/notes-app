import React from 'react';

const NoteHeader = ({timestamp, handleEdit, handleDelete}) => {

    return (
        <div>
            <p>{timestamp}</p>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}


export default NoteHeader;