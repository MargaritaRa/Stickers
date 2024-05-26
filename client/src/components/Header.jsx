import React from "react";
import NavBar from "./NavBar";

export default function Header(){
return(
    <header>
        <span className="logo" role="img">
            <h1>🧃Stickers🧃</h1> 
        </span>
        <div>
            <NavBar/>
        </div>
        

    </header>
)
}