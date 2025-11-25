import React, { useState, useEffect } from 'react';
import { BiCategory, BiChevronDown, BiHome, BiStore, BiInfoCircle, BiPhone } from "react-icons/bi";
import { MdLocalOffer, MdOutlineFlashOn, MdShoppingBasket, MdSpa, MdLocalFlorist, MdKitchen, MdHome } from "react-icons/md";
import { FaAppleAlt, FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router';

const Navbar = () => {
    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const [isShopHovered, setIsShopHovered] = useState(false);

    // Categories based on your API data
    const categories = [
        { 
            id: 1, 
            name: "Beauty & Cosmetics", 
            items: 45,
            icon: <MdSpa className="text-pink-500 text-xl" />,
            route: "/category/beauty",
            description: "Makeup, Skincare & Beauty Essentials",
            popularItems: ["Mascara", "Lipstick", "Eyeshadow", "Powder"]
        },
        { 
            id: 2, 
            name: "Fragrances", 
            items: 32,
            icon: <MdLocalFlorist className="text-purple-500 text-xl" />,
            route: "/category/fragrances",
            description: "Luxury Perfumes & Scents",
            popularItems: ["Calvin Klein", "Chanel", "Dior", "Gucci"]
        },
        { 
            id: 3, 
            name: "Groceries", 
            items: 28,
            icon: <FaAppleAlt className="text-green-500 text-xl" />,
            route: "/category/groceries",
            description: "Fresh Food & Daily Essentials",
            popularItems: ["Fresh Fruits", "Vegetables", "Meat", "Dairy"]
        },
        { 
            id: 4, 
            name: "Home Decor", 
            items: 36,
            icon: <MdHome className="text-blue-500 text-xl" />,
            route: "/category/home-decor",
            description: "Home Furnishing & Decoration",
            popularItems: ["Photo Frames", "Plants", "Lighting", "Showpieces"]
        },
        { 
            id: 5, 
            name: "Kitchen", 
            items: 42,
            icon: <MdKitchen className="text-orange-500 text-xl" />,
            route: "/category/kitchen",
            description: "Cookware & Kitchen Tools",
            popularItems: ["Utensils", "Cookware", "Tools", "Appliances"]
        }
    ];

    const shopFeatures = [
        { 
            icon: <MdOutlineFlashOn className="text-red-500 text-xl" />, 
            text: "Flash Deals", 
            badge: "70% OFF", 
            color: "red",
            description: "Limited time offers",
            route: "/flash-deals"
        },
        { 
            icon: <MdLocalOffer className="text-green-500 text-xl" />, 
            text: "Today's Offers", 
            badge: "NEW", 
            color: "green",
            description: "Daily special deals",
            route: "/offers"
        },
        { 
            icon: <MdShoppingBasket className="text-blue-500 text-xl" />, 
            text: "Best Sellers", 
            badge: "HOT", 
            color: "blue",
            description: "Most popular products",
            route: "/best-sellers"
        },
        { 
            icon: <FaShoppingCart className="text-purple-500 text-xl" />, 
            text: "New Arrivals", 
            badge: "FRESH", 
            color: "purple",
            description: "Latest products added",
            route: "/new-arrivals"
        }
    ];

    const navigation = [
        { to: "/", icon: <BiHome />, text: "Home" },
        { to: "/shop", icon: <BiStore />, text: "Shop Now" },
        { to: "/category", icon: <BiCategory />, text: "Categories" },
        { to: "/about", icon: <BiInfoCircle />, text: "About" },
        { to: "/contact", icon: <BiPhone />, text: "Contact" }
    ];

    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl border-b border-gray-700 sticky top-[84px] z-30'>
            <div className='container mx-auto px-4'>
                <div className='flex items-center justify-between py-3'>
                    {/* All Categories Dropdown */}
                    <div 
                        className='relative'
                        onMouseEnter={() => setIsCategoryHovered(true)}
                        onMouseLeave={() => setIsCategoryHovered(false)}
                    >
                        <button className='flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25'>
                            <BiCategory className='text-xl' />
                            <span className='text-sm'>All Categories</span>
                            <BiChevronDown className={`text-xl transition-transform duration-300 ${isCategoryHovered ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Categories Mega Menu */}
                        {isCategoryHovered && (
                            <div className='absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 overflow-hidden'>
                                <div className='p-6'>
                                    <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center gap-2'>
                                        <BiCategory className="text-green-500" />
                                        Shop by Category
                                    </h3>
                                    <div className='space-y-3'>
                                        {categories.map((category) => (
                                            <NavLink
                                                key={category.id}
                                                to={category.route}
                                                className="group block"
                                                onClick={() => setIsCategoryHovered(false)}
                                            >
                                                <div className='flex items-center justify-between p-4 rounded-xl hover:bg-green-50 cursor-pointer transition-all duration-300 border border-transparent hover:border-green-200 hover:shadow-sm'>
                                                    <div className='flex items-center gap-4 flex-1'>
                                                        <div className='flex-shrink-0'>
                                                            {category.icon}
                                                        </div>
                                                        <div className='flex-1'>
                                                            <div className='flex items-center gap-2 mb-1'>
                                                                <span className='text-gray-800 font-semibold text-sm group-hover:text-green-600 transition-colors duration-300'>
                                                                    {category.name}
                                                                </span>
                                                                <span className='bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium'>
                                                                    {category.items} items
                                                                </span>
                                                            </div>
                                                            <p className='text-xs text-gray-500 mb-2'>{category.description}</p>
                                                            <div className='flex flex-wrap gap-1'>
                                                                {category.popularItems.slice(0, 2).map((item, index) => (
                                                                    <span key={index} className='bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded'>
                                                                        {item}
                                                                    </span>
                                                                ))}
                                                                {category.popularItems.length > 2 && (
                                                                    <span className='bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded'>
                                                                        +{category.popularItems.length - 2} more
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0'>
                                                        <BiChevronDown className='text-green-600 text-xl' />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                                <div className='bg-gray-50 px-6 py-4 border-t border-gray-200'>
                                    <NavLink 
                                        to="/categories" 
                                        className='text-green-600 font-semibold text-sm hover:text-green-700 transition-colors duration-300 flex items-center gap-2'
                                        onClick={() => setIsCategoryHovered(false)}
                                    >
                                        View All Categories 
                                        <span className='text-lg'>→</span>
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <nav className='hidden lg:flex items-center gap-1'>
                        {navigation.map((item) => (
                            <NavLink 
                                key={item.to}
                                to={item.to}
                                className={({isActive}) => 
                                    `flex items-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-300 group ${
                                        isActive 
                                            ? 'bg-green-500 text-white shadow-lg' 
                                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`
                                }
                            >
                                <span className='text-lg'>{item.icon}</span>
                                <span className='text-sm font-medium'>{item.text}</span>
                            </NavLink>
                        ))}
                    </nav>

                    {/* Shop Now Features Dropdown */}
                    <div 
                        className='relative'
                        onMouseEnter={() => setIsShopHovered(true)}
                        onMouseLeave={() => setIsShopHovered(false)}
                    >
                        <button className='flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25'>
                            <MdOutlineFlashOn className='text-xl' />
                            <span className='text-sm'>Hot Deals</span>
                            <BiChevronDown className={`text-xl transition-transform duration-300 ${isShopHovered ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Shop Features Menu */}
                        {isShopHovered && (
                            <div className='absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 overflow-hidden'>
                                <div className='p-6'>
                                    <h3 className='text-lg font-bold text-gray-900 mb-4 flex items-center gap-2'>
                                        <MdOutlineFlashOn className="text-orange-500" />
                                        Special Offers
                                    </h3>
                                    <div className='space-y-3'>
                                        {shopFeatures.map((feature, index) => (
                                            <NavLink
                                                key={index}
                                                to={feature.route}
                                                className="group block"
                                                onClick={() => setIsShopHovered(false)}
                                            >
                                                <div className='flex items-center gap-4 p-4 rounded-xl hover:bg-orange-50 cursor-pointer transition-all duration-300 border border-transparent hover:border-orange-200 hover:shadow-sm'>
                                                    <div className='flex-shrink-0'>
                                                        {feature.icon}
                                                    </div>
                                                    <div className='flex-1'>
                                                        <div className='flex items-center gap-2 mb-1'>
                                                            <span className='text-gray-800 font-semibold text-sm group-hover:text-orange-600 transition-colors duration-300'>
                                                                {feature.text}
                                                            </span>
                                                            <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                                                feature.color === 'red' ? 'bg-red-500 text-white' :
                                                                feature.color === 'green' ? 'bg-green-500 text-white' :
                                                                feature.color === 'blue' ? 'bg-blue-500 text-white' :
                                                                'bg-purple-500 text-white'
                                                            }`}>
                                                                {feature.badge}
                                                            </span>
                                                        </div>
                                                        <p className='text-xs text-gray-500'>{feature.description}</p>
                                                    </div>
                                                    <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0'>
                                                        <BiChevronDown className='text-orange-600 text-xl' />
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                                <div className='bg-orange-50 px-6 py-4 border-t border-orange-200'>
                                    <div className='text-center'>
                                        <p className='text-xs text-orange-600 font-medium'>Limited Time Offers - Shop Now! 🎉</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className='lg:hidden p-3 rounded-xl bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300'>
                        <BiCategory className='text-xl' />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className='lg:hidden pb-3'>
                    <div className='flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide'>
                        {navigation.map((item) => (
                            <NavLink 
                                key={item.to}
                                to={item.to}
                                className={({isActive}) => 
                                    `flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm flex-shrink-0 ${
                                        isActive 
                                            ? 'bg-green-500 text-white shadow-lg' 
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                    }`
                                }
                            >
                                <span className='text-base'>{item.icon}</span>
                                <span>{item.text}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;