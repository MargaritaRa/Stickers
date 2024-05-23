import React from "react";
import { Link } from "react-router-dom"
import NavBar from "./NavBar";

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
        <div className="navBar">
            <NavBar />
        </div>

    </header>
)
}