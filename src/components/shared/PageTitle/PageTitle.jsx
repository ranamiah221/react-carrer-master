import React from 'react';

const PageTitle = ({title, shortTitle}) => {
    return (
        <div className='text-center mb-4'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-base font-normal text-gray-400'>{shortTitle}</p>
        </div>
    );
};

export default PageTitle;