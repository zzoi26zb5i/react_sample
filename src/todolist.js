import React from 'react';
import TodoItem from './todoitem';

const TodoList = (props) => {
  const {
    tasks
  } = props;
  const todolist = tasks.map(todo => {
      return <TodoItem name={todo.name} />
    });

  return (
    <div>
      {todolist}
    </div>
  )
}

export default TodoList;