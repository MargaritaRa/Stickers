import React, { useState, useEffect} from "react"
import SearchBar from "./SearchBar"

function StickerContainer({}){

    const URL = '/api/items'
    
    const[items, setItems] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(error => alert(error))
    }, [])

    return (
        <div >
            <SearchBar items ={items}/>   
        </div>
    )
}

export default StickerContainer