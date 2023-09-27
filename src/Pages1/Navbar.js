import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return(
        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Blog">Blog</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        </div>
        

    )
}
export default Navbar



/* <div>
<a href="/">Home</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a>
<a href="/About">About</a>
</div> */
