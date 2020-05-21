import React, {useState, useReducer} from 'react';
import ToDoForm from "./components/ToDoForm.js"
import ToDoList from "./components/ToDoList.js"
import { v4 as uuid } from 'uuid';
import {initialState, reducer} from "./reducers/reducer.js"
import './App.css';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  //handles submit for the task
 const submit = (event, item) => {
    event.preventDefault();
    const obj = {
      task: item.task,
      completed: item.completed,
      id: uuid()
    };
    dispatch({
      type: "SUBMIT",
      payload: obj
    });
  };
  //toggles checked state
  const toggleItem = itemId => {
    dispatch({
      type: "TOGGLE",
      payload: itemId
  });
  };
  //filters already completed tasks
const clearCompleted = event => {
    dispatch({
      type: "CLEAR_COMPLETED",
    });
  };
  return (
    <div >
     <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm submit={submit} clearCompleted={clearCompleted}/>
        <ToDoList toDoList={state} toggleItem={toggleItem}/>
      </div>
    </div>
  );
}

export default App;
