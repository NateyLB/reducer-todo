import React, {useState} from 'react';
import ToDoForm from "./components/ToDoForm.js"
import ToDoList from "./components/ToDoList.js"
import { v4 as uuid } from 'uuid';
//import {toDoList,setToDoList, reducer} from "./reducers/reducer.js"
import './App.css';

function App() {

  const [toDoList, setToDoList] = useState([]);

  //handles submit for the task
 const submit = (event, item) => {
    event.preventDefault();
    const obj = {
      task: item.task,
      id: uuid(),
      completed: item.completed
    };

    setToDoList([...toDoList, obj])
    //console.log(toDoList)
  };
  //toggles checked state
  const toggleItem = itemId => {
      setToDoList(toDoList.map(item => {
       // if the item matches the id that was clicked
        if (itemId === item.id) {
         // change purchased to true
          //return the item
          return {
            ...item,
            completed: !item.completed
          };
        }
        //if the item does NOT match the id that was clicked
        //just return the item, unchanged
        return item;
      })
      )
    //setToDoList(newToDo)
  };
  //filters already completed tasks
const clearCompleted = event => {
    setToDoList([
      ...toDoList.filter(item =>{
        return item.completed === false
      })
    ]);
  };
  return (
    <div >
     <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm submit={submit} clearCompleted={clearCompleted}/>
        <ToDoList toDoList={toDoList} toggleItem={toggleItem}/>
      </div>
    </div>
  );
}

export default App;
