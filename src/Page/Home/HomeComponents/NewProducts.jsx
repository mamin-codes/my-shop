import React from 'react';
import SectionHeading from '../../../Components/Shared/SectionHeading';
import useData from '../../../Hooks/useData';
import ProductCart from '../../../Components/Shared/ProductCart';

const NewProducts = () => {
    const { 
        products, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        isInCart, 
        getItemQuantity 
    } = useData();
    
    return (
        <div className="w-full max-w-full overflow-x-hidden">
            <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 mx-auto py-8 sm:py-12 lg:py-16">
                <div className="w-full">
                    <SectionHeading 
                        discription={"Don't Wait The time never be just right"} 
                        heading={"Day of Deals"} 
                        colorHeading={"The Deal"}
                    />
                </div>
                <div className="w-full">
                   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 lg:mt-10'>
                       {products.slice(-5).map(p => (
                           <ProductCart 
                               key={p.id} 
                               product={p}
                               addToCart={addToCart}
                               removeFromCart={removeFromCart}
                               updateQuantity={updateQuantity}
                               isInCart={isInCart}
                               getItemQuantity={getItemQuantity}
                           />
                       ))}
                   </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;