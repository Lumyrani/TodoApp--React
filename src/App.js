import logo from './logo.svg';
import './App.css';
import { TodoList } from './Components/TodoList';
import { useState } from 'react';
import { Header } from './Components/Header';
import data from './Components/data.json'
import { TodoForm } from './Components/TodoForm';

function App() {

    // const [todoList,setTodoList]=useState(data)
    const [todoList,setTodoList]=useState([])
    const handleToggle=(id)=>{
     const updated_todo=todoList.map((todo)=>{
       return todo.id==id?{...todo,complete:!todo.complete}:{...todo}

     })
     setTodoList(updated_todo)

    }


    const handleFilter=()=>{
      const filtered =todoList.filter(task=>{
        // return!task.complete
        if(!task.complete){
          return task
        }
      })
      setTodoList(filtered)
    }



const addTask=(userInput)=>{
  let copy=[...todoList]
  copy=[{id:todoList.length+1,task:userInput,complete:false},...copy]
  setTodoList(copy)
}



    return (
      <div>
        <Header/>
        <TodoForm addTask={addTask}/>
        <TodoList todolists={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
       
      </div>
  
  );
 
}

export default App;
