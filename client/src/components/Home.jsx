import React from "react"
import {Outlet} from 'react-router-dom'
import StickerContainer from "./StickerContainer"


export default function Home(){
    return (
        <div className="home">
            <h1>This is Home Page</h1>
            <StickerContainer />
            <Outlet  />
        </div>
    )
}