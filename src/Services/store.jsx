
import { combineReducers, createStore } from 'redux';
import WorkerReducer from './WorkerReducer';


const Reducers = combineReducers(
    {
      Workers:WorkerReducer
   
    }
)

export const mystore = createStore(Reducers);