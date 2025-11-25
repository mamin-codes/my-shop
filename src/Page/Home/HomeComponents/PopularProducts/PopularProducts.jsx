import React, { useState } from 'react';
import SectionHeading from '../../../../Components/Shared/SectionHeading';
import useData from '../../../../Hooks/useData';
import ProductCart from '../../../../Components/Shared/ProductCart';
import { TbCategory, TbGridDots } from 'react-icons/tb';
import { FaArrowRight, FaFire, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const PopularProducts = () => {
    const { 
        category, 
        products, 
        cart, 
        addToCart, 
        removeFromCart, 
        isInCart, 
        getCartTotalItems,
        getItemQuantity,
        updateQuantity 
    } = useData();
    
    const [categoryId, setCategoryId] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleCategoryId = (id) => {
        setCategoryId(id);
        setActiveFilter(id || 'all');
    };

    const filterProducts = categoryId ? products.filter(p => p.categoryId == categoryId) : products;

    const filters = [
        { id: 'all', name: 'All Products' },
        ...category.map(cat => ({ id: cat.id, name: cat.name }))
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gray-50 rounded-3xl my-5 sm:my-10 relative overflow-x-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-0 top-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute right-0 bottom-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Header Section */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12">
                <div className="mb-6 lg:mb-0">
                    <SectionHeading
                        heading={"Popular"}
                        colorHeading={"Products"}
                        discription={"Shop online for new arrivals and get free shipping!"}
                    />
                    
                    {/* Cart Summary */}
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200">
                            <FaShoppingCart className="text-green-600 text-sm" />
                            <span className="text-sm font-medium text-gray-700">
                                {getCartTotalItems()} items in cart
                            </span>
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => handleCategoryId(filter.id === 'all' ? null : filter.id)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base ${
                                activeFilter === filter.id
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-green-300'
                            }`}
                        >
                            {filter.id === 'all' ? (
                                <span className="flex items-center gap-1 sm:gap-2">
                                    <TbGridDots className="text-base sm:text-lg" />
                                    {filter.name}
                                </span>
                            ) : (
                                filter.name
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {filterProducts
                    .sort((a, b) => (b.rating || b.ratings) - (a.rating || a.ratings))
                    .slice(0, 10)
                    .map((product, index) => (
                        <div
                            key={product.id}
                            className="transform hover:scale-105 transition-transform duration-500"
                        >
                            <ProductCart 
                                product={product} 
                                addToCart={addToCart}
                                isInCart={isInCart}
                                getItemQuantity={getItemQuantity}
                                updateQuantity={updateQuantity}
                                removeFromCart={removeFromCart}
                            />
                        </div>
                    ))
                }
            </div>

            {/* View All Products CTA */}
            <div className="relative z-10 text-center">
                <Link to="/shop">
                    <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto">
                        <FaFire className="text-lg sm:text-xl animate-pulse" />
                        View All Products
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </Link>

                {/* Additional Info */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-600">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm">Free shipping over $50</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm">30-day guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm">Secure payments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;