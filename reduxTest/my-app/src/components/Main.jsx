import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterAdd, counterMinus } from '../redux/module';

export const Main = () => {
  const number = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> {dispatch(counterAdd(5))}}>+</button>
      <button onClick={()=> {dispatch(counterMinus(5))}}>-</button>
    </div>
  )
}
