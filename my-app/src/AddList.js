import {useRef} from 'react'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AddList = () => {
    const input_value= useRef()
   const onAddTask=()=>{
      
       let ValeurSaisie=input_value.current.value;
       input_value.current.value=""
       alert(input_value.current.value)
   }


    return (
        <div>

             <div className="d-flex justify-content-center m-2"> 
              <input type="text" 
              placeholder="Add todo"
              className="form-control w-50 bg-warning"
              ref={input_value}
              />
              <Button variant="success" onClick={()=>onAddTask()}><FontAwesomeIcon icon={faPlusSquare} ></FontAwesomeIcon></Button>
              </div>

    
        </div>
    )
}

export default AddList;
