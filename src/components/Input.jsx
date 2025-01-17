   import {useState} from 'react'
   export default function Input(props) {
   const [note, setNote] = useState({
      title: '',
      content: ''  
   })
   function handleChange(event) {
      const { name, value} = event.target;
      setNote(prevValue => {
         return {
            ...prevValue,
            [name]: value
         }
      })
   }
   function submitNote(event) {
      event.preventDefault();
      props.onAdd(note);
      setNote({
         title: '',
         content: ''
      })
      setIsExpanded(false);
   }
   const [isExpanded, setIsExpanded] = useState(false)
   function Expand(event) {
      setIsExpanded(true);
      event.preventDefault();
   }
      return (
         <form className="d-flex align-items-center flex-column custom-margin-sm ">
         {isExpanded && <input name="title" onChange={handleChange} type="text" placeholder="Título" value={note.name} /> }
         <textarea name="content" onChange={handleChange} placeholder="Conteúdo da nota"onClick={Expand} value={note.content}/>
         <button onClick={submitNote}>+</button>
         </form>
         
      )
   }