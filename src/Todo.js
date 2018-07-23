import React from 'react';
import './Todo.css'
import cancelImage from './cancel.png'

  
class Todo extends React.Component {
     
     constructor(){
     	super()
   this.state = {
   	
   	showCancel: false
   }
     }
     onMouseEnter = () => {
  console.log('mouse entered')
   this.setState({showCancel:true})

     }
    onMouseLeave = () => {
   
    	this.setState({showCancel:false})
    }


	render() {

const {onMouseEnter,taskPress,id,onCancelPressed,isCompleted,task} = this.props
if(!isCompleted){

return(
	
<li >
<div className='mainDiv'  onMouseEnter = {this.onMouseEnter} onMouseLeave = {this.onMouseLeave} id ={id} >
<div className='todoDiv'>
 <input onClick ={taskPress} className='checkbox' type ='checkbox'  id = {id}/>
 <label>{task}</label>
 </div>
 <div className='cancelDiv' >

 {this.state.showCancel && <img  id={id} onClick={onCancelPressed}  src={cancelImage} width='15px' height='15px'/>}
</div>
</div>
</li>


)

}

else {

return (

<li >
<div  className='mainDiv' onMouseEnter={onMouseEnter} onMouseEnter = {this.onMouseEnter} onMouseLeave = {this.onMouseLeave} id={id} >
<div className='todoDiv'>
 <input onClick ={taskPress} className='checkbox'style={{textDecoration:'line-through' }} type ='checkbox' id = {id}/>
 <label>{task}</label>
 </div>
 <div className='cancelDiv'>
 {this.state.showCancel && <img  onClick={onCancelPressed} src={cancelImage} width='15px' height='15px' id={id}/>}
</div>
</div>
</li>


	)
}




	}


}




export default Todo