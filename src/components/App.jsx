import React,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

const App=()=> {

    const [notes,setNotes]=useState([]);

    const addNote=note=>{
        setNotes(prevState => [...prevState,note]);
    }
    const deleteNote=(id)=>{
        setNotes(prevState => prevState.filter((cur,index)=>index!=id));
    }

    return (
        <div>
            <Header />
            <CreateArea
                onAdd={addNote}
            />
            {notes.map((noteItem,index)=>
                <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;