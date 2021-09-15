import React from 'react'
import ToDoList from './Todo/ToDoList'



function App() {
  const todos = [
    {id: 1, completed: false, title: 'Купить пива'},
    {id: 2, completed: false, title: 'Купить водку'},
    {id: 3, completed: false, title: 'Купить снюс'},
  ]

  return (
   <div className = 'wrapper'>
     <h1>Необходимое для жизни анимешника</h1>

     <ToDoList todos = {todos} key = {todos.id} />
   </div>
  );
}

export default App;
