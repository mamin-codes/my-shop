import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full max-w-full overflow-x-hidden">
            {/* Main Footer */}
            <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-700 border-t border-gray-200 w-full">
                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 lg:py-16 w-full">
                    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated With Our Newsletter</h3>
                        <p className="text-green-100 mb-6 sm:mb-8 text-base sm:text-lg">Subscribe to get special offers, free giveaways, and exclusive deals</p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto w-full">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-0 text-gray-900 focus:ring-2 focus:ring-green-300 focus:outline-none text-sm sm:text-base w-full"
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
                            <img 
                                src="https://nest-frontend-v6.vercel.app/assets/imgs/theme/logo.svg" 
                                alt="Nest Logo" 
                                className="h-10 sm:h-12" 
                            />
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">Nest Mart</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Your trusted partner for quality groceries and everyday essentials. We deliver freshness right to your doorstep.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-green-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Address</p>
                                    <p className="text-xs sm:text-sm text-gray-600 truncate">5171 W Campbell Ave, Kent, Utah 53127</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaPhone className="text-blue-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Call Us</p>
                                    <p className="text-xs sm:text-sm text-gray-600">(+91) - 540-025-124553</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope className="text-purple-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                                    <p className="text-xs sm:text-sm text-gray-600">sale@Nest.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaClock className="text-orange-600 text-sm sm:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Hours</p>
                                    <p className="text-xs sm:text-sm text-gray-600">10:00 - 18:00, Mon - Sat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-green-500 inline-block">Company</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-green-500 inline-block">Account</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Sign In', 'View Cart', 'My Wishlist', 'Track My Order', 'Help Ticket', 'Shipping Details', 'Compare Products'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate Links */}
                    <div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-green-500 inline-block">Corporate</h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Become a Vendor', 'Affiliate Program', 'Farm Business', 'Farm Careers', 'Our Suppliers', 'Accessibility', 'Promotions'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base">
                                        <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                                        <span className="truncate">{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular & Social */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-4 sm:mb-6 pb-2 border-b-2 border-green-500 inline-block">Popular</h3>
                            <ul className="space-y-2 sm:space-y-3">
                                {['Milk & Flavoured Milk', 'Butter and Margarine', 'Eggs Substitutes', 'Marmalades', 'Sour Cream and Dips', 'Tea & Kombucha', 'Cheese'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm sm:text-base truncate block">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h3>
                            <div className="flex gap-2 sm:gap-3 flex-wrap">
                                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                                    <a 
                                        key={index}
                                        href="#" 
                                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                                    >
                                        <Icon className="text-sm sm:text-lg" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* App Downloads */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4">Install App</h3>
                            <div className="flex flex-col gap-2 sm:gap-3">
                                <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                    alt="Google Play" 
                                    className="h-10 sm:h-12 rounded-lg sm:rounded-xl cursor-pointer hover:opacity-80 transition-opacity w-full max-w-48" 
                                />
                                <img 
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                                    alt="App Store" 
                                    className="h-10 sm:h-12 rounded-lg sm:rounded-xl cursor-pointer hover:opacity-80 transition-opacity w-full max-w-48" 
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-200 py-4 sm:py-6 w-full">
                    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
                        <div className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
                            © 2025 Main❤️. All rights reserved.
                        </div>
                        <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap justify-center">
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 whitespace-nowrap">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 whitespace-nowrap">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-300 whitespace-nowrap">Cookie Policy</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                            Secure Payment System
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;