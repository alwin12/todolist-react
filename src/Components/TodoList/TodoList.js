import React from 'react'
import Todo from '../Todo/Todo'
import {Mode} from '../Mode'
const Todolist =({todosArray,taskPress,mode,onMouseEnter,onCancelPressed,changeTask}) => {

      let todos= [];

    
      if (mode.localeCompare(Mode.all)===0)
      {
      	
	 todos = todosArray.map((todo,i)=>{


       
return <Todo key ={i} task={todosArray[i].task } taskPress ={taskPress} id = {todosArray[i].id} isCompleted={todosArray[i].completed} onMouseEnter={onMouseEnter} onCancelPressed={onCancelPressed} changeTask ={changeTask}/>





	})

	}
	else if (mode.localeCompare(Mode.completed)==0){
     
    todos = todosArray.map((todo,i)=>{

 if (todosArray[i].completed)
 {
 
       
return <Todo key ={i} task={todosArray[i].task } taskPress ={taskPress} id={todosArray[i].id} isCompleted={todosArray[i].completed} onCancelPressed={onCancelPressed}/>


}

	})
	}






return (

    <ul>

 {todos}

    </ul>


	)

}



export default Todolist;