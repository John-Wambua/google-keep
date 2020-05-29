import React,{useState} from "react";

function CreateArea(props) {

    const [noteItem,setNoteItem]=useState({
        title:"",
        content:""
    });


    const handleChange=(event)=>{
        const {name, value}=event.target;
        setNoteItem(prevState => {
            return{
                ...prevState,
                [name]:value

            };

        });
    }

    const handleClick=(event)=>{
        props.onAdd(noteItem);
        setNoteItem({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={noteItem.title}/>
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={noteItem.content} />
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
