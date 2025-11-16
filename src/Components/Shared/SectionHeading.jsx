import React from 'react';

const SectionHeading = ({heading, colorHeading, discription}) => {
    return (
        <div className="w-full max-w-full px-2 sm:px-0">
             <h2 className='text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-semibold break-words'>
                 {heading} 
                 <span className='text-green-600'>{colorHeading}</span>
             </h2>
            
             <p className='text-gray-500 text-sm sm:text-base mt-2 break-words max-w-full'>
                 {discription}
             </p>
        </div>
    );
};

export default SectionHeading;