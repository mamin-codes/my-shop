import React from "react";
import { FaShippingFast, FaHeadset, FaUndo, FaLock, FaStar, FaGift, FaShieldAlt, FaAward } from "react-icons/fa";

const Support = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Free Shipping",
      desc: "Free shipping on all orders above $50. Fast delivery across all cities",
      gradient: "from-blue-500 to-cyan-500",
      stats: "2-3 Days Delivery"
    },
    {
      id: 2,
      icon: <FaHeadset className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "24/7 Support",
      desc: "Dedicated customer care for beauty, fragrances & home product queries",
      gradient: "from-purple-500 to-pink-500",
      stats: "Instant Response"
    },
    {
      id: 3,
      icon: <FaUndo className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Easy Returns",
      desc: "30-day return policy on all beauty, home & kitchen products",
      gradient: "from-green-500 to-emerald-500",
      stats: "No Questions Asked"
    },
    {
      id: 4,
      icon: <FaLock className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Secure Payment",
      desc: "100% secure payment gateway with SSL encryption protection",
      gradient: "from-orange-500 to-red-500",
      stats: "Bank-Level Security"
    },
    {
      id: 5,
      icon: <FaStar className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Premium Quality",
      desc: "Curated selection of high-quality beauty, fragrance & home products",
      gradient: "from-yellow-500 to-amber-500",
      stats: "150+ Brands"
    },
    {
      id: 6,
      icon: <FaGift className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Special Offers",
      desc: "Regular discounts up to 50% on beauty, home decor & fragrances",
      gradient: "from-pink-500 to-rose-500",
      stats: "Up to 50% OFF"
    },
    {
      id: 7,
      icon: <FaShieldAlt className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Quality Guarantee",
      desc: "Authentic products with manufacturer warranty & quality check",
      gradient: "from-indigo-500 to-blue-500",
      stats: "100% Authentic"
    },
    {
      id: 8,
      icon: <FaAward className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Award Winning",
      desc: "Trusted by 10,000+ customers for premium shopping experience",
      gradient: "from-teal-500 to-green-500",
      stats: "5★ Rating"
    }
  ];

  return (
    <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20 mx-auto overflow-x-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Why Shop With <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Grabit</span>?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Experience premium shopping with benefits designed for your convenience and satisfaction
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col items-center text-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 rounded-xl sm:rounded-2xl hover:scale-105 w-full overflow-hidden"
          >
            {/* Background Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Icon with Gradient Background */}
            <div className={`relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
              {item.icon}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3">
                {item.desc}
              </p>
              <div className="inline-block bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold group-hover:bg-gray-200 transition-colors duration-300">
                {item.stats}
              </div>
            </div>

            {/* Hover Border Effect */}
            <div className={`absolute inset-0 border-2 border-transparent rounded-xl sm:rounded-2xl group-hover:border-gradient-to-r ${item.gradient} group-hover:opacity-30 transition-all duration-500 pointer-events-none`}></div>
          </div>
        ))}
      </div>

      {/* Additional Info Banner */}
      <div className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Join 10,000+ Happy Customers
          </h3>
          <p className="text-purple-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
            Shop with confidence knowing you're getting the best prices on premium beauty, fragrance, and home products
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>150+ Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>5 Product Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span>Up to 50% Discounts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Support;