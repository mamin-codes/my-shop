import React, { useState, useEffect, useRef } from 'react';
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";
import { FaTimes, FaStar, FaFire } from "react-icons/fa";
import { IoMenuOutline, IoFlashOutline } from "react-icons/io5";
import { Link } from 'react-router';
import useData from '../../../Hooks/useData';

const MidHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [currentView, setCurrentView] = useState('login');
    const [activeCart, setActiveCart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // Use cart data from your useData hook
    const { 
        cart, 
        getCartTotalItems, 
        getCartTotalPrice,
        addToCart,
        removeFromCart,
        isInCart
    } = useData();
    
    const mobileMenuRef = useRef(null);
    const authModalRef = useRef(null);
    const searchRef = useRef(null);

    // Calculate cart items and total price
    const cartItems = getCartTotalItems();
    const cartTotalPrice = getCartTotalPrice();

    // Fetch categories and products from your API
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [categoriesRes, productsRes] = await Promise.all([
                    fetch('/Category.json'),
                    fetch('/Products.json')
                ]);
                
                const categoriesData = await categoriesRes.json();
                const productsData = await productsRes.json();
                
                setCategories(Array.isArray(categoriesData) ? categoriesData : categoriesData.categories || []);
                setProducts(Array.isArray(productsData) ? productsData : productsData.products || []);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Fallback data in case API fails
                setCategories([]);
                setProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Search functionality
    useEffect(() => {
        if (searchQuery.trim()) {
            const results = products.filter(product => 
                product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.brand?.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 5);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, products]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
            if (authModalRef.current && !authModalRef.current.contains(event.target)) {
                setShowAuthModal(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchQuery('');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log('Searching for:', searchQuery);
            // Navigate to search results page or filter products
        }
    };

    const handleCartClick = () => {
        setActiveCart(true);
        setTimeout(() => setActiveCart(false), 600);
    };

    const handleAccountClick = () => {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
            setIsMobileMenuOpen(true);
        } else {
            setShowAuthModal(true);
            setCurrentView('login');
        }
    };

    const handleProductClick = (productId) => {
        setSearchQuery('');
        setSearchResults([]);
        // Navigate to product detail page
        console.log('Navigate to product:', productId);
    };

    // Add to cart from search results
    const handleAddToCartFromSearch = (product, e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    // Remove from cart from search results
    const handleRemoveFromCartFromSearch = (productId, e) => {
        e.preventDefault();
        e.stopPropagation();
        removeFromCart(productId);
    };

    // Get featured products for mobile menu
    const featuredProducts = products
        .filter(product => product.discount > 30)
        .slice(0, 4);

    return (
        <div className='bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm'>
            {/* Main Header */}
            <div className='container mx-auto px-4 py-3'>
                <div className='flex items-center justify-between gap-6'>
                    {/* Logo & Mobile Menu */}
                    <div className='flex items-center gap-4 flex-shrink-0'>
                        <button 
                            onClick={() => setIsMobileMenuOpen(true)}
                            className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
                        >
                            <IoMenuOutline className='text-2xl text-gray-600' />
                        </button>

                        <Link to="/" className='flex items-center gap-3'>
                            <div className='w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg'>
                                <span className='text-white font-bold text-xl'>G</span>
                            </div>
                            <div className='hidden sm:block'>
                                <h1 className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-emerald-600 bg-clip-text text-transparent'>
                                    Grabit
                                </h1>
                                <p className='text-xs text-gray-500'>Quick & Easy Shopping</p>
                            </div>
                        </Link>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className='hidden lg:flex flex-1 max-w-2xl' ref={searchRef}>
                        <form onSubmit={handleSearch} className='relative w-full'>
                            <div className='relative'>
                                <input 
                                    type="search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products, brands, categories..."
                                    className='w-full pl-12 pr-24 py-4 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white'
                                />
                                <CiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
                                <button 
                                    type="submit"
                                    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-200'
                                >
                                    Search
                                </button>
                            </div>
                            
                            {/* Search Results Dropdown */}
                            {searchQuery && searchResults.length > 0 && (
                                <div className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-2xl mt-3 z-50 max-h-96 overflow-y-auto'>
                                    <div className='p-4'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <p className='text-sm font-semibold text-gray-700'>
                                                Found {searchResults.length} products
                                            </p>
                                            <span className='text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full'>
                                                Live Search
                                            </span>
                                        </div>
                                        <div className='space-y-3'>
                                            {searchResults.map((product) => {
                                                const productInCart = isInCart(product.id);
                                                return (
                                                    <div 
                                                        key={product.id}
                                                        onClick={() => handleProductClick(product.id)}
                                                        className='flex items-center gap-4 p-3 rounded-xl hover:bg-emerald-50 cursor-pointer transition-all duration-300 group border border-transparent hover:border-emerald-200'
                                                    >
                                                        <img 
                                                            src={product.image} 
                                                            alt={product.name}
                                                            className='w-12 h-12 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300'
                                                        />
                                                        <div className='flex-1 min-w-0'>
                                                            <h4 className='font-semibold text-gray-900 truncate group-hover:text-emerald-700 transition-colors duration-300'>
                                                                {product.name}
                                                            </h4>
                                                            <div className='flex items-center gap-2 mt-1'>
                                                                <span className='text-sm font-bold text-emerald-600'>
                                                                    ${product.price}
                                                                </span>
                                                                {product.mrp > product.price && (
                                                                    <span className='text-sm text-gray-500 line-through'>
                                                                        ${product.mrp}
                                                                    </span>
                                                                )}
                                                                <span className='text-xs font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded'>
                                                                    -{Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            {productInCart ? (
                                                                <button
                                                                    onClick={(e) => handleRemoveFromCartFromSearch(product.id, e)}
                                                                    className='w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 shadow-sm'
                                                                    title='Remove from cart'
                                                                >
                                                                    <FaTimes className='text-xs' />
                                                                </button>
                                                            ) : (
                                                                <button
                                                                    onClick={(e) => handleAddToCartFromSearch(product, e)}
                                                                    className='w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300 shadow-sm opacity-0 group-hover:opacity-100'
                                                                    title='Add to cart'
                                                                >
                                                                    <CiShoppingCart className='text-sm' />
                                                                </button>
                                                            )}
                                                            {productInCart && (
                                                                <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse' title='In cart'></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Action Buttons */}
                    <div className='flex items-center gap-4 sm:gap-6 flex-shrink-0'>
                        {/* Wishlist */}
                        <div className='hidden md:flex items-center gap-2 group cursor-pointer relative'>
                            <div className='relative'>
                                <CiHeart className='text-2xl sm:text-3xl text-gray-600 group-hover:text-red-500 transition-colors duration-300' />
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500'>Wishlist</p>
                            </div>
                        </div>

                        {/* Account */}
                        <div 
                            className='flex items-center gap-2 group cursor-pointer'
                            onClick={handleAccountClick}
                        >
                            <div className='relative'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md'>
                                    <CiUser className='text-xl sm:text-2xl text-gray-600 group-hover:text-emerald-600 transition-colors duration-300' />
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500'>Welcome</p>
                                <p className='text-sm font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300'>
                                    My Account
                                </p>
                            </div>
                        </div>

                        {/* Cart - Now with real data from useData */}
                        <div className='flex items-center gap-2 group cursor-pointer relative'>
                            <Link to="/cart" onClick={handleCartClick}>
                                <div className='relative'>
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md ${
                                        activeCart ? 'from-emerald-100 to-emerald-200 scale-110' : 'group-hover:from-emerald-100 group-hover:to-emerald-200'
                                    }`}>
                                        <CiShoppingCart className={`text-xl sm:text-2xl transition-all duration-300 ${
                                            activeCart ? 'text-emerald-600 scale-110' : 'text-gray-600 group-hover:text-emerald-600'
                                        }`} />
                                    </div>
                                    {cartItems > 0 && (
                                        <span className='absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-bounce'>
                                            {cartItems}
                                        </span>
                                    )}
                                </div>
                            </Link>
                            <div className='hidden lg:block'>
                                <p className='text-xs text-gray-500'>Your Cart</p>
                                <p className='text-sm font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300'>
                                    ${cartTotalPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className='lg:hidden pt-4' ref={searchRef}>
                    <form onSubmit={handleSearch} className='relative'>
                        <input 
                            type="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search in Grabit..."
                            className='w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300 bg-white'
                        />
                        <CiSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
                    </form>
                </div>
            </div>

            {/* Mobile Menu - Updated Cart Info */}
            {isMobileMenuOpen && (
                <div 
                    ref={mobileMenuRef}
                    className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto"
                >
                    {/* Header */}
                    <div className="bg-white border-b border-gray-200 p-4 sticky top-0">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center'>
                                    <span className='text-white font-bold text-lg'>G</span>
                                </div>
                                <span className='text-xl font-bold text-gray-900'>Grabit</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                {/* Cart badge in mobile header */}
                                {cartItems > 0 && (
                                    <Link to="/cart" className="relative">
                                        <CiShoppingCart className="text-2xl text-gray-700" />
                                        <span className='absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold'>
                                            {cartItems}
                                        </span>
                                    </Link>
                                )}
                                <button 
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                                >
                                    <FaTimes className="text-gray-600 text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        {/* Cart Summary in Mobile Menu */}
                        {cartItems > 0 && (
                            <div className="mb-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm opacity-90">Your Cart</p>
                                        <p className="text-xl font-bold">
                                            {cartItems} {cartItems === 1 ? 'item' : 'items'} • ${cartTotalPrice.toFixed(2)}
                                        </p>
                                    </div>
                                    <Link 
                                        to="/cart"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="bg-white text-emerald-600 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm"
                                    >
                                        View Cart
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* User Section */}
                        <div className="mb-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                {cartItems > 0 ? 'Continue Shopping! 🛒' : 'Welcome to Grabit! 👋'}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {cartItems > 0 
                                    ? `You have ${cartItems} items in your cart` 
                                    : 'Sign in to get personalized recommendations'
                                }
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <button 
                                    onClick={() => {
                                        setShowAuthModal(true);
                                        setCurrentView('login');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors duration-300 text-sm shadow-lg hover:shadow-emerald-200"
                                >
                                    Sign In
                                </button>
                                <button 
                                    onClick={() => {
                                        setShowAuthModal(true);
                                        setCurrentView('signup');
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="border-2 border-emerald-500 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-300 text-sm"
                                >
                                    Create Account
                                </button>
                            </div>
                        </div>

                        {/* Categories Section */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Shop Categories</h3>
                                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                    {categories.length} categories
                                </span>
                            </div>
                            <div className="grid gap-2">
                                {isLoading ? (
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-100 animate-pulse">
                                            <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                                            <div className="flex-1">
                                                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                                                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    categories.slice(0, 6).map((category) => (
                                        <Link
                                            key={category.id}
                                            to={`/category/${category.id}`}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 border border-gray-100 hover:border-emerald-200 group"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <img 
                                                src={category.image} 
                                                alt={category.name}
                                                className="w-12 h-12 rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                                                    {category.name}
                                                </p>
                                                <p className="text-xs text-gray-500">{category.items} products</p>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs">→</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Hot Deals Section */}
                        {featuredProducts.length > 0 && (
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaFire className="text-orange-500 text-lg" />
                                    <h3 className="text-lg font-semibold text-gray-800">Hot Deals 🔥</h3>
                                </div>
                                <div className="grid gap-3">
                                    {featuredProducts.slice(0, 3).map((product) => {
                                        const productInCart = isInCart(product.id);
                                        return (
                                            <div key={product.id} className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className="w-14 h-14 rounded-lg object-cover shadow-sm"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-sm font-bold text-orange-600">${product.price}</span>
                                                        <span className="text-xs line-through text-gray-500">${product.mrp}</span>
                                                        <span className="text-xs font-bold text-white bg-orange-500 px-1.5 py-0.5 rounded">
                                                            -{Math.round(((product.mrp - product.price) / product.mrp) * 100)}%
                                                        </span>
                                                    </div>
                                                </div>
                                                {productInCart && (
                                                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" title="In cart"></div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Quick Links */}
                        <div className="border-t pt-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
                            <div className="grid gap-1">
                                {[
                                    { name: 'My Cart', path: '/cart', count: cartItems },
                                    { name: 'My Wishlist', path: '/wishlist' },
                                    { name: 'Track Order', path: '/track-order' },
                                    { name: 'Customer Support', path: '/support' },
                                    { name: 'Settings', path: '/settings' }
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-colors duration-200 flex items-center justify-between"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <span className="text-gray-600 text-xs">⚡</span>
                                            </div>
                                            {item.name}
                                        </div>
                                        {item.count > 0 && (
                                            <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                                {item.count}
                                            </span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Auth Modal */}
            {showAuthModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div 
                        ref={authModalRef}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-100"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900">
                                {currentView === 'login' ? 'Welcome Back! 👋' : 'Join Grabit Today! 🎉'}
                            </h2>
                            <button 
                                onClick={() => setShowAuthModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
                            >
                                <FaTimes className="text-gray-500 text-lg" />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-6">
                            {currentView === 'login' ? (
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <input 
                                            type="password"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                        </label>
                                        <button type="button" className="text-sm text-emerald-600 font-semibold hover:underline">
                                            Forgot password?
                                        </button>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full bg-emerald-500 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200"
                                    >
                                        Sign In to Grabit
                                    </button>
                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-3 bg-white text-gray-500">Or continue with</span>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        className="w-full border-2 border-gray-200 text-gray-700 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3"
                                    >
                                        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                                        Continue with Google
                                    </button>
                                    <p className="text-center text-sm text-gray-600">
                                        New to Grabit?{' '}
                                        <button 
                                            type="button"
                                            onClick={() => setCurrentView('signup')}
                                            className="text-emerald-600 font-semibold hover:underline"
                                        >
                                            Create an account
                                        </button>
                                    </p>
                                </form>
                            ) : (
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input 
                                                type="text"
                                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input 
                                                type="text"
                                                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input 
                                            type="email"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input 
                                            type="tel"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Enter your phone"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <input 
                                            type="password"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Create password"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Confirm Password
                                        </label>
                                        <input 
                                            type="password"
                                            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all duration-300"
                                            placeholder="Confirm password"
                                        />
                                    </div>
                                    <label className="flex items-start">
                                        <input type="checkbox" className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 mt-1" />
                                        <span className="ml-2 text-sm text-gray-600">
                                            I agree to the <button type="button" className="text-emerald-600 font-semibold hover:underline">Terms</button> and <button type="button" className="text-emerald-600 font-semibold hover:underline">Privacy Policy</button>
                                        </span>
                                    </label>
                                    <button 
                                        type="submit"
                                        className="w-full bg-emerald-500 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200"
                                    >
                                        Create Grabit Account
                                    </button>
                                    <p className="text-center text-sm text-gray-600">
                                        Already have an account?{' '}
                                        <button 
                                            type="button"
                                            onClick={() => setCurrentView('login')}
                                            className="text-emerald-600 font-semibold hover:underline"
                                        >
                                            Sign in here
                                        </button>
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MidHeader;