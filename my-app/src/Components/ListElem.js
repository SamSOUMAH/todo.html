
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { faPenFancy, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FilterList from './FilterList';
import AddList from './AddList'
import React,{Component} from 'react'

 export default class ListElem extends Component {
    state={
        data:[

            { id: 1,
              name:'Task number 1'
           
             },
  
             { id: 2,
               name:'Task number 2'
                
          
               
             },
  
             { id:3,
               name:'Task number 3'
            
             }
  
       ]

    }

    
   render(){
    return (
        <div>
           <div className="text-center m-1">
             <h1>ADD_LIST</h1>
           <AddList/>
           </div>
         
             <div>
             <FilterList ></FilterList>
             </div>

            {this.state.data.map((data) => 
            (
                <div className="List d-flex container justify-content-between border bg-warning m-2">      
               <h5> {data.name}</h5>  
                <Button variant="danger" className=""><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>      
                </div>
                )
           )}
         
        </div>
 
    )
} 


}
     

