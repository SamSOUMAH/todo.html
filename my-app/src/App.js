
import AddList from './AddList'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListTodo from './ListTodo';
import { useState } from 'react';






const  App=()=>{
 
  const [listTask, setListTask]=useState(["salut"])
  
  const NouveauElem=(newTask)=>{ 
    if(newTask!==""){
      if(window.confirm(" Voulez vous ajouter vraiment: " + newTask +" ?")===false) return;
      setListTask([...listTask, newTask])
    }}

    const deleteTaskById = (idTask) => {
      let newListTask=[...listTask];
      newListTask=newListTask.filter((_, index)=>index!==idTask);
      setListTask([...newListTask]);

      if(window.confirm(" Voulez vous supprimer vraiment cet element ?")===false) return;
    }  
    
  

  return (
    <div className="App">
      <h1 className="text-center">ADD_LIST</h1>

    <div>
    <AddList AddTasknew={NouveauElem}/>
    </div>

    <div className="d-flex justify-content-center">
      <input type="text" placeholder="Seach..." className="form-control w-50 bg-warning"></input><FontAwesomeIcon icon={faSearch} style={{with:'3rem', height:'3rem'}} className="border bg-warning"></FontAwesomeIcon>
    </div>

     <ListTodo 
     list={listTask}
     onDeleteTask={deleteTaskById}
     /> 

    </div>
  );
}


export default App;
