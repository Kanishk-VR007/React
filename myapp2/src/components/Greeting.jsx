import React from 'react'
const Greeting=()=>{
    const template={
        "weekday":'long',
        "year":'numeric',
        'month':'long',
        'day':'numeric'
    }
    const formatedate=new Date().toLocaleDateString("en-US",template)
    return(
        <div>
        <h2>
            Hello Jhon
        </h2>
        <p>Welcome to out website.Today is {formatedate}</p>
</div>
    );
}
export default Greeting;