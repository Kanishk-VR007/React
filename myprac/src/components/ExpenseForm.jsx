import { useContext,useState} from "react";
import { ExpenseContext } from "../App";
const ExpenseForm=()=>{
    const{product,setProduct}=useContext(ExpenseContext);
    return(
        <div>
        <input
        placeholder="Product"
        value=''
        required
        />
        <input
        placeholder="amount"
        value=''
        required
        />
        <button onClick={()=>{handleadd}}>Add Expense</button>
        </div>
    );
}
export default ExpenseForm;