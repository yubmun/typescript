import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';
import { Dispatch } from 'redux';

let 박스:JSX.Element = <div></div>;


function App() {
  let [user, setUser] = useState<string | number>("준엽");

  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch :Dispatch = useDispatch();

  return (
    <div>
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"/>
      <Profile2 name="준엽" age="30"/>
      {꺼내온거.count}
      <button onClick={()=>{dispatch({type: '증가'})}}>버튼</button>
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
