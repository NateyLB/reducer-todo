import React from 'react';
import { v4 as uuid } from 'uuid';
import * as moment from 'moment';


export const initialState= [{
  task: 'Learn about reducers',
  completed: false,
  id: uuid()
}]

export const reducer = (state,action) =>{
    switch(action.type){
        case 'SUBMIT':
            return [
                ...state,
                action.payload
              ];
        
        case 'TOGGLE':
           return (state.map(item => {
                // if the item matches the id that was clicked
                 if (action.payload === item.id) {
                  // change purchased to true
                   //return the item
                   
                   return {
                     ...item,
                     completed: !item.completed,
                     time: moment().format('MMMM Do YYYY h:mm a')
                   };
                 }
                 //if the item does NOT match the id that was clicked
                 //just return the item, unchanged
                 return item;
               })
           )

        case 'CLEAR_COMPLETED':
            
              return(state.filter(item =>{
                  return item.completed === false
                })
              )

}
}

