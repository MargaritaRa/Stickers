import React from "react"
import StickerContainer from "./StickerContainer"

function ShopNow({userId}){
    
    return (
        <div className="shopnow">
            <h1 className="header-shopNow">Shop Now</h1>
            <StickerContainer userId={userId}/>
        </div>
    )
}

export default ShopNow