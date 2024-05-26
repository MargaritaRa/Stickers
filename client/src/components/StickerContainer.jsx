import React, { useState, useEffect} from "react"
import Sticker from "./Sticker"

function StickerContainer({userId}){

    const URL = '/api/items'
    
    const[items, setItems] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => alert(error))
    }, [])

    const mappedItems = items.map(item => ( <Sticker key={item.id} itemId={item.id} userId={userId} name={item.name} price={item.price} image={item.image} category={item.category} />))

    return (
<<<<<<< HEAD

        <div>

        {mappedItems}

        </div>
=======
        <section className="sticker">
            <div className="sticker-container">
                {mappedItems}
            </div>
        </section>
        
>>>>>>> 1f51a458b0efcbbfe8e48546525c9adb0c616eb6

    )
}

export default StickerContainer