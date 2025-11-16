import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const MidHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems] = useState(3); // Mock cart item count
    const [wishlistItems] = useState(2); // Mock wishlist item count

    return (
        <div className='bg-white shadow-lg border-b border-gray-100  w-full max-w-full overflow-x-hidden box-border'>
            <div className='container mx-auto px-3 sm:px-4 md:px-8 lg:px-8 py-4'>
                {/* Main Header Content */}
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex items-center flex-shrink-0'>
                        <img 
                            className='h-8 sm:h-10 lg:h-12 hover:scale-105 transition-transform duration-300 cursor-pointer' 
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/logo/logo.png" 
                            alt="Grabit Logo" 
                        />
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className='hidden lg:flex flex-1 max-w-2xl mx-4 lg:mx-8'>
                        <div className='relative w-full'>
                            <div className='relative flex items-center'>
                                <input 
                                    type="search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search for products, brands and more..."
                                    className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-gray-50 focus:bg-white outline-none'
                                />
                                <div className='absolute left-4 text-gray-400'>
                                    <FaSearch className='text-lg' />
                                </div>
                                <button className='absolute right-2 bg-green-600 text-white px-4 lg:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold text-sm lg:text-base'>
                                    Search
                                </button>
                            </div>
                            
                            {/* Search Suggestions - FIXED: Added max-width and left/right constraints */}
                            {searchQuery && (
                                <div className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-2xl mt-2 z-50 max-h-80 overflow-y-auto w-full max-w-full'>
                                    <div className='p-4 w-full'>
                                        <p className='text-sm text-gray-500 mb-3'>Popular Searches</p>
                                        <div className='space-y-2 w-full'>
                                            <div className='flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200 w-full'>
                                                <FaSearch className='text-gray-400 text-sm flex-shrink-0' />
                                                <span className='text-gray-700 truncate'>Smartphones</span>
                                            </div>
                                            <div className='flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200 w-full'>
                                                <FaSearch className='text-gray-400 text-sm flex-shrink-0' />
                                                <span className='text-gray-700 truncate'>Laptops</span>
                                            </div>
                                            <div className='flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200 w-full'>
                                                <FaSearch className='text-gray-400 text-sm flex-shrink-0' />
                                                <span className='text-gray-700 truncate'>Headphones</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className='flex items-center gap-3 sm:gap-4 lg:gap-6 flex-shrink-0'>
                        {/* Wishlist */}
                        <div className='hidden md:flex items-center gap-2 group cursor-pointer relative'>
                            <div className='relative'>
                                <FaHeart className='text-xl lg:text-2xl text-gray-600 group-hover:text-red-500 transition-colors duration-300' />
                                {wishlistItems > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-bold'>
                                        {wishlistItems}
                                    </span>
                                )}
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300'>Wishlist</p>
                            </div>
                        </div>

                        {/* Account */}
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <div className='bg-gray-100 p-1 sm:p-2 rounded-full group-hover:bg-green-100 transition-colors duration-300'>
                                <FaRegUser className='text-lg sm:text-xl text-gray-600 group-hover:text-green-600 transition-colors duration-300' />
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500'>Welcome</p>
                                <p className='text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300'>Account & Lists</p>
                            </div>
                        </div>

                        {/* Cart */}
                        <div className='flex items-center gap-2 group cursor-pointer relative'>
                            <div className='relative'>
                                <FaShoppingCart className='text-xl lg:text-2xl text-gray-600 group-hover:text-green-600 transition-colors duration-300' />
                                {cartItems > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-bold'>
                                        {cartItems}
                                    </span>
                                )}
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500'>Your</p>
                                <p className='text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300'>Shopping Cart</p>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className='lg:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300 flex-shrink-0'>
                            <IoMenuOutline className='text-xl text-gray-600' />
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className='lg:hidden pt-4'>
                    <div className='relative'>
                        <input 
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search products..."
                            className='w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-gray-50 focus:bg-white outline-none'
                        />
                        <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
                            <CiSearch className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidHeader;