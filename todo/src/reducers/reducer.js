import React, {useState} from 'react';

export const [toDoList, setToDoList]= useState([{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]) 

export const reducer = (state,action) =>{
    switch(action.type){

    }
}

