import {useReducer} from "react";
const UseRef=()=>{
    const reducerFunc=(state,action)=>{
        switch(action.type){
            case "dec":
                return state-1;
            case "inc":
                return state+1;
            default:
                return state;
        }}
    const[state,dispatch]=useReducer(reducerFunc,0);
return(
    <div>
        <p>count:{state}</p>
        <br/>
        <button onClick={()=>dispatch({type:"dec"})}>Reducer</button>
        <button onClick={()=>dispatch({type:"inc"})}>Adder</button>
    </div>
);
}
export default UseRef;
