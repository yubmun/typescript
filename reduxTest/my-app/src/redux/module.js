export function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === 'PLUS') {
    newState.number++;
  }
  return newState;
}

const counter = { type: "COUNTER" };

export function counterAdd(num){
  return { type: counter.type, payload: num }
}

export function counterMinus(num){
  return { type: "MINUS", payload: num }
}

export function countReducer(state={count : 0}, action){
  switch(action.type){
    case "COUNTER":
      return { ...state, count: state.count + action.payload }
    case "MINUS":
      return { ...state, count: state.count - action.payload }
    default:
      return state;
  }
}
