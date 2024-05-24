import React from "react"
import StickerContainer from "./StickerContainer"

function ShopNow({userId}){
    
    return (
        <div className="shopnow">
            <h1 className="sticker-header">Stickers</h1>
            <h3 className="sticker-sub-header"> So much to choose from</h3>
            <StickerContainer userId={userId}/>
        </div>
    )
}

export default ShopNow