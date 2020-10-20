import {createStore,combineReducers,applyMiddleware} from 'redux';  
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';



const myLogger = (store)=>(next)=>(action)=>{
    console.log("Logged Action",action);
    next(action);
}

const rootReducer = combineReducers(
  {mathReducer,
  userReducer
  });
const store = createStore(rootReducer,{},applyMiddleware(myLogger));

export default store;