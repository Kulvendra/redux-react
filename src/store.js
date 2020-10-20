import {createStore,combineReducers,applyMiddleware} from 'redux';

const mathReducer = (state={
        result:100,
        lastState:[]}
        ,action)=>{
  switch(action.type){
    case "ADD" :
      state={
        ...state,
        result:state.result + action.payload,
        lastState :[...state.lastState,action.payload]
      }
      break;
      
    case "SUB" :
      state={
        ...state,
        result:state.result - action.payload,
        lastState :[...state.lastState,action.payload]
      }
      break;  
  }
  return state;
}

const userReducer = (state={
    name:"Kulvendra",
    age:21}
    ,action)=>{
switch(action.type){
case "SET_NAME" :
  state={
    ...state,
    name:action.payload
  }
  break;
  
case "SET_AGE" :
  state={
    ...state,
    age:action.payload
  }
  break;  
}
return state;
}
const myLogger = (store)=>(next)=>(action)=>{
    console.log("Logged Action",action);
    next(action);
}
const rootReducer = combineReducers({mathReducer,userReducer});
const store = createStore(rootReducer,{},applyMiddleware(myLogger));

export default store;