import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight, FaShoppingBag, FaStar, FaShippingFast, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full max-w-full overflow-x-hidden">
            {/* Main Footer */}
            <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-700 border-t border-gray-200 w-full">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 lg:py-16 w-full">
                    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Don't Miss Out on Great Deals!</h3>
                        <p className="text-purple-100 mb-6 sm:mb-8 text-base sm:text-lg">
                            Get exclusive offers on beauty, fragrances, home decor, and more. Join 10,000+ smart shoppers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto w-full">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-0 text-gray-900 focus:ring-2 focus:ring-purple-300 focus:outline-none text-sm sm:text-base w-full"
                            />
                            <button className="bg-gray-900 hover:bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center text-sm sm:text-base whitespace-nowrap">
                                Subscribe
                                <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                                <FaShoppingBag className="text-white text-lg sm:text-xl" />
                            </div>
                            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Grabit</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Your one-stop destination for premium beauty products, luxury fragrances, home essentials, and kitchen accessories. Quality you can trust.
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="flex items-center gap-2">
                                <FaShippingFast className="text-green-500 text-sm" />
                                <span className="text-xs sm:text-sm text-gray-600">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaShieldAlt className="text-blue-500 text-sm" />
                                <span className="text-xs sm:text-sm text-gray-600">Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaStar className="text-yellow-500 text-sm" />
                                <span className="text-xs sm:text-sm text-gray-600">Premium Quality</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock className="text-purple-500 text-sm" />
                                <span className="text-xs sm:text-sm text-gray-600">24/7 Support</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-purple-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Address</p>
                                    <p className="text-xs sm:text-sm text-gray-600">123 Shopping District, Retail Park, City 10001</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-blue-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</p>
                                    <p className="text-xs sm:text-sm text-gray-600">+1 (555) 123-GRAB</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-pink-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                                    <p className="text-xs sm:text-sm text-gray-600">support@grabitshop.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-orange-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Hours</p>
                                    <p className="text-xs sm:text-sm text-gray-600">24/7 Online Store</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shop Categories */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-purple-500 inline-block">Shop Categories</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                'Beauty & Cosmetics',
                                'Premium Fragrances', 
                                'Home Decor',
                                'Kitchen Accessories',
                                'Fresh Groceries',
                                'All Products',
                                'Best Sellers'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-purple-500 inline-block">Customer Service</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                'Contact Us',
                                'Shipping Information',
                                'Returns & Exchanges',
                                'Track Your Order',
                                'FAQ & Help Center',
                                'Size Guide',
                                'Product Care'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-purple-500 inline-block">Policies</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {[
                                'Privacy Policy',
                                'Terms of Service',
                                'Return Policy',
                                'Shipping Policy',
                                'Cookie Policy',
                                'Accessibility',
                                'Ethical Sourcing'
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Products & Social */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-purple-500 inline-block">Popular Products</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {[
                                    'Essence Mascara',
                                    'Calvin Klein Fragrance',
                                    'Home Decor Swing',
                                    'Bamboo Kitchen Utensils',
                                    'Fresh Apples',
                                    'Chanel Coco Noir',
                                    'Designer Table Lamp'
                                ].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base truncate block">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Download Our App */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">Get Our App</h3>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <div className="bg-gray-900 text-white p-3 rounded-xl text-center hover:bg-black transition-colors duration-300 cursor-pointer">
                                    <div className="text-xs font-semibold">Download on the</div>
                                    <div className="text-sm font-bold">App Store</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded-xl text-center hover:bg-black transition-colors duration-300 cursor-pointer">
                                    <div className="text-xs font-semibold">Get it on</div>
                                    <div className="text-sm font-bold">Google Play</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">Follow GrabIt</h3>
                            <div className="flex gap-2 sm:gap-3 flex-wrap">
                                {[
                                    { Icon: FaFacebookF, color: 'bg-blue-500 hover:bg-blue-600' },
                                    { Icon: FaInstagram, color: 'bg-pink-500 hover:bg-pink-600' },
                                    { Icon: FaTwitter, color: 'bg-sky-500 hover:bg-sky-600' },
                                    { Icon: FaYoutube, color: 'bg-red-500 hover:bg-red-600' },
                                    { Icon: FaLinkedinIn, color: 'bg-blue-700 hover:bg-blue-800' }
                                ].map(({ Icon, color }, index) => (
                                    <a 
                                        key={index}
                                        href="#" 
                                        className={`w-10 h-10 sm:w-12 sm:h-12 ${color} text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 flex-shrink-0`}
                                    >
                                        <Icon className="text-sm sm:text-lg" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-200 py-4 sm:py-6 w-full">
                    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        <div className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
                            © 2025 <span className="font-semibold text-purple-600">Mamin</span>. All rights reserved.
                        </div>
                        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
                            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 whitespace-nowrap">Cookie Policy</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                            <span>100% Secure Payments</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;