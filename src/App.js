import React, { useState } from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldItem) => {
      return [...oldItem, note]
    })
  }

  const onDelete=(id)=>{
    console.log("clicked",id)
    setAddItem((oldData) =>
      oldData.filter((currData, index)=>{
        return index !== id;
      }) 
    )

  }

  return (
    <>
      <Header />

      <CreateNote passNote={addNote} />
      {addItem?.map((val, index) => {
        return <Note
          key={index}
          id={index}
          title={val?.title}
          content={val?.content}
          deleteItem={onDelete}
        />
      })}
      
    
      <Footer />
      
    </>
  );
}

export default App;
