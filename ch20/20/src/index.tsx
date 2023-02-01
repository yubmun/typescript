import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const 초기값 :{count: number} = { count: 0 };

function reducer(state = 초기값, action:{type: string}){
  if(action.type === "증가"){
    return {...state, count : state.count + 1}
  } else if (action.type === "감소"){
    return { ...state, count: state.count - 1}
  } else {
    return 초기값
  }
}
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
