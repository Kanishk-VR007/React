const DataDisplay=(props)=>{
    const{date,text}=props;
    return(
        <div>
            <h1>Static Content</h1>
            <p>{date}</p>
            <h1>Dynamic Content</h1>
            <p>{text}</p>
        </div>
    );
}
export default DataDisplay;
