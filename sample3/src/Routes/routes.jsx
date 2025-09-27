import { NavLink } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import {Contact} from "./contact"
export function Layout(){
    return (
        <div>
        <nav>
            <NavLink to="/">Home</NavLink>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Contact</NavLink>
                    </nav>
        </div>

    )
}