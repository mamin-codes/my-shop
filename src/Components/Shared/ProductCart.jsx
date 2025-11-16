import React, { useState } from 'react';
import { MdOutlineStarPurple500, MdFavoriteBorder, MdFavorite, MdAddShoppingCart } from 'react-icons/md';
import { TbCurrencyTaka, TbEye } from 'react-icons/tb';
import { Link } from 'react-router';

const ProductCart = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

    return (
        <div 
            className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image Container */}
            <div className="relative overflow-hidden bg-gray-50">
                <img 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={product.image} 
                    alt={product.name}
                />
                
                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        -{discount}%
                    </div>
                )}
                
                {/* Wishlist Button */}
                <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                    {isWishlisted ? (
                        <MdFavorite className="text-red-500 text-xl" />
                    ) : (
                        <MdFavoriteBorder className="text-gray-600 text-xl hover:text-red-500" />
                    )}
                </button>

                {/* Quick Actions Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex justify-center gap-3">
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                            <TbEye className="text-lg" />
                            Quick View
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-green-600 transition-colors duration-300 shadow-lg">
                            <MdAddShoppingCart className="text-lg" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <Link to={`/shop/${product.id}`}>
                <div className="p-5">
                    {/* Category */}
                    <p className="text-green-600 text-sm font-medium uppercase tracking-wide mb-1">
                        {product.categoryName}
                    </p>
                    
                    {/* Product Name */}
                    <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 hover:text-green-600 transition-colors duration-300">
                        {product.name}
                    </h3>
                    
                    {/* Ratings */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, index) => (
                                <MdOutlineStarPurple500 key={index} className="text-lg" />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">(4.8)</span>
                    </div>
                    
                    {/* Price Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-bold text-gray-900 flex items-center">
                                {product.price}
                                <TbCurrencyTaka className="ml-0.5" />
                            </p>
                            {product.mrp > product.price && (
                                <p className="text-lg text-gray-400 line-through flex items-center">
                                    {product.mrp}
                                    <TbCurrencyTaka className="ml-0.5" />
                                </p>
                            )}
                        </div>
                        
                        {/* Add to Cart Button - Mobile */}
                        <button className="lg:hidden bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
                            <MdAddShoppingCart className="text-xl" />
                        </button>
                    </div>
                </div>
            </Link>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
        </div>
    );
};

export default ProductCart;