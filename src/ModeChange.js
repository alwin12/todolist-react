import React from 'react'
import './ModeChange.css'
import {Mode} from './Mode.js'

const ModeChange = (props) => {

	const style = {border:"1px solid black", borderRadius:'2px'}

let allButtonStyle = {

	border: "none"
}
 let completedButtonStyle = {

 	border: "none"
 }
  if (props.mode === Mode.all)
  {
    
    allButtonStyle = style
  }

  if (props.mode === Mode.completed)
  {

  	completedButtonStyle = style
  }
   return(



<div className='center modeChange'>

<div class = 'count buttons'>{props.completedCount() } items left</div>
<div className ='buttons'>
<button style = {allButtonStyle} class='modeButton all' onClick ={props.allPress}>all</button>
<button style ={completedButtonStyle} class ='modeButton completed' onClick ={props.completedPress}>completed</button>
</div>

<div className='clearCompleted buttons'><button className='modeButton' onClick = {props.onClearCompleted}>clear Completed</button></div>
</div>

   	)







}

export default ModeChange;