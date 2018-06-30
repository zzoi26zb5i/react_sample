import React from 'react';
import TodoInput from './todoinput';
import TodoList from './todolist';

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{name:"yuu"}],
      id: 1
    };
    this.addtodo = this.addtodo.bind(this);
  }

  addtodo = (name)=>{
    const {
      tasks
    } = this.state;
    tasks.push({ name })
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <TodoInput addtodo={this.addtodo} />
        <TodoList tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default TodoApp;