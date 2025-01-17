import {useState} from 'react'
import  Delete  from "./Delete"
export default function Note(props) {
   const [showDelete, setShowDelete] = useState(false)
   function handleDelete() {
      setShowDelete(true)
   }
   function offDelete() {
      setShowDelete(false)
   }
   if (!props.title && !props.content) {
      return null; 
   }
   function handleClick() {
      props.onDelete(props.id)
    }
   return (
      <div className="container">
  <div className="row justify-content-center">
    <div className="col-4 col-md-6 col-sm-12 note m-5 rounded-5" id={props.id} onMouseOut={offDelete} onMouseOver={handleDelete}>
      <h3 className="text-center fw-bold mb-3 primary-black">{props.title}</h3>
      <p className="primary-black">
        {props.content}
      </p>
      {showDelete && <Delete onClick={handleClick} />}
    </div>
  </div>
</div>

  
   
   )
}