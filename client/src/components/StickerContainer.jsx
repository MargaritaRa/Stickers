import React, { useState, useEffect} from "react"
import Sticker from "./Sticker"

function StickerContainer(){

    const URL = '/api/items'
    const[items, setItems] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => alert(error))
    }, [])

    const mappedItems = items.map(item => ( <Sticker key={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />))

    return (
       <div className="sticker-container">
        {mappedItems}
       </div>
    )
}

export default StickerContainer