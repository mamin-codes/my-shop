import React, { useState } from 'react';
import { MdOutlineStarPurple500, MdFavoriteBorder, MdFavorite, MdAddShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';
import { TbEye } from 'react-icons/tb';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCart = ({ 
    product, 
    addToCart, 
    isInCart, 
    getItemQuantity,
    updateQuantity,
    removeFromCart 
}) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
    const cartQuantity = getItemQuantity ? getItemQuantity(product.id) : 0;

    const handleAddToCart = async (e) => {
        if (e) e.preventDefault();
        if (isInCart && isInCart(product.id)) return;
        
        setIsAdding(true);
        try {
            if (addToCart) {
                await addToCart(product);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsAdding(false);
        }
    };

    const handleRemoveFromCart = (e) => {
        if (e) e.preventDefault();
        if (removeFromCart) {
            removeFromCart(product.id);
        }
    };

    const handleIncrement = (e) => {
        if (e) e.preventDefault();
        if (updateQuantity && isInCart(product.id)) {
            updateQuantity(product.id, cartQuantity + 1);
        }
    };

    const handleDecrement = (e) => {
        if (e) e.preventDefault();
        if (updateQuantity && isInCart(product.id)) {
            if (cartQuantity > 1) {
                updateQuantity(product.id, cartQuantity - 1);
            } else {
                handleRemoveFromCart(e);
            }
        }
    };

    const productInCart = isInCart ? isInCart(product.id) : false;

    return (
        <div 
            className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ minHeight: '480px' }}
        >
            {/* Product Image Container */}
            <div className="relative overflow-hidden bg-gray-50 flex-shrink-0">
                <img 
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                />
                
                {/* Discount Badge */}
                {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        -{discount}%
                    </div>
                )}
                
                {/* Stock Status */}
                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold shadow-lg ${
                    product.stock === "In Stock" 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                }`}>
                    {product.stock}
                </div>
                
                {/* Cart Status Badge */}
                {productInCart && (
                    <div className="absolute top-12 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                        <FaCheck className="text-xs" />
                        In Cart ({cartQuantity})
                    </div>
                )}
                
                {/* Wishlist Button */}
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        setIsWishlisted(!isWishlisted);
                    }}
                    className="absolute top-12 right-3 bg-white/90 backdrop-blur-sm w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                    {isWishlisted ? (
                        <MdFavorite className="text-red-500 text-lg sm:text-xl" />
                    ) : (
                        <MdFavoriteBorder className="text-gray-600 text-lg sm:text-xl hover:text-red-500" />
                    )}
                </button>

                {/* Quick Actions Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex justify-center gap-2 sm:gap-3">
                        <button className="bg-white text-gray-800 px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2 hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                            <TbEye className="text-base sm:text-lg" />
                            <span className="hidden sm:inline">Quick View</span>
                        </button>
                        
                        {!productInCart ? (
                            <button 
                                onClick={handleAddToCart}
                                disabled={isAdding}
                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isAdding ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <MdAddShoppingCart className="text-base sm:text-lg" />
                                )}
                                <span className="hidden sm:inline">
                                    {isAdding ? 'Adding...' : 'Add to Cart'}
                                </span>
                            </button>
                        ) : (
                            <div className="flex items-center gap-2 bg-white rounded-full shadow-lg">
                                <button 
                                    onClick={handleDecrement}
                                    className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-l-full transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-sm font-semibold text-gray-700 min-w-6 text-center">
                                    {cartQuantity}
                                </span>
                                <button 
                                    onClick={handleIncrement}
                                    className="w-8 h-8 flex items-center justify-center text-green-500 hover:bg-green-50 rounded-r-full transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <Link to={`/shop/${product.id}`} className="flex-1 flex flex-col">
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    {/* Category & Brand */}
                    <div className="mb-2">
                        <p className="text-green-600 text-xs sm:text-sm font-medium uppercase tracking-wide">
                            {product.categoryName}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            {product.brand}
                        </p>
                    </div>
                    
                    {/* Product Name */}
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 line-clamp-2 hover:text-green-600 transition-colors duration-300 flex-1">
                        {product.name}
                    </h3>
                    
                    {/* Ratings */}
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <div className="flex gap-0.5 text-amber-400">
                            {[...Array(5)].map((_, index) => (
                                <MdOutlineStarPurple500 
                                    key={index} 
                                    className={`text-sm sm:text-base ${
                                        index < Math.floor(product.rating || product.ratings / 100) 
                                            ? 'text-amber-400 fill-amber-400' 
                                            : 'text-gray-300'
                                    }`} 
                                />
                            ))}
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm">
                            ({product.ratings} reviews)
                        </span>
                    </div>
                    
                    {/* Price Section */}
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">
                                ${product.price}
                            </p>
                            {product.mrp > product.price && (
                                <p className="text-base sm:text-lg text-gray-400 line-through">
                                    ${product.mrp}
                                </p>
                            )}
                        </div>
                        
                        {/* Cart Actions - Mobile */}
                        {!productInCart ? (
                            <button 
                                onClick={handleAddToCart}
                                disabled={isAdding}
                                className="lg:hidden bg-green-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 disabled:opacity-50"
                            >
                                {isAdding ? (
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <MdAddShoppingCart className="text-lg sm:text-xl" />
                                )}
                            </button>
                        ) : (
                            <div className="lg:hidden flex items-center gap-2 bg-green-500 text-white rounded-full shadow-lg">
                                <button 
                                    onClick={handleDecrement}
                                    className="w-8 h-8 flex items-center justify-center hover:bg-green-600 rounded-l-full transition-colors"
                                >
                                    -
                                </button>
                                <span className="text-sm font-semibold min-w-6 text-center">
                                    {cartQuantity}
                                </span>
                                <button 
                                    onClick={handleIncrement}
                                    className="w-8 h-8 flex items-center justify-center hover:bg-green-600 rounded-r-full transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Weight Options */}
                    {product.weightOptions && product.weightOptions.length > 0 && (
                        <div className="mt-3">
                            <p className="text-gray-500 text-xs mb-2">Sizes:</p>
                            <div className="flex flex-wrap gap-1">
                                {product.weightOptions.slice(0, 3).map((weight, index) => (
                                    <span 
                                        key={index}
                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200"
                                    >
                                        {weight}
                                    </span>
                                ))}
                                {product.weightOptions.length > 3 && (
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200">
                                        +{product.weightOptions.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </Link>

            {/* Cart Status Indicator */}
            {productInCart && (
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                    ✓ In Cart ({cartQuantity})
                </div>
            )}

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 pointer-events-none ${
                productInCart ? 'border-green-500/30' : 'border-transparent group-hover:border-green-500/20'
            }`}></div>
        </div>
    );
};

export default ProductCart;