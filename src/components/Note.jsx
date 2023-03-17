import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note(props) {
  return (
    <div className='note'>
        <h1>{props?.title}</h1>
        <br />
        <p>{props?.content}</p>
        <button className='btn'>
        <DeleteIcon className='delete_icon'/>
        </button>
        
    </div>
  )
}
