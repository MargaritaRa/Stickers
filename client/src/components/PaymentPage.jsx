import React from 'react';
import PaymentForm from './PaymentForm'
import Download from './Downaload'
import { useState, useEffect } from 'react';

function PaymentPage() {
    const [cartItems, setCartItems] = useState([])
    const [toggle, setToggle] = useState(false)
    const [stickerArr, setStickerArr] = useState([])

    useEffect(()=>{
        fetch('/api/carts') 
        .then(res=>{
            if (res.ok){
                return res.json()
            }
            else {
                throw new Error ('Failed to fetch cart items')
            }
        })
        .then(data=>{
            setCartItems(data);
            setStickerArr(stickerArr => [])
            data.map(item => setStickerArr(stickerArr => [...stickerArr, item.item.image]))
        })
        .catch(error=>{
            setError(error.message)
        })
    }, [])

    const totalAmount = cartItems.reduce((acc, cartItem) => acc + cartItem.item.price, 0);
    console.log(stickerArr)
    return (
        <div>
            <h1>Payment Page</h1>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.item.name} - ${item.item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            {toggle ? <Download stickerArr={stickerArr}/> : <PaymentForm amount={totalAmount} setToggle={setToggle}/> }
        </div>
    );
}

export default PaymentPage;

