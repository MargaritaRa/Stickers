<<<<<<< HEAD
import React, {useState, useEffect}  from "react"
import Sticker from "./Sticker"
=======
import React from "react"
// import ButtonGroup from "@material-ui/core/ButtonGroup"
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
>>>>>>> ccb39db0f98fe368d5aff4279e73bd256d5f07b4


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
<<<<<<< HEAD
            <h1>This is Cart Page</h1>

        {mappedCartItems} 
            
=======
                <h1>This is Cart Page</h1>
>>>>>>> ccb39db0f98fe368d5aff4279e73bd256d5f07b4

        </div>
    )
}
