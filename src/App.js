import React, { Component } from 'react';
import InputField from './InputField'
import TodoList from './TodoList'
import './App.css';
import {todos} from './todos'
import Scroll from './Scroll'
import {Mode} from './Mode'
import ModeChange from './ModeChange'
import Particles from 'react-particles-js';
import './a.json'
import {ParticleConfig} from './ParticleConfig'

class App extends Component {

  constructor() {
    super()
  

  this.state ={
    todosArray: todos,
    task: '',
    mode: Mode.all,
    isCancelHidden: true,
  }
}

onEnterPress =(event) => {

  if (event.key==='Enter'){

    const input = event.target.value.trim();

     if (input.length)
     {
   let task = {id:this.state.todosArray.length,task:event.target.value,completed:false}

   

  this.setState({todosArray:[...this.state.todosArray,task]})
    }
  event.target.value = '';
     }
  
 
   }


 onTaskPress=(event) => {
  
  const id = event.target.id;
   const div = document.getElementById(id);

   const newArray =  this.state.todosArray.map(todo =>{

   if(todo.id ==id){
    todo.completed =!todo.completed
      
    
   }
  
    return todo


    })
    this.setState({todosArray:newArray});

   
   //div.classList.toggle('line-through')

  }

   onAllPress = (event) => {
   

    
    if (this.state.mode === Mode.completed){

      this.setState({mode: Mode.all})
    }
   // event.target.classList.add('border')
  }

  onCompletedPress = (event) => {

 if (this.state.mode === Mode.all)
  {this.setState({mode: Mode.completed})}
      //event.target.classList.add('border')


  }

  onMouseEnter=(event) => {


    


  }
  onCancelPressed=(event) =>{

const id= event.target.id

 const newArray= this.state.todosArray.filter((task,i)=>{

  return task.id!=id

 })

 
 this.setState({todosArray:newArray})

  }
  completedCount=()=>{


    const completedArray = this.state.todosArray.filter(todo=>{

     return !todo.completed;


    })

    return completedArray.length;
  }
  onClearCompleted = () => {
   console.log('clear pressed')
 const newArray = this.state.todosArray.filter(todo =>{


return !todo.completed

 })

  this.setState({todosArray:newArray})
  }

  changeTask =(newTask,id) => {
    
    const newArray = this.state.todosArray.map(todo =>{


    if (todo.id ==id){

      todo.task = newTask
    }

    return todo;

    })
  this.setState({todosArray:newArray})

  }
render() {


  return ( 
    <div >
 <Particles className ='background'
              params={

                ParticleConfig

            }
              
            />
        
    
 <div className='main'>

  
<h1 className='center' >Todos </h1>
<div className='responsive'>
  <InputField onEnterPress ={this.onEnterPress}/>
 
  <TodoList changeTask = {this.changeTask} todosArray={this.state.todosArray} taskPress = {this.onTaskPress} mode ={this.state.mode} onMouseEnter={this.onMouseEnter} onCancelPressed={this.onCancelPressed}/>

<ModeChange allPress= {this.onAllPress} completedPress = {this.onCompletedPress} completedCount ={this.completedCount} mode={this.state.mode} onClearCompleted = {this.onClearCompleted}/>
  
</div>
  </div>
</div>


    )
};



}











export default App;
