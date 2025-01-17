import { useState } from 'react';
import Header from "./components/Header";
import Note from './components/Note';
import Input from './components/Input';
import Footer from './components/Footer';

export default function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      return JSON.parse(savedNotes); 
    } else {
      const exampleNote = { title: 'Exemplo', content: 'Clique sobre mim ou passe o mouse para me deletar.' };
      const initialNotes = [exampleNote];
      localStorage.setItem('notes', JSON.stringify(initialNotes)); 
      return initialNotes; 
    }
  });
  function addNote(newNote) {
    const updatedNotes = [...notes, newNote]; 
    setNotes(updatedNotes); 
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); 
  } 
  function deleteNote(id) {
    const updatedNotes = notes.filter((noteItem, index) => index !== id); 
    setNotes(updatedNotes); 

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  return (
    <main className="container-fluid">
      <Header />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Input onAdd={addNote} />
      <Footer />
    </main>
  );
}
