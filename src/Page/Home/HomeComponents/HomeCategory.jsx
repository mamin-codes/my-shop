import useData from "../../../Hooks/useData";
import { FaArrowRight, FaShoppingBag, FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const HomeCategory = () => {
    const { category } = useData();
    
    return (
        <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50/30">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14 lg:mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-4 sm:mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-green-700 text-xs sm:text-sm font-medium">Product Categories</span>
                </div>
                
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
                    Shop By <span className="text-green-600 relative">
                        Category
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-200/60 rounded-full"></span>
                    </span>
                </h2>
                
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
                    Discover our carefully curated collection across various categories. Find quality products that fit your lifestyle perfectly.
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 xs:gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
                {category.map((cat, index) => (
                    <div 
                        key={cat.id} 
                        className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-100/80 hover:border-green-200/50 overflow-hidden cursor-pointer w-full"
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animation: 'fadeInUp 0.6s ease-out forwards'
                        }}
                    >
                        {/* Background Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Category Image Container */}
                        <div className="relative p-4 xs:p-5 sm:p-6 lg:p-7 flex justify-center items-center">
                            <div className="relative z-10 w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ease-out shadow-sm group-hover:shadow-md">
                                <img 
                                    className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110" 
                                    src={cat.image} 
                                    alt={cat.name}
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Floating Elements */}
                            <div className="absolute top-2 right-2 w-3 h-3 bg-green-400/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-400/20 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100"></div>
                        </div>

                        {/* Category Info */}
                        <div className="relative p-3 xs:p-4 sm:p-5 text-center bg-white/80 group-hover:bg-transparent transition-colors duration-300">
                            <h3 className="font-semibold text-gray-900 text-sm xs:text-base sm:text-lg mb-2 group-hover:text-green-700 transition-colors duration-300 line-clamp-2 leading-tight">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 text-xs xs:text-sm mb-3 sm:mb-4 font-medium">
                                {cat.items} {cat.items === 1 ? 'Item' : 'Items'}
                            </p>
                            
                            {/* Animated View Button */}
                            <button className="w-full bg-white text-gray-700 py-2 xs:py-2.5 rounded-lg font-medium text-xs xs:text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2 border border-gray-100 group-hover:border-green-200 group-hover:bg-green-50/50 group-hover:text-green-700 shadow-sm group-hover:shadow-md">
                                Explore
                                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Border Glow Effect */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-green-200/30 transition-all duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <button className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 xs:px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl font-semibold text-sm xs:text-base sm:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto overflow-hidden">
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    
                    <FaShoppingBag className="text-base sm:text-lg relative z-10" />
                    <span className="relative z-10">Explore All Categories</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
            </div>

            {/* Features Bar */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {[
                    {
                        icon: FaShoppingBag,
                        title: "Wide Selection",
                        description: "Thousands of quality products across all categories",
                        color: "green"
                    },
                    {
                        icon: FaShippingFast,
                        title: "Fast Delivery",
                        description: "Free shipping on orders over $50",
                        color: "blue"
                    },
                    {
                        icon: FaShieldAlt,
                        title: "Secure Payment",
                        description: "100% secure and encrypted payments",
                        color: "purple"
                    },
                    {
                        icon: FaHeadset,
                        title: "24/7 Support",
                        description: "Always here to help you",
                        color: "orange"
                    }
                ].map((feature, index) => (
                    <div 
                        key={index}
                        className="group text-center p-5 xs:p-6 sm:p-7 bg-white rounded-2xl border border-gray-200/80 hover:border-green-200/50 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                    >
                        <div className={`w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 mx-auto mb-4 sm:mb-5 bg-${feature.color}-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                            <feature.icon className={`text-${feature.color}-600 text-xl xs:text-2xl sm:text-2xl`} />
                        </div>
                        <h4 className="font-bold text-gray-900 text-base xs:text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-green-700 transition-colors duration-300">
                            {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm xs:text-base leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Custom Animation */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default HomeCategory;