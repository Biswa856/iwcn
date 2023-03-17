import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props) {

  const deleteNote = (e) => {
    // e.preventDefault()
    props?.deleteItem(props?.id)
    console.log(props?.id)
  }

  return (
    <div className='note'>
      <h1>{props?.title}</h1>
      <br />
      <p>{props?.content}</p>
      <button className='btn' onClick={deleteNote} >
        <DeleteIcon className='delete_icon' />
      </button>
    </div>
  )
}
