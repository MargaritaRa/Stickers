import React, {useState} from "react"
import Sticker from "./Sticker"

export default function SearchBar({items, userId}){

    const [search, setSearch] = useState('')
    const mappedItems = items.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    .map(item=>{
        return(
            <Sticker key={item.id} itemId={item.id} userId={userId} name={item.name} price={item.price} image={item.image} category={item.category}/>
        )
    })

    return (
        <div>
            <div className="searchcontainer">
                <h3 className="sticker-sub-header"> Type Your Dream Sticker Here: </h3>
                <input class="searchinput" type="text" onChange={e=>setSearch(e.target.value)} value={search} placeholder="Roman loves monkey"/>
            </div>
            <section className="sticker">
                <div className="sticker-container">
                    {mappedItems}
                </div>
            </section>
        </div>

     
    )

}