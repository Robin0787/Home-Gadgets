import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-157px)]'>
            <p className="text-7xl font-thin">L</p>
            <div className='h-10 w-10 mt-5 rounded-full border-8 border-dotted border-blue-500 animate-spin'></div>
            <p className='text-7xl font-thin'>ading</p>
        </div>
    );
};

export default Loading;