import React, { useState } from 'react';
import useData from '../../Hooks/useData'; // Fixed import path
import { 
    FaShoppingCart, 
    FaTrash, 
    FaPlus, 
    FaMinus, 
    FaArrowRight,
    FaShoppingBag,
    FaCheckCircle
} from 'react-icons/fa';
import { Link } from 'react-router';

const AddCart = () => {
    const { 
        cart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        getCartTotalItems, 
        getCartTotalPrice
    } = useData();

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    const calculateItemTotal = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    const getShippingCost = () => {
        const total = getCartTotalPrice();
        return total > 50 ? 0 : 5.99;
    };

    const getTotalWithShipping = () => {
        return (getCartTotalPrice() + getShippingCost()).toFixed(2);
    };

    if (!cart || cart.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 py-8 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Shopping <span className="text-green-600">Cart</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Your cart is waiting to be filled with amazing products
                        </p>
                    </div>
                </div>

                {/* Empty Cart State */}
                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 sm:p-12 text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaShoppingCart className="text-green-600 text-3xl sm:text-4xl" />
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Your cart is empty
                    </h2>
                    
                    <p className="text-gray-600 mb-8 text-lg">
                        Looks like you haven't added any items to your cart yet.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/shop"
                            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                        >
                            <FaShoppingBag />
                            Start Shopping
                        </Link>
                        
                        <Link 
                            to="/"
                            className="bg-white text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold text-lg border border-gray-200 hover:border-green-300 transition-all duration-300 flex items-center justify-center gap-3"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30 py-8 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                            Shopping <span className="text-green-600">Cart</span>
                        </h1>
                        <p className="text-gray-600 text-lg">
                            {getCartTotalItems()} {getCartTotalItems() === 1 ? 'item' : 'items'} in your cart
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={clearCart}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <FaTrash />
                            Clear Cart
                        </button>
                        
                        <Link 
                            to="/shop"
                            className="bg-white text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-2xl font-semibold border border-gray-200 hover:border-green-300 transition-all duration-300 flex items-center gap-2"
                        >
                            <FaShoppingBag />
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                    {cart.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-2xl shadow-md"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-500 text-sm mb-3">
                                                    {item.brand} • {item.categoryName}
                                                </p>
                                                
                                                {/* Price */}
                                                <div className="flex items-center gap-3 mb-4">
                                                    <span className="text-2xl font-bold text-gray-900">
                                                        ${item.price}
                                                    </span>
                                                    {item.mrp > item.price && (
                                                        <span className="text-lg text-gray-400 line-through">
                                                            ${item.mrp}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors duration-300 self-start sm:self-center"
                                            >
                                                <FaTrash className="text-lg" />
                                            </button>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center justify-between sm:justify-start sm:gap-8 pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <span className="text-gray-700 font-medium">Quantity:</span>
                                                <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1">
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                        className="w-8 h-8 rounded-full bg-white shadow-sm hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                                                    >
                                                        <FaMinus className="text-xs" />
                                                    </button>
                                                    
                                                    <span className="w-12 text-center font-bold text-gray-900">
                                                        {item.quantity}
                                                    </span>
                                                    
                                                    <button
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                        className="w-8 h-8 rounded-full bg-white shadow-sm hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                                                    >
                                                        <FaPlus className="text-xs" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Item Total */}
                                            <div className="text-right sm:text-left">
                                                <div className="text-sm text-gray-500">Total:</div>
                                                <div className="text-xl font-bold text-green-600">
                                                    ${calculateItemTotal(item.price, item.quantity)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 sticky top-8">
                        <div className="p-6 sm:p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
                            
                            {/* Summary Details */}
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Items ({getCartTotalItems()})</span>
                                    <span>${getCartTotalPrice().toFixed(2)}</span>
                                </div>
                                
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className={getShippingCost() === 0 ? "text-green-600 font-semibold" : ""}>
                                        {getShippingCost() === 0 ? "FREE" : `$${getShippingCost()}`}
                                    </span>
                                </div>
                                
                                {getShippingCost() === 0 && (
                                    <div className="text-green-600 text-sm bg-green-50 p-3 rounded-xl">
                                        🎉 Free shipping on orders over $50!
                                    </div>
                                )}
                                
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${getTotalWithShipping()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mb-4">
                                <FaCheckCircle />
                                Proceed to Checkout
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            {/* Security Badge */}
                            <div className="text-center text-gray-500 text-sm">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                        <FaCheckCircle className="text-white text-xs" />
                                    </div>
                                    Secure checkout • 256-bit SSL encrypted
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Promotional Banner */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white mt-6 shadow-lg">
                        <h4 className="font-bold text-lg mb-2">🎁 Special Offer!</h4>
                        <p className="text-sm opacity-90">
                            Add ${(50 - getCartTotalPrice()).toFixed(2)} more to get FREE shipping!
                        </p>
                        <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                            <div 
                                className="bg-white h-2 rounded-full transition-all duration-500"
                                style={{ 
                                    width: `${Math.min((getCartTotalPrice() / 50) * 100, 100)}%` 
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recently Viewed / Recommendations */}
            <div className="max-w-7xl mx-auto mt-16">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h3>
                    <div className="text-center text-gray-500 py-8">
                        <p>Recommendations based on your cart items</p>
                        <Link 
                            to="/shop" 
                            className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 mt-4"
                        >
                            Explore more products <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCart;