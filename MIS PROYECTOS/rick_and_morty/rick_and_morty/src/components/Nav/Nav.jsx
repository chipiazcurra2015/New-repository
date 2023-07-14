import React from "react";
import SearchBar from "../SearchBar/SearchBar" 
import { Link, NavLink } from "react-router-dom";


const Nav = ({onSearch})=>  {

    return(
        <div>
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"><h3>ABOUT</h3>T</Link>
            <Link to="/home"><h3>HOME</h3>T</Link>
            <Link to="/Favorites"><h3>Favorites</h3>T</Link>
        </div>
    )
    
}

export default Nav;