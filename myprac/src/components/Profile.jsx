const Profile=(props)=>{
    const{name,un,Email,About}=props;
    return (

        <div>
        <div>
        <h2>
            {name}
        </h2>
        <p>
            {name}
        </p>
        <p>
            {un}
        </p>
        <p>
            {Email}
        </p>
        <p>
            <strong>
                About
            </strong>
            <br/>
            {About}
        </p>
        </div>
    </div>
)
}
export default Profile;