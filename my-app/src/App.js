
import AddList from './AddList'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListTodo from './ListTodo';
import { useState } from 'react';






const  App=()=>{
 
  const [listTask, setListTask]=useState(["salut","bonjou"])

  return (
    <div className="App">
      <h1 className="text-center">ADD_LIST</h1>

    <div>
    <AddList/>
    </div>

    <div className="d-flex justify-content-center">
      <input type="text" placeholder="Seach..." className="form-control w-50 bg-warning"></input><FontAwesomeIcon icon={faSearch} style={{with:'3rem', height:'3rem'}} className="border bg-warning"></FontAwesomeIcon>
    </div>

     <ListTodo list={listTask} /> 

    </div>
  );
}

export default App;
