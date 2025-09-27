import {useState} from "react"
const Counter=()=>{
    const[counter,setCounter]=useState(0);
    const increment=()=>{
        setCounter(prevCount=>prevCount+1);
    }
    const decrement=()=>{
        setCounter(prevCount=>prevCount-1);
    }
    return(
        <div>
            <p>{counter}</p>
            <button onClick={increment}>
                Incrementation
            </button><br/>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
export default Counter;