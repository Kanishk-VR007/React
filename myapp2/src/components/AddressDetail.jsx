const AD=(props)=>{
const{one,two,three,four}=props
return(
<div>
    <ul>
        <li><strong>{one}</strong></li>
        <p>{two}</p>
        <li><strong>{three}</strong></li>
        <p>{four}</p>
    </ul>
</div>
);
}
export default AD;