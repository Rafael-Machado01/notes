import { FaRegTrashCan } from "react-icons/fa6";
export default function Delete(props) {
   return (
      <button className="btn-delete" onClick={props.onClick}>
         <FaRegTrashCan size={25}/> 
      </button>
   )
}