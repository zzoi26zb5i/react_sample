import React from 'react';

//コンポーネント名は大文字で始める
const Test = (props) => {
  const Name = (props) => {
    return (
      <div>
        <p>name</p>
        <p>{props.str}</p>
      </div>
    )
  }

  const age = () => <p>age</p>

  return (
    <div>
      <p>React Sample</p>
      <Name str="aa" />
      {Name({ a: "bb" })}
      {age()}
    </div>
  )
}

export default Test;