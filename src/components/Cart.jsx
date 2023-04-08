
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from './Utilities/Utility';

const Cart = () => {
    const allItems = useLoaderData();
    const cartItems = getStoredData();
    let cartProducts = [];
    for(let id in cartItems){
        const foundProduct = allItems.find(item => item.id === id);
        if(foundProduct) {
            foundProduct.quantity = cartItems[id];
            cartProducts.push(foundProduct);
        }
    }
    console.log(cartProducts);
    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;