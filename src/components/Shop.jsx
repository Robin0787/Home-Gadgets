import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './Cards/SingleProduct';
import { addToStorage } from "./Utilities/Utility";
const Shop = () => {
    const allProducts  = useLoaderData();

    const addToCart = (id) => {
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