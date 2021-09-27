import React from 'react'
import ItemTodo from './ItemTodo'





const ListTodo=({list})=>{
   
    return (
      
            <ul className="list-group w-75 mx-auto border bg-success">
                {list.map((taskTitre)=>(
                 <ItemTodo titre={taskTitre}/>
                ))}
           
            </ul>

     
    )
}

export default ListTodo
