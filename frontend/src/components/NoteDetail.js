import React,{ useState, useEffect }  from 'react';
import axios from 'axios';

function NoteDetail(props) {
    const noteId = props.match.params.id
    const [note, setNote] = useState([]);
    useEffect(() => {
        const fetchNote = async () => {
            const response =  await axios.get(`/api/v1/notes/${noteId}/`);
            const note = response.data;
            setNote(note);
        }
        
        fetchNote();
    }, [noteId])

    return (
        <div>
            <h1>{note.body}</h1>
        </div>
    )
}

export default NoteDetail
