import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-github">
                <a className="footer_inner" href="https://github.com/MargaritaRa/Stickers.git">Margarita's GitHub</a>
                <a className="footer_inner" href="https://github.com/Cornelia1425">Yiran's GitHub</a>
                <a className="footer_inner" href="https://github.com/retinakundu94">Retina's GitHub</a>
                <a className="footer_inner" href="https://github.com/RomanLatipov">Roman's GitHub</a>
            </div>
            <div className="footer-links">
                <Link className="footer_inner" to="/">Home</Link>
                <Link className="footer_inner" to="/cart">Cart</Link>
                <Link className="footer_inner" to="/shopnow">Shop Now</Link>
                <Link className="footer_inner" to="/userPanel">Login</Link>
            </div>
        </div>
    )
}

