import React from 'react';

//コンポーネント名は大文字で始める
//コンポーネントの引数名はpropsにする
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
  const address = (str) => {
    return (
      <div>
        <p>Address</p>
        <p>{str}</p>
        
      </div>
    )
  }
  return (
    <div>
      <p>React Sample</p>
      <Name str="mm"/>
      {Name({ str: "xx" })}
      {age()}
      {address("Tokyo")}
    </div>
  )
}

export default Test;