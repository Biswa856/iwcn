import React, { useState } from 'react'

export default function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });


    const InputEvent = (e) => {

        const { name, value } = e?.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,

            }
        })
    }

    // const addEvent = ()=>{
    //  props?.addNote(note)
    // }


    function addEvent() {
            props.passNote(note)
            console.log("clicked button")   
    }



    return (
        <>
            <div className='main_note'>
                <form>
                    <input type="text" name='title' value={note?.title} onChange={InputEvent} placeholder='Title' autoComplete='off' />
                    <textarea name="content" value={note?.content} onChange={InputEvent} placeholder='Write a note ...'></textarea>
                    <button onClick={addEvent}>
                        <p className='plus_sign'>+</p>
                    </button>
                </form>

            </div>
        </>
    )
}
