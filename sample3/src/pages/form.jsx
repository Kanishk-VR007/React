import { useState } from 'react'
export function Form() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
  
    return (<>
        <form>
            Name:   <input type='text' placeholder='Name' value={name} onBlur={() => console.log("Inpjt Field LOst Focus At Name")} onChange={(e) => setName(e.target.value)} /><br/><br/>
            Email:<input type='email' placeholder='Email' value={email} onBlur={() => console.log("Inpjt Field LOst Focus At Email")} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
            Password:<input type='password' placeholder='Password' value={password} onBlur={() => console.log("Inpjt Field LOst Focus At Password")} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <button type = "submit" onClick={(e)=>{e.preventDefault(),setSubmitted(true)}}>Submit</button>
        </form>
        {submitted &&
            (
            <>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
            </>
        )}
        </>
    )
}