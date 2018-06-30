import React, { Component } from 'react';
import Test from './test';
import TodoApp from './todoapp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <TodoApp/> 
      </div>
    );
  }
}

export default App;
