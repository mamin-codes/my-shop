import React, { useState, useEffect, useRef } from 'react';
import useData from '../../Hooks/useData';
import ProductCart from '../../Components/Shared/ProductCart';
import { FaFilter, FaTimes, FaChevronDown, FaChevronUp, FaTags, FaList, FaHome, FaSprayCan, FaShoppingBasket, FaSortAmountDown, FaSortAmountUp, FaDollarSign } from 'react-icons/fa';

const ShopNow = () => {
    const { 
        category, 
        products, 
        addToCart, 
        removeFromCart, 
        isInCart, 
        getItemQuantity,
        updateQuantity 
    } = useData();
    
    const [id, setId] = useState(null);
    const [brand, setBrand] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [sortBy, setSortBy] = useState('featured');
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const brandDropdownRef = useRef(null);

    // Get price range from your products data
    const maxPrice = Math.max(...products.map(p => p.price));
    const minPrice = Math.min(...products.map(p => p.price));

    // Initialize price range with actual min/max
    useEffect(() => {
        if (products.length > 0) {
            setPriceRange([minPrice, maxPrice]);
        }
    }, [products, minPrice, maxPrice]);

    // Get unique brands from your API data
    const uniqueBrands = [...new Set(products.map(p => p.brand))].sort();

    // Category icons based on your API categories
    const categoryIcons = {
        1: <FaTags className="text-pink-500" />, // Beauty
        2: <FaSprayCan className="text-purple-500" />, // Fragrances
        3: <FaShoppingBasket className="text-green-500" />, // Groceries
        4: <FaHome className="text-blue-500" />, // Home Decor
        5: <FaList className="text-orange-500" />, // Kitchen
    };

    const handleCategoryClick = (cid) => {
        setId(prev => prev === cid ? null : cid);
    };

    const handleBrandSelect = (selectedBrand) => {
        setBrand(prev => prev === selectedBrand ? null : selectedBrand);
        setIsBrandOpen(false);
    };

    // Close brand dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (brandDropdownRef.current && !brandDropdownRef.current.contains(event.target)) {
                setIsBrandOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Apply all filters and sorting
    useEffect(() => {
        let result = products.filter(p => {
            const matchedCategory = id ? p.categoryId === id : true;
            const matchedBrand = brand ? p.brand === brand : true;
            const matchedPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
            return matchedCategory && matchedBrand && matchedPrice;
        });

        // Apply sorting
        switch (sortBy) {
            case 'price-low-high':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high-low':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.ratings - a.ratings);
                break;
            case 'discount':
                result.sort((a, b) => b.discount - a.discount);
                break;
            default:
                // featured - keep original order
                break;
        }

        setFilteredProducts(result);
    }, [products, id, brand, sortBy, priceRange]);

    const clearFilters = () => {
        setId(null);
        setBrand(null);
        setSortBy('featured');
        setPriceRange([minPrice, maxPrice]);
        setIsBrandOpen(false);
    };

    const handlePriceRangeChange = (index, value) => {
        const newRange = [...priceRange];
        newRange[index] = Number(value);
        
        // Ensure min doesn't exceed max and vice versa
        if (index === 0 && newRange[0] > newRange[1]) {
            newRange[1] = newRange[0];
        } else if (index === 1 && newRange[1] < newRange[0]) {
            newRange[0] = newRange[1];
        }
        
        setPriceRange(newRange);
    };

    return (
        <div className="w-full max-w-full overflow-x-hidden bg-gray-50 min-h-screen">
            {/* Mobile Filter Button */}
            <div className="lg:hidden px-4 sm:px-6 mb-4 sticky top-0 z-40 bg-white py-3 shadow-sm">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <FaFilter className="text-lg" />
                    <span className="text-lg">Filters & Sorting</span>
                    <span className={`transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}>
                        {isSidebarOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                </button>
            </div>

            {/* Main Container */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto lg:px-4 xl:px-6 mt-6 sm:mt-8 lg:mt-12">
                
                {/* LEFT SIDEBAR - FILTERS */}
                <div className={`w-full lg:w-72 xl:w-80 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden lg:block'} lg:sticky lg:top-24 lg:h-fit lg:mr-6 xl:mr-8`}>
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-visible lg:mx-0"> {/* Changed overflow-hidden to overflow-visible */}
                        
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-600 to-pink-600 p-4 lg:p-5 xl:p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg lg:text-xl font-bold flex items-center gap-2 lg:gap-3">
                                    <FaFilter className="text-sm lg:text-base" />
                                    Filters & Sort
                                </h2>
                                {(id || brand || sortBy !== 'featured' || priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                                    <button 
                                        onClick={clearFilters}
                                        className="text-xs lg:text-sm bg-white/20 hover:bg-white/30 px-2 lg:px-3 py-1 rounded-full transition-colors flex items-center gap-1 lg:gap-2"
                                    >
                                        <FaTimes className="text-xs" />
                                        Clear All
                                    </button>
                                )}
                            </div>
                            <p className="text-red-100 text-xs lg:text-sm mt-1 lg:mt-2">
                                {products.length} products available
                            </p>
                        </div>

                        {/* Filter Content */}
                        <div className="p-4 lg:p-5 xl:p-6 space-y-4 lg:space-y-5">
                            
                            {/* SORT OPTIONS */}
                            <div className="space-y-3 lg:space-y-4">
                                <h3 className="font-semibold text-gray-900 text-base lg:text-lg border-b border-gray-100 pb-2 lg:pb-3 flex items-center gap-2">
                                    <FaSortAmountDown className="text-red-600 text-sm lg:text-base" />
                                    Sort By
                                </h3>
                                <div className="grid grid-cols-1 gap-2 lg:gap-3">
                                    {[
                                        { value: 'featured', label: 'Featured', icon: <FaList /> },
                                        { value: 'price-low-high', label: 'Price: Low to High', icon: <FaSortAmountUp /> },
                                        { value: 'price-high-low', label: 'Price: High to Low', icon: <FaSortAmountDown /> },
                                        { value: 'rating', label: 'Highest Rated', icon: <FaSortAmountDown /> },
                                        { value: 'discount', label: 'Best Discount', icon: <FaTags /> }
                                    ].map(option => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSortBy(option.value)}
                                            className={`p-2 lg:p-3 rounded-lg lg:rounded-xl border-2 transition-all duration-200 flex items-center gap-2 lg:gap-3 ${
                                                sortBy === option.value 
                                                    ? 'border-red-500 bg-red-50 text-red-700 shadow-sm' 
                                                    : 'border-gray-200 bg-white text-gray-700 hover:border-red-300'
                                            }`}
                                        >
                                            <div className={`p-1 lg:p-2 rounded-md lg:rounded-lg ${
                                                sortBy === option.value ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                {option.icon}
                                            </div>
                                            <span className="text-xs lg:text-sm font-medium text-left flex-1">
                                                {option.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* PRICE FILTER */}
                            <div className="space-y-3 lg:space-y-4">
                                <h3 className="font-semibold text-gray-900 text-base lg:text-lg border-b border-gray-100 pb-2 lg:pb-3 flex items-center gap-2">
                                    <FaDollarSign className="text-red-600 text-sm lg:text-base" />
                                    Price Range
                                </h3>
                                
                                <div className="space-y-3 lg:space-y-4">
                                    {/* Price Range Slider */}
                                    <div className="px-1 lg:px-2">
                                        <input
                                            type="range"
                                            min={minPrice}
                                            max={maxPrice}
                                            value={priceRange[0]}
                                            onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                                            className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider-thumb-red"
                                        />
                                        <input
                                            type="range"
                                            min={minPrice}
                                            max={maxPrice}
                                            value={priceRange[1]}
                                            onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                                            className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer slider-thumb-red mt-2"
                                        />
                                    </div>

                                    {/* Price Inputs */}
                                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                                        <div>
                                            <label className="text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2 block">Min Price</label>
                                            <div className="relative">
                                                <span className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">$</span>
                                                <input
                                                    type="number"
                                                    value={priceRange[0]}
                                                    onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                                                    className="w-full pl-6 lg:pl-8 pr-2 lg:pr-3 py-1 lg:py-2 border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                                    min={minPrice}
                                                    max={maxPrice}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2 block">Max Price</label>
                                            <div className="relative">
                                                <span className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">$</span>
                                                <input
                                                    type="number"
                                                    value={priceRange[1]}
                                                    onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                                                    className="w-full pl-6 lg:pl-8 pr-2 lg:pr-3 py-1 lg:py-2 border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                                                    min={minPrice}
                                                    max={maxPrice}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price Range Display */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg lg:rounded-xl p-2 lg:p-3">
                                        <p className="text-xs lg:text-sm text-red-800 text-center font-medium">
                                            ${priceRange[0]} - ${priceRange[1]}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CATEGORY FILTER */}
                            <div className="space-y-3 lg:space-y-4">
                                <h3 className="font-semibold text-gray-900 text-base lg:text-lg border-b border-gray-100 pb-2 lg:pb-3 flex items-center gap-2">
                                    <FaList className="text-red-600 text-sm lg:text-base" />
                                    Categories
                                </h3>
                                <div className="space-y-1 lg:space-y-2 max-h-48 lg:max-h-56 overflow-y-auto">
                                    {category.map(cat => (
                                        <div 
                                            key={cat.id}
                                            onClick={() => handleCategoryClick(cat.id)}
                                            className={`flex items-center gap-3 lg:gap-4 p-2 lg:p-3 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-200 ${
                                                id === cat.id 
                                                    ? 'bg-red-50 border border-red-200 shadow-sm' 
                                                    : 'bg-gray-50 hover:bg-gray-100 border border-transparent'
                                            }`}
                                        >
                                            <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                id === cat.id ? 'bg-red-500' : 'bg-gray-200'
                                            }`}>
                                                {categoryIcons[cat.id] || <FaList className="text-white text-sm lg:text-base" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`font-medium text-sm lg:text-base ${
                                                    id === cat.id ? 'text-red-700' : 'text-gray-700'
                                                }`}>
                                                    {cat.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {products.filter(p => p.categoryId === cat.id).length} products
                                                </p>
                                            </div>
                                            {id === cat.id && (
                                                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* BRAND FILTER - COMPLETELY FIXED VERSION */}
                            <div className="space-y-3 lg:space-y-4 relative" ref={brandDropdownRef}>
                                <h3 className="font-semibold text-gray-900 text-base lg:text-lg border-b border-gray-100 pb-2 lg:pb-3 flex items-center gap-2">
                                    <FaTags className="text-purple-600 text-sm lg:text-base" />
                                    Brands
                                </h3>
                                
                                <div className="relative">
                                    <button
                                        onClick={() => setIsBrandOpen(!isBrandOpen)}
                                        className="w-full bg-white border border-gray-300 rounded-lg lg:rounded-xl p-3 lg:p-4 flex items-center justify-between hover:border-red-500 transition-colors duration-200 shadow-sm"
                                    >
                                        <div className="flex items-center gap-2 lg:gap-3">
                                            <div className={`w-3 h-3 rounded-full ${brand ? 'bg-red-500' : 'bg-gray-300'}`}></div>
                                            <span className={`text-sm ${brand ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                                                {brand || "Select Brand"}
                                            </span>
                                        </div>
                                        <FaChevronDown className={`text-gray-400 transition-transform duration-200 text-sm ${isBrandOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* DROPDOWN MENU - FIXED POSITIONING AND VISIBILITY */}
                                    {isBrandOpen && (
                                        <div className="absolute top-full left-0 right-0 mt-2 z-[9999] bg-white border border-gray-300 rounded-lg lg:rounded-xl shadow-2xl max-h-60 overflow-y-auto transform translate-z-0">
                                            <div className="p-2">
                                                {uniqueBrands.length > 0 ? (
                                                    uniqueBrands.map(brandItem => (
                                                        <div
                                                            key={brandItem}
                                                            onClick={() => handleBrandSelect(brandItem)}
                                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 mb-1 last:mb-0 ${
                                                                brand === brandItem 
                                                                    ? 'bg-red-50 border border-red-200 text-red-700' 
                                                                    : 'hover:bg-gray-50 text-gray-700 border border-transparent'
                                                            }`}
                                                        >
                                                            <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                                                                brand === brandItem 
                                                                    ? 'bg-red-500 border-red-500' 
                                                                    : 'border-gray-400'
                                                            }`}></div>
                                                            <span className="text-sm font-medium flex-1">
                                                                {brandItem}
                                                            </span>
                                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                                {products.filter(p => p.brand === brandItem).length}
                                                            </span>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="p-3 text-center text-gray-500 text-sm">
                                                        No brands available
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {brand && (
                                    <div className="bg-red-50 border border-red-200 rounded-lg lg:rounded-xl p-3 lg:p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 lg:gap-3">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <span className="font-medium text-red-800 text-sm">{brand}</span>
                                            </div>
                                            <button
                                                onClick={() => setBrand(null)}
                                                className="text-red-600 hover:text-red-800 transition-colors"
                                            >
                                                <FaTimes className="text-sm" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Close Button */}
                    <div className="lg:hidden mt-4">
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="w-full bg-gray-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors shadow-lg"
                        >
                            <FaTimes />
                            Close Filters
                        </button>
                    </div>
                </div>

                {/* RIGHT PRODUCT GRID */}
                <div className="flex-1 min-w-0 lg:pl-0">
                    {/* Results Header */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:p-6 mb-4 lg:mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:gap-4">
                            <div>
                                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
                                    {id ? category.find(c => c.id === id)?.name : 'All Products'}
                                    {brand && ` - ${brand}`}
                                </h1>
                                <p className="text-sm lg:text-base text-gray-600">
                                    Showing <span className="font-semibold text-red-600">{filteredProducts.length}</span> of{' '}
                                    <span className="font-semibold">{products.length}</span> products
                                    {(id || brand || sortBy !== 'featured' || priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                                        <span className="text-red-600 font-medium"> • Filtered</span>
                                    )}
                                </p>
                            </div>
                            
                            {/* Mobile Sort Toggle */}
                            <div className="lg:hidden">
                                <button 
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-sm"
                                >
                                    <FaFilter />
                                    Filters & Sort
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCTS GRID */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-5">
                            {filteredProducts.map(product => (
                                <ProductCart 
                                    key={product.id} 
                                    product={product}
                                    addToCart={addToCart}
                                    isInCart={isInCart}
                                    getItemQuantity={getItemQuantity}
                                    updateQuantity={updateQuantity}
                                    removeFromCart={removeFromCart}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12 text-center">
                            <div className="max-w-md mx-auto">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                                    <FaFilter className="text-2xl lg:text-3xl text-red-400" />
                                </div>
                                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">No products found</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-4 lg:mb-6">
                                    We couldn't find any products matching your current filters.
                                </p>
                                <button 
                                    onClick={clearFilters}
                                    className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm lg:text-base"
                                >
                                    Show All Products
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom CSS for Red Slider */}
            <style jsx>{`
                .slider-thumb-red::-webkit-slider-thumb {
                    appearance: none;
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    background: #dc2626;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                }
                .slider-thumb-red::-moz-range-thumb {
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    background: #dc2626;
                    cursor: pointer;
                    border: 2px solid white;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                }
            `}</style>
        </div>
    );
};

export default ShopNow;