import React from 'react';
import NoteCard from './NoteCard';

const NoteList = ({notes}) => {

    return (
        <div>
            {notes.map((note) => {
                return <NoteCard />
            })}
        </div>
    )
}

export default NoteList;