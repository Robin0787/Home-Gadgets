import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { cartContainer, productContainer } from '../App';
import SingleProduct from './Cards/SingleProduct';
import { addToStorage } from "./Utilities/Utility";
const Shop = () => {
    const allProducts = useContext(productContainer);
    const [cartItems, setCartItems] = useContext(cartContainer);

    const addToCart = (product) => {
        const isExists = cartItems.find(item => item.id === product.id);
        if(isExists){
            // ## Way Number one
            // This will work because product is an object which is a reference value. 
            // product.quantity++;

            // ## Way Number two
            const rest = cartItems.filter(item => item.id !== isExists.id);
            isExists.quantity = isExists.quantity + 1;   // Or isExists.quantity++
            setCartItems([...rest, isExists]) ;
        } else {
            product.quantity = 1;
            setCartItems((prev => [...prev, product]));
        }
        toast.success('Item Added! 👍');
        addToStorage(product.id);
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