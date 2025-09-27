import {useRef} from "react";
const LoginForm=()=>{
    const emailInputref=useRef();
    const passwordInputref=useRef();
    emailInputref.current=(null);
    passwordInputref.current=(null);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={email:emailInputref.current.value,
            passwd : passwordInputref.current.value 
        }
        console.log(data);
        emailInputref.current.value='';
        passwordInputref.current.value='';
    emailInputref.current.focus();
}
    return(
        <div>
            <form onSubmit={handleSubmit(Event)}>
                <label htmlFor="email">Email</label>
                <input
                id="email"
                name="email"
                ref={emailInputref}
                />
                <label htmlFor="passwd"> Password
                </label>
                <input
                id="passwd"
                name='email'
                ref={passwordInputref}
                />
                <input
                type="Submit"
                name="Submit"
                />
            </form>
        </div>
    );
}
export default LoginForm;