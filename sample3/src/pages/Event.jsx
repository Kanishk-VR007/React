import { useState } from 'react';

const Events = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }; 
    const reset = () => {
        setName("");
        setEmail("");
        setSubmitted(false);
    }
    const handleBlur = (e) => {
        console.log("Input field lost focus:", e.target.value);
    }
    return (
        <div>
            <h1>Events</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} required/>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur} required/>
                <button type="submit">Submit</button>
                <button type="button" onClick={reset}>Reset</button>
       
            </form>
            {submitted && (
                <div>
                    <h1>{name}</h1>
                    <br />
                    <h1>{email}</h1>
                </div>
            )}
        </div>
    );
};

export default Events;