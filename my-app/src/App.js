import {useState, useRef} from 'react'
import AddList from './AddList'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash, faSearch, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function App() {
 
  const [data, setData]=useState(["Bonjour","Midi", "Soirée", "Nuit"]);
  const AddNewTaskList=(taskNew)=>{
  
    if(taskNew!==""){setData([...data, taskNew ])
    alert('bien ajouter')}
    else{alert('Vous n\'avez pas de valeur saisi')}
  }


  return (
    <div className="App">
      <h1 className="text-center">ADD_LIST</h1>
    <div>

    <AddList addTaskList={AddNewTaskList}/>

    </div>

    <div className="d-flex justify-content-center">
      <input type="text" placeholder="Seach..." className="form-control w-50 bg-warning"></input><FontAwesomeIcon icon={faSearch} style={{with:'3rem', height:'3rem'}} className="border bg-warning"></FontAwesomeIcon>
    </div>

      {data.map((user)=>
      <div className="container  d-flex justify-content-between border m-2 bg-warning ">
          <h4>{user}</h4>
          <Button variant="danger" ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
      </div>
      )}
     
    </div>
  );
}

export default App;
