import {useState} from 'react'
export default function Input() {
const [isExpanded, setIsExpanded] = useState(false)
function Expand(event) {
   setIsExpanded(true);
   event.preventDefault();
}
   return (
      <form className="d-flex align-items-center flex-column custom-margin-sm ">
        {isExpanded && <input name="title" type="text" placeholder="Título" /> }
       <textarea name="content" placeholder="Conteúdo da nota"onClick={Expand}/>
      <button>+</button>
      </form>
      
   )
}