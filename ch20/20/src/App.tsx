import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

let 박스:JSX.Element = <div></div>;


function App() {
  let [user, setUser] = useState<string | number>("준엽");

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"/>
      <Profile2 name="준엽" age="30"/>
    </div>
  );
}

function Profile(props:{name:string, age:string}) :JSX.Element{
  return(
    <div>
      {props.name} 프로필입니다.
    </div>
  )
}

function Profile2({name, age}:{name:string, age:string}) :JSX.Element{
  return(
    <div>
      {name}이고, {age}살 입니다.
    </div>
  )
}

export default App;
