import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:''
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {
      addtodo
    } = this.props;
    const handleChange = (e) => {
      this.setState({
        value: e.target.value
      });
    }
    const handleClick = () => {
      addtodo(this.state.value)
    }
    return (
      <div>
        <input placeholder="Input Todo" onChange={handleChange} />
        <button onClick={handleClick}>登録</button>
      </div>
    )
  }
}

export default TodoInput;