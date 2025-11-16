import React, { useState } from 'react';
import { BiCategory, BiChevronDown } from "react-icons/bi";
import { MdLocalOffer, MdOutlineFlashOn } from "react-icons/md";
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const [isShopHovered, setIsShopHovered] = useState(false);

    const categories = [
        { name: "Electronics", items: ["Smartphones", "Laptops", "Headphones", "Cameras"] },
        { name: "Fashion", items: ["Men's Wear", "Women's Wear", "Kids Fashion", "Accessories"] },
        { name: "Home & Garden", items: ["Furniture", "Decor", "Kitchen", "Garden Tools"] },
        { name: "Sports", items: ["Fitness", "Outdoor", "Team Sports", "Water Sports"] },
        { name: "Beauty", items: ["Skincare", "Makeup", "Hair Care", "Fragrances"] }
    ];

    const shopFeatures = [
        { icon: <MdOutlineFlashOn />, text: "Flash Deals", badge: "HOT" },
        { icon: <MdLocalOffer />, text: "Today's Offers", badge: "NEW" },
        { text: "Best Sellers" },
        { text: "New Arrivals" }
    ];

    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl border-b border-gray-700 relative z-50'>
            {/* FIXED: Added higher z-index and removed container constraints */}
            <div className='w-full px-3 sm:px-4 lg:px-6 xl:px-8 mx-auto'>
                <div className='flex items-center justify-between py-3 sm:py-4'>
                    {/* All Categories Dropdown */}
                    <div 
                        className='relative'
                        onMouseEnter={() => setIsCategoryHovered(true)}
                        onMouseLeave={() => setIsCategoryHovered(false)}
                    >
                        <button className='flex items-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap'>
                            <BiCategory className='text-lg sm:text-xl' />
                            <span className='text-sm sm:text-base'>All Categories</span>
                            <BiChevronDown className={`text-lg sm:text-xl transition-transform duration-300 ${isCategoryHovered ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Categories Mega Menu */}
                        {isCategoryHovered && (
                            <div className='absolute top-full left-0 mt-2 w-64 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[60] overflow-hidden'>
                                {/* FIXED: Increased z-index to z-[60] */}
                                <div className='p-4 sm:p-6'>
                                    <h3 className='text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4'>Shop by Category</h3>
                                    <div className='space-y-1 sm:space-y-2'>
                                        {categories.map((category, index) => (
                                            <div 
                                                key={index}
                                                className='group flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-all duration-300'
                                            >
                                                <span className='text-gray-700 font-medium text-sm sm:text-base group-hover:text-green-600 transition-colors duration-300 truncate'>
                                                    {category.name}
                                                </span>
                                                <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0'>
                                                    <BiChevronDown className='text-green-600 text-lg sm:text-xl' />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200'>
                                    <button className='text-green-600 font-semibold text-sm sm:text-base hover:text-green-700 transition-colors duration-300 whitespace-nowrap'>
                                        View All Categories →
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <nav className='hidden lg:flex items-center gap-4 xl:gap-6'>
                        <NavLink 
                            to="/home"
                            className={({isActive}) => 
                                `relative py-2 px-1 font-medium transition-all duration-300 group whitespace-nowrap ${
                                    isActive 
                                        ? 'text-green-400 font-bold' 
                                        : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            Home
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full`}></span>
                        </NavLink>

                        <NavLink 
                            to="/shop"
                            className={({isActive}) => 
                                `relative py-2 px-1 font-medium transition-all duration-300 group whitespace-nowrap ${
                                    isActive 
                                        ? 'text-green-400 font-bold' 
                                        : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            Shop Now
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full`}></span>
                        </NavLink>

                        <NavLink 
                            to="/about"
                            className={({isActive}) => 
                                `relative py-2 px-1 font-medium transition-all duration-300 group whitespace-nowrap ${
                                    isActive 
                                        ? 'text-green-400 font-bold' 
                                        : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            About
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full`}></span>
                        </NavLink>

                        <NavLink 
                            to="/contact"
                            className={({isActive}) => 
                                `relative py-2 px-1 font-medium transition-all duration-300 group whitespace-nowrap ${
                                    isActive 
                                        ? 'text-green-400 font-bold' 
                                        : 'text-gray-300 hover:text-white'
                                }`
                            }
                        >
                            Contact
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full`}></span>
                        </NavLink>
                    </nav>

                    {/* Shop Now Features Dropdown */}
                    <div 
                        className='relative'
                        onMouseEnter={() => setIsShopHovered(true)}
                        onMouseLeave={() => setIsShopHovered(false)}
                    >
                        <button className='flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap'>
                            <MdOutlineFlashOn className='text-lg sm:text-xl' />
                            <span className='text-sm sm:text-base'>Hot Deals</span>
                            <BiChevronDown className={`text-lg sm:text-xl transition-transform duration-300 ${isShopHovered ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Shop Features Menu */}
                        {isShopHovered && (
                            <div className='absolute top-full right-0 mt-2 w-56 sm:w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 z-[60] overflow-hidden'>
                                {/* FIXED: Increased z-index to z-[60] */}
                                <div className='p-3 sm:p-4'>
                                    <h3 className='text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3'>Special Offers</h3>
                                    <div className='space-y-1 sm:space-y-2'>
                                        {shopFeatures.map((feature, index) => (
                                            <div 
                                                key={index}
                                                className='flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-orange-50 cursor-pointer transition-all duration-300 group'
                                            >
                                                {feature.icon && (
                                                    <div className='text-orange-500 text-lg sm:text-xl flex-shrink-0'>
                                                        {feature.icon}
                                                    </div>
                                                )}
                                                <span className='text-gray-700 font-medium text-sm sm:text-base group-hover:text-orange-600 transition-colors duration-300 truncate'>
                                                    {feature.text}
                                                </span>
                                                {feature.badge && (
                                                    <span className={`ml-auto px-2 py-1 text-xs font-bold rounded-full flex-shrink-0 ${
                                                        feature.badge === 'HOT' 
                                                            ? 'bg-red-500 text-white' 
                                                            : 'bg-green-500 text-white'
                                                    }`}>
                                                        {feature.badge}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='lg:hidden p-2 sm:p-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300'>
                        <BiCategory className='text-lg sm:text-xl' />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className='lg:hidden pb-3 sm:pb-4'>
                    <div className='flex items-center gap-2 sm:gap-3 overflow-x-auto py-2 scrollbar-hide'>
                        <NavLink 
                            to="/home"
                            className={({isActive}) => 
                                `whitespace-nowrap px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-shrink-0 ${
                                    isActive 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/shop"
                            className={({isActive}) => 
                                `whitespace-nowrap px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-shrink-0 ${
                                    isActive 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`
                            }
                        >
                            Shop
                        </NavLink>
                        <NavLink 
                            to="/about"
                            className={({isActive}) => 
                                `whitespace-nowrap px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-shrink-0 ${
                                    isActive 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/contact"
                            className={({isActive}) => 
                                `whitespace-nowrap px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base flex-shrink-0 ${
                                    isActive 
                                        ? 'bg-green-600 text-white' 
                                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;