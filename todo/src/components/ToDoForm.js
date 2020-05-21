import React, {useState} from 'react';

const ToDoForm = (props) =>{
    const[toDo, setToDo]= useState({
        task:"",
        id: "",
        completed: false
    })

    const onChange = event =>{
        setToDo({...toDo,task: event.target.value});
    }

    return (
        <div className="form">
            <form onSubmit={event => props.submit(event,toDo)}>
                <input type="text" onChange={onChange}/>
                <button>Add task</button>
            </form>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )

}

export default ToDoForm