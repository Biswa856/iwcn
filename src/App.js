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
        />
      })}
      <Footer />
    </>
  );
}

export default App;
