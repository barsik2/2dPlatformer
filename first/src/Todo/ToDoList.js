import React from 'react'
import ToDoItem from './ToDoItem'


export default function ToDoList(props) {
    return(
        <ul className = 'styles'>
       { props.todos.map(todo => {
           return <ToDoItem todo = {todo}/>
       }) }
        </ul>
    )
    
}