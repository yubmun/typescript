import { combineReducers, createStore } from 'redux';
import { countReducer, reducer } from './module';

const rootReducer = combineReducers({
  reducer: reducer,
  countReducer: countReducer,
})

export const store = createStore(rootReducer);

