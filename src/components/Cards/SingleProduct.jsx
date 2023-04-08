import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SingleProduct = ({ product, addToCart }) => {
  const { name, picture, price, category } = product;
  return (
    <div className='bg-gray-100 rounded shadow-lg relative'>
      <img
        className='object-cover w-full h-56 rounded shadow-lg md:h-64 xl:h-60'
        src={picture}
        alt=''
      />
      <div className='absolute top-0 rounded-lg bg-black opacity-0 inset-0 flex flex-col px-2 py-4 text-white hover:opacity-50 transition duration-300'>
      <p className='mb-2 text-xl font-bold leading-none uppercase'>{name}</p>
      <p className='text-xs'>{category}</p>
      <div className='flex justify-between items-center mt-auto'>
      <p className='font-bold text-sm'>Price: {price}$</p>
      <ShoppingCartIcon className='h-6 w-6 text-cyan-400 cursor-pointer mr-2' onClick={() => addToCart(product)} />
      </div>
      </div>
    </div>
  )
}

export default SingleProduct;
