import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
    render() {
      const {
        addtodo
      } = this.props;

      const handleClick = () => {
        addtodo(this.state.value)
      }
      const handleChange=(e)=> {
        this.setState({
          value: e.target.value
        });
      }
      return (
        <div>
          <input placeholder="Input Todo" onChange={handleChange} />
          {this.state.value}
          <button onClick={handleClick}>登録</button>
        </div>
      )
    }
  
}

export default TodoInput;