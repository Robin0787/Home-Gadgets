import React, { useContext } from 'react';
import { cartContainer, productContainer } from '../App';
import SingleProduct from './Cards/SingleProduct';
import { addToStorage } from "./Utilities/Utility";
const Shop = () => {
    const allProducts = useContext(productContainer);
    const [cartItems, setCartItems] = useContext(cartContainer);
    const addToCart = (id) => {
        const fountItem = allProducts.find(item => item.id === id);
        setCartItems((prev => [...prev, fountItem]));
        addToStorage(id);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-24 lg:px-16 py-10'>
            {
                allProducts.map(product => <SingleProduct key={product.id} product={product} addToCart={addToCart}/>)
            }
        </div>
    );
};

export default Shop;