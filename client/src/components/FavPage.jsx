import React from "react"
import Sticker from "./Sticker"

export default function Fav({favs}){

    console.log("favs", favs)
    return (
        <div className="fav">
                
                <h1>These are your Fav Items</h1>
                <ul>
                    {favs.map(item => ( <Sticker key={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />))}
                    
                </ul>
              
        </div>
    )
}
