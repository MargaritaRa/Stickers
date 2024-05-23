import React from "react";
import { Link } from "react-router-dom"

export default function Header(){
return(
    <header>
        <h1>
            <span className="logo" role="img">
            🧃
            </span>
            Stickers 
            <span className="logo" role="img">
            🧃
            </span>
        </h1>
            <br />
        <h3>
            <Link className="footer_inner" to="/">Home</Link>
            <br />
            <Link className="footer_inner" to="/cart">Cart</Link>
            <br />
            <Link className="footer_inner" to="/fav">Fav</Link>
            <br />
            <Link className="footer_inner" to="/userPanel">Login</Link>
        
        </h3>


     

    </header>
)
}