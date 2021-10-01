import React,{ useState, useEffect }  from 'react';
import axios from 'axios';

function NoteList() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNote = async () => {
            const response = await axios.get('api/v1/notes/');
            const notes = response.data;
            setNotes(notes);
        };

        fetchNote();
    }, [])
    return (
        <div>
            {notes.map((note, index) => (
                <h3 key={note.id}>{note.body}</h3>
            ))}
        </div>
    )
}

export default NoteList
