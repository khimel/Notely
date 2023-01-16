import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    getNotes();
  },[]);

  async function getNotes(){
    const response = await fetch("http://127.0.0.1:8000/api/", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    });
    var data = await response.json();
    console.log(data);
    setNotes(data);
    console.log(notes);
    
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );

  // return(
  //   <div>
  //     <button onClick={getNotes} > hi </button>
  //     {notes.map((noteItem, index) => {
  //       return (
  //         <Note
  //           key={index}
  //           id={index}
  //           title={noteItem.title}
  //           content={noteItem.content}
  //           onDelete={deleteNote}
  //         />
  //       );
  //     })}
      
  //   </div>
    
  // );
}

export default App;
