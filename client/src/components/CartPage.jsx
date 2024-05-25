
import React, {useState, useEffect}  from "react"
import Sticker from "./Sticker"



export default function CartPage(){

    const [error, setError] = useState(null)
    const [cartItems, setCartItems] = useState([])
    useEffect(()=>{
        fetch('/api/carts') 
        .then(res=>{
            if (res.ok){
                return res.json()
            }else{
                throw new Error ('Failed to fetch cart items')
            }
        })
        .then(data=>{
            setCartItems(data)
        })
        .catch(error=>{
            setError(error.message)
        })
    }, [])
    console.log("cartitems: ",cartItems)
        

    const mappedCartItems = cartItems.map(cartitem => ( <Sticker 
        key={cartitem.id} 
        name={cartitem.item.name} 
        price={cartitem.item.price} 
        image={cartitem.item.image} 
        category={cartitem.item.category}
        itemId={cartitem.item.id} />))


    return (
        <div className="cart">
            <h1>This is Cart Page</h1>

        {mappedCartItems} 
            

        </div>
    )
}
