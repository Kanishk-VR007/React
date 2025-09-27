import {NavLink} from "react-router-dom";
const Layout=()=>{
    return(
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}
export default Layout;