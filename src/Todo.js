import React from 'react';
import './Todo.css'
import cancelImage from './cancel.png'

  
  let lineThroughStyle = {textDecoration:'none'};

class Todo extends React.Component {
     
     constructor(){
     	super()
      this.state = {
   	
   	showCancel: false,
   	editMode: false,
   	value: '',
    lineThroughStyle:lineThroughStyle
   }
     }

    
     
     onMouseEnter = () => {
  console.log('mouse entered')
   this.setState({showCancel:true})

     }
    onMouseLeave = () => {
   
    	this.setState({showCancel:false})
    }
onDoubleClick = () => {
      console.log('double clicked')
	this.setState({editMode:true,value:this.props.task})
}

onEnterPress = (event) => {
	 if (event.key==='Enter'){
   const {changeTask} = this.props
	this.setState({editMode:false})

	changeTask(this.state.value,this.props.id)

}}


handleChange = (event) => {
   event.target.style.textDecoration = "none";
	this.setState({value:event.target.value})
}

onCheckboxClick = (event) =>{

  this.props.taskPress(event)



  
  


}



	render() {



 
const {onMouseEnter,taskPress,id,onCancelPressed,isCompleted,task} = this.props
   
    let lineThroughStyle = {textDecoration:'none'}
 isCompleted? lineThroughStyle = {textDecoration:"line-through"} : lineThroughStyle={textDecoration:'none'}

if(!isCompleted){

return(
	
<li>
<div className='mainDiv'  onMouseEnter = {this.onMouseEnter}  onDoubleClick = {this.onDoubleClick} onMouseLeave = {this.onMouseLeave} id ={id} >
<div style ={lineThroughStyle} className='todoDiv'>
 <input onClick ={this.onCheckboxClick} className='checkbox' type ='checkbox'  id = {id}/>
 {this.state.editMode ?

  	<input  onKeyPress = {this.onEnterPress} onChange={this.handleChange} type ='text' value ={ this.state.value} id = {id}/>
  :
  	
  		<label style = {lineThroughStyle}>{task}</label>

}
 

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
<div onDoubleClick={this.onDoubleClick} className='mainDiv' onMouseEnter={onMouseEnter} onMouseEnter = {this.onMouseEnter} onMouseLeave = {this.onMouseLeave} id={id} >
<div  className = 'todoDiv'>
 <input onClick ={this.onCheckboxClick} className='checkbox'  type ='checkbox' id = {id}/>
{this.state.editMode ?

    <input onKeyPress = {this.onEnterPress} onChange={this.handleChange} type ='text' value ={ this.state.value} id = {id}/>
  :
    <label style= {lineThroughStyle} >{task}</label> 

}
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