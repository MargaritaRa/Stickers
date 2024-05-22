import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer">

            <a className="footer_inner" href="https://github.com/MargaritaRa/Stickers.git">GitHub</a>
            <br />
            <Link className="footer_inner" to="/">Home</Link>
            <br />
            <Link className="footer_inner" to="/cart">Cart</Link>
            <br />
            <Link className="footer_inner" to="/fav">Fav</Link>
            <br />
            <Link className="footer_inner" to="/userPanel">Login</Link>
        


        </div>
    )
}

