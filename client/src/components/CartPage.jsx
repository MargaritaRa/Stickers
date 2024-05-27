
import React, {useState, useEffect}  from "react"
import Sticker from "./Sticker"
import PaymentForm from './PaymentForm';




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

    const handleDelete = (itemId) => {
        fetch(`/api/carts/${itemId}`, {
          method: 'DELETE',
        })
          .then(res => {
            if (res.ok) {
              setCartItems(prevItems => prevItems.filter(item => item.item.id !== itemId));
            } else {
              throw new Error('Failed to delete item');
            }
          })
          .catch(error => {
            setError(error.message);
          });
      };
        

      const mappedCartItems = cartItems.map(cartItem => (
        <Sticker
          key={cartItem.id}
          name={cartItem.item.name}
          price={cartItem.item.price}
          image={cartItem.item.image}
          category={cartItem.item.category}
          itemId={cartItem.item.id}
          onDelete={handleDelete}
          inCart={true}
        />
      ));


      return (
        <div className="sticker-container">
          <h1 className="cartPage">This is Cart Page</h1>
          {error && <p className="error">{error}</p>}
          {mappedCartItems}
          <PaymentForm />
        </div>
      );
    }
    
     
