import React,{ useState, useEffect }  from 'react';
import axios from 'axios';

function NoteList() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNotes = async () => {
            const response = await axios.get('/api/v1/notes/');
            const notes = response.data;
            setNotes(notes);
        };

        fetchNotes();
    }, [])
    return (
        <div>
            {notes.map((note, index) => (
                <h3 key={index}>{note.body}</h3>
            ))}
        </div>
    )
}

export default NoteList
