import React, { useState, useEffect} from "react"
import Sticker from "./Sticker"
import CartFunction from "./CartFunction"

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

        <div>
            <div>Sticker Container</div>
            <Sticker/>
     
     
        {mappedItems}
<<<<<<< HEAD
        {/* <button>Add to cart</button> */}
   

=======
>>>>>>> c0513f74968e9d194113f1e4eaad2b6f47e021a6
       </div>
    )
}

export default StickerContainer