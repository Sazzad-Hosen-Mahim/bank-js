import React from 'react';

const Cart = (props) => {
const cart = props.cart
    return (
        <div>
            <h4>This is for product summury</h4>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;