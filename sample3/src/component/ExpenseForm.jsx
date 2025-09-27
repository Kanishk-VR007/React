import { useContext ,useState} from "react";
import { ExpenseContext } from "../App";
function ExpenseForm(){

   const{product,setProduct}=useContext(ExpenseContext)
   const[amount,setAmount]=useState(0)
   const[total,setTotal]=useState(0)
   return(
    <>
    <input type="text" placeholder="Product" value={product} onChange={(e)=>setProduct(e.target.value) }required></input>
    <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required ></input>
    <button onClick={()=>setTotal(Number(total)+Number(amount))}>Add Expense</button>
    <h1>Total : ${total}</h1></>
   )
}
export  default ExpenseForm;