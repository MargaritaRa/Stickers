import React from "react"
import StickerContainer from "./StickerContainer"

export default function Home({userId}){
    return (
        <div className="home">
            <h1>This is Home Page</h1>

            <StickerContainer uderId={userId}/>
            

        </div>
    )
}
