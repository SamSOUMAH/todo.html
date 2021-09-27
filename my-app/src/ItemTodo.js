import React from 'react'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ItemTodo=({titre})=>{
    return (

    <li className= "list-group-item m-1 " >
    <span>{titre}</span>
    <Button variant="danger" className="float-end"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
    </Button></li>
                     
    )
}

export default ItemTodo
