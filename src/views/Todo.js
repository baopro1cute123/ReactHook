import React from 'react';

const Todo = (props) => {
    const todos = props.todos
    const {DeleteTodos} = props
    const handleDeleteTodos = (todos) => {
        DeleteTodos(todos)
    }
  return (
    <div className='todo-container'>
    <div className='title'>
        {props.title}
    </div>
      {todos.map((item, index) => (
        <div className='todo-child' key={item.id}>
          {index + 1}-{item.title} 
          <span onClick={()=>handleDeleteTodos(item.id)}> X </span>
        </div>
      ))}
    </div>
  );
};

export default Todo;
