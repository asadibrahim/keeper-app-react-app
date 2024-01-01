import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [Notes, SetNotes] = useState([]);
    function AddNotes(notes) {

        SetNotes(prevNotes => {
            return [
                ...prevNotes,
                notes
            ]
        })
    }
    function DeleteNote(index){
        SetNotes(prevNotes=>{
          return Notes.filter((value,i)=>{
            return i !== index;
           })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea
                onAdd={AddNotes}
            />
            {
                Notes.map((value,index) => {
                    return  <Note key={index} onClickValue={index} onDelete={DeleteNote} title={value.title} content={value.content} />;
                })
            }
        
            <Footer />
        </div>
    );
}

export default App;
