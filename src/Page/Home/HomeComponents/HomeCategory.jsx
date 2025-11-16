import useData from "../../../Hooks/useData";
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';

const HomeCategory = () => {
    const { category } = useData();
    
    return (
        // FIXED: Remove max-w-[1920px] and lg:px-24
        <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 mt-8 sm:mt-10 lg:mt-12 mx-auto overflow-x-hidden">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Shop By <span className="text-green-600">Category</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
                    Explore our wide range of products across different categories. Find exactly what you're looking for!
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
                {category.map(cat => (
                    <div 
                        key={cat.id} 
                        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer w-full"
                    >
                        {/* Category Image */}
                        <div className="relative p-3 sm:p-4 lg:p-6 flex justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500">
                                <img 
                                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110" 
                                    src={cat.image} 
                                    alt={cat.name}
                                />
                            </div>
                            
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Category Info */}
                        <div className="p-2 sm:p-3 lg:p-4 text-center">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                                {cat.items} Items
                            </p>
                            
                            {/* View Button */}
                            <button className="w-full bg-gray-50 text-gray-700 py-1 sm:py-2 rounded-lg sm:rounded-xl font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 sm:translate-y-3 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-1 sm:gap-2 hover:bg-green-50 hover:text-green-600">
                                View All
                                <FaArrowRight className="text-xs group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Border Glow Effect */}
                        <div className="absolute inset-0 border border-transparent group-hover:border-green-500/20 rounded-xl sm:rounded-2xl transition-all duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto">
                    <FaShoppingBag className="text-base sm:text-lg lg:text-xl" />
                    Explore All Categories
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>

            {/* Features Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <FaShoppingBag className="text-green-600 text-lg sm:text-xl lg:text-2xl" />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Wide Selection</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Thousands of products across all categories</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Fast Delivery</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Free shipping on orders over $50</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Secure Payment</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">100% secure and encrypted payments</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl border border-gray-200">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">24/7 Support</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Always here to help you</p>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;