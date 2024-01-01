import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import Alert from '@mui/material/Alert';
function CreateArea(props) {
    const [Notes, SetNotes] = useState({ title: '', content: '' });
    const [Active, SetActive] = useState(false);
    const [DisplayError, SetError] = useState(false);
    function AddNote(event) {
        event.preventDefault();
        if (Notes.title == '' || Notes.content == '') {
            SetError(true);
        } else {
            props.onAdd(Notes);
            SetNotes({ title: '', content: '' });
            SetActive(false);
            SetError(false);
        }
    }
    function handleChange(event) {
        // SetActive(true);
        const { name, value } = event.target;
        SetNotes(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function ExpandTitle() {
        SetActive(true);
    }
    return (
        <div>
            <form className="create-note">
                {Active && (
                    <input name="title" onChange={handleChange} value={Notes.title} placeholder="Title" />
                )
                }

                <textarea name="content" onClick={ExpandTitle} onChange={handleChange} value={Notes.content} placeholder="Take a note..." rows={Active ? 3 : 1} />
                <Zoom in={Active}>
                    <Fab color="primary" aria-label="add" onClick={AddNote}><AddIcon /></Fab>
                </Zoom>
                <Zoom in={DisplayError}>
                    <Alert severity="error">Title And Content Fields are required</Alert>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
