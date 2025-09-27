import { useContext } from "react";
import { ExpenseContext } from "../App";
function ExpenseList(){
    const{product}=useContext(ExpenseContext)
    return(
        <>
        <ul>
            <li>{product}</li></ul></>
    )

}
export  default ExpenseList;