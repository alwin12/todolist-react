import React from 'react';
import './Todo.css'
import cancelImage from './cancel.png'

const Todo = ({task,taskPress,id,isCompleted,onMouseEnter,onCancelPressed}) => {

if(!isCompleted){

return(
	
<li >
<div className='mainDiv' onMouseEnter={onMouseEnter} id ={id} >
<div className='todoDiv'>
 <input onClick ={taskPress} className='checkbox' type ='checkbox'  id = {id}/>
 <label>{task}</label>
 </div>
 <div className='cancelDiv' >
 <img  id={id} onClick={onCancelPressed} src={cancelImage} width='15px' height='15px'/>
</div>
</div>
</li>


)

}

else {

return (

<li >
<div  className='mainDiv' onMouseEnter={onMouseEnter}  id={id} >
<div className='todoDiv'>
 <input onClick ={taskPress} className='checkbox'style={{textDecoration:'line-through' }} type ='checkbox' id = {id}/>
 <label>{task}</label>
 </div>
 <div className='cancelDiv'>
 <img onClick={onCancelPressed} src={cancelImage} width='15px' height='15px' id={id}/>
</div>
</div>
</li>


	)
}

}



export default Todo;