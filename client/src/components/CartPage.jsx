import React, {useState, useEffect}  from "react"
import Sticker from "./Sticker"


export default function CartPage(){

    const [cartItems, setCartItems] = useState([])
    useEffect(()=>{
        fetch('/api/cart',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        }) 
        .then(res=>{
            if (res.ok){
                res.json()
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
        

    const mappedCartItems = cartItems.map(item => ( <Sticker key={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />))


    return (
        <div className="cart">
            <h1>This is Cart Page</h1>

        {mappedCartItems} 
            

        </div>
    )
}
