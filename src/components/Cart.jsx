
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContainer } from '../App';
import CartItem from './Cards/CartItem';
import { removeFromStorage } from './Utilities/Utility';
const Cart = () => {
    const [cartItems, setCartItems] = useContext(cartContainer);

    let total = 0;
    if(cartItems.length > 0) {
        total = cartItems.reduce((prev,curr) => prev + (curr.price)* curr.quantity,0);
    }

    function clearCart () {
        localStorage.removeItem('cartItem');
        setCartItems([]);
    }
    function deleteItem(id) {
        const remainingItems = cartItems.filter(item => item.id !== id);
        setCartItems(remainingItems);
        removeFromStorage(id);
    }
    return (
        <div className='flex flex-col items-center justify-center gap-3 min-h-[calc(100vh-157px)]'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cartItems.length > 0 ? 'Review cart Items' : 'Cart is EMPTY'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cartItems.map((product) => <CartItem key={product.id} product={product} deleteItem={deleteItem}/>)
                    }
                </ul>
                <div className="text-right space-y-1">
                    <p >Total amount: <span className='font-semibold'>{total}$</span></p>
                    <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
                </div>
                <div className='flex justify-end items-center space-x-4'>
                {
                    cartItems.length>0 ? <button onClick={clearCart} type='button' className='px-4 py-2 border rounded-full border-gray-500 duration-300 hover:bg-gray-300'>Clear Cart</button> : <Link to='/shop' className='px-4 py-2 border rounded-full border-gray-500 duration-300 hover:bg-gray-300'>Back to Shop</Link>
                }
                <button type='button' className='px-4 py-2 rounded-full duration-300 bg-cyan-300 hover:bg-cyan-400'>Proceed Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;