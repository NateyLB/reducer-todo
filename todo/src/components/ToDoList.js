import React from 'react';
import ToDo from './ToDo.js'

const ToDoList = props =>{
        return(
            <div>
                {props.toDoList.map(element => {
                    return <ToDo item={element} toggleItem={props.toggleItem}/>
                })}
            </div>
        )
}

export default ToDoList