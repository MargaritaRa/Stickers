import React, {useState} from "react"
import Sticker from "./Sticker"

export default function SearchBar({items, userId}){

    const [search, setSearch] = useState('')
    const[selectedCategory, setSelectedCategory]=useState('All')

    const filteredItems = items.filter(item=>{
        const filteredcategory = selectedCategory == 'All' || item.category == selectedCategory
        const filteredsearch = item.name.toLowerCase().includes(search.toLowerCase())
        return filteredcategory && filteredsearch
    })

    const mappedItems = filteredItems.map(item=>{
        return(
            <Sticker key={item.id} itemId={item.id} userId={userId} name={item.name} price={item.price} image={item.image} category={item.category}/>
        )
    })

    return (
        <div>
            <div >
                <section className="searchcontainer">
                    <h3 className="sticker-sub-header"> Type Your Dream Sticker Here: </h3>
                    <input className="searchinput" type="text" onChange={e=>setSearch(e.target.value)} value={search} placeholder="Roman loves monkey"/>
                </section>

                <section className="searchcontainer">
                    <h3 className="sticker-sub-header"> Select Sticker Type Here: </h3>
                    <select className="searchinput" value={selectedCategory} onChange ={e=> setSelectedCategory(e.target.value)}>
                        <option value="All">🪐 All 🪐</option>
                        <option value="Artsy">🖼️ Artsy 🖼️</option>
                        <option value="Monkeys">🙈 Monkey 🙈</option>
                        <option value="Quotes">🌝 Quotes 🌝</option>
                    </select>
                </section>

            </div>
            <section className="sticker">
                <div className="sticker-container">
                    {mappedItems}
                </div>
            </section>
        </div>

     
    )

}