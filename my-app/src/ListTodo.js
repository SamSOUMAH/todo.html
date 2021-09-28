import React from 'react'
import ItemTodo from './ItemTodo'





const ListTodo=({list, onDeleteTask})=>{
   
    return (
      
            <ul className="list-group w-75 mx-auto border bg-success">
                {list.map((taskTitre, index)=>(

                 <ItemTodo  
                 key ={index}
                 id={index}
                 titre={taskTitre}
                 onDeleteTask = {onDeleteTask}
                 />

                ))}
           
            </ul>

     
    )
}

export default ListTodo
