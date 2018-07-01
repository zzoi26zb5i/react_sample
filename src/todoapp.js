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
  }
  render() {
    const reset = () => {
      this.setState({tasks:[]})
    }
    const addtodo = (name)=>{
      const {
        tasks
      } = this.state;
      tasks.push({ name })
      this.setState({ tasks });
    }
    return (
      <div>
        <TodoInput addtodo={addtodo} />
        <button onClick={reset} >リセット</button>
        <TodoList tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default TodoApp;