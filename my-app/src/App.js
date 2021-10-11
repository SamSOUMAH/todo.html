
import AddList from './AddList'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListTodo from './ListTodo';
import { useState, useRef} from 'react';






const  App=()=>{
 
  const [listTask, setListTask]=useState(["salut"])
  const [listTaskBackup, setListTaskBackup]=useState(["salut"])

  
  const NouveauElem=(newTask)=>{ 
    if(newTask!==""){
    if(window.confirm(" Voulez vous ajouter vraiment: " + newTask +" ?")===false) return;
      setListTask([...listTask, newTask])
      setListTaskBackup([...listTaskBackup, newTask])
    }

    else{alert("Saisissez svp")}
  }

    const deleteTaskById = (idTask) => {
      if(window.confirm(" Voulez vous supprimer vraiment cet element ?")===false) return;
      let newListTask=[...listTask];
      newListTask=newListTask.filter((_, index)=>index!==idTask);
      setListTask([...newListTask]);
      setListTaskBackup([...newListTask]);
     
    }  
    
    const filterTaskInput = useRef("")

    const filterTaskByTitle=()=>{
      let query=filterTaskInput.current.value.toLowerCase();
      if(query===""){
        setListTask([...listTaskBackup])
      }
      else{
        let newListTask=[...listTask];
      newListTask=newListTask.filter((titleTask) => titleTask.toLowerCase().includes(query))
      setListTask([...newListTask])
      }
      
    }
   

  return (
    <div className="App bg-dark">
      <h1 className="text-center">ADD_LIST</h1>

    <div>
    <AddList AddTasknew={NouveauElem}/>
    </div>

    <div className="d-flex justify-content-center">

      <input type="text"
      placeholder="Search..."
      className="form-control w-50 bg-warning"
      onKeyUp= {filterTaskByTitle}
      ref={filterTaskInput}
      ></input>
      <FontAwesomeIcon icon={faSearch} style={{with:'3rem', height:'3rem'}} className="border bg-warning"></FontAwesomeIcon>
    </div>
    

     <ListTodo 
     list={listTask}
     onDeleteTask={deleteTaskById}/> 
    </div>
  );
}


export default App;
