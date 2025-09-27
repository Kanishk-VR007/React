import {useState} from "react";
import "./style.css"
import lighton from "../assets/images/lighton.png"
import lightoff from "../assets/images/lightoff.png"
const LightSwitch=()=>{
    const[toggle,setToggle]=useState(false);
    let image= toggle ? lighton : lightoff
    const cass=toggle ? "lighton" : "lightoff"
    let textcontent=toggle ? "Good morning! Have a good day" : "Good night ! Sweet dreams"
    return(
        <div>
            <div className={`${cass} position`}>
                <h1>{textcontent}</h1>
                <button className="buttonbackground" onClick={()=>{setToggle(!toggle)}}>Turn on</button>
                <br/>
                <img className="imgposition" src={`${image}`}/>
                
            </div>
        </div>
    );
}
export default LightSwitch;