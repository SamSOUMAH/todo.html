import React from 'react'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ItemTodo = ({titre, id, onDeleteTask}) => {
  

    return (
    
 <div>  
    <li className= "list-group-item m-1">
    <span>{titre}</span>
    <Button variant="danger" className="float-end"
     onClick={()=>onDeleteTask(id)}>
    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </Button></li>

 </div>
                     
    )
}

export default ItemTodo
