import { useContext} from "react";
import { ExpenseContext } from "../App";
const ExpenseTracker=()=>{
    const{product}=useContext(ExpenseContext);
    return(
    <div>
    <h1>
        ExpenseTracker
    </h1>
    <p>
        {product}
    </p>
    </div>);
}
export default ExpenseTracker;