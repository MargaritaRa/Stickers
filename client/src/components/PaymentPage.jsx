
import React from 'react';
import PaymentForm from './PaymentForm'

function PaymentPage({ totalAmount, cartItems }) {
    return (
        <div>
            <h1>Payment Page</h1>
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <PaymentForm amount={totalAmount} />
        </div>
    );
}

export default PaymentPage;

