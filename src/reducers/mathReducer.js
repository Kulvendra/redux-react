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

export default mathReducer;
