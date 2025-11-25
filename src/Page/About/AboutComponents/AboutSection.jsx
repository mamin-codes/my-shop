import React from 'react';
import { FaShippingFast, FaHeadset, FaExchangeAlt, FaShieldAlt, FaCheck, FaUsers, FaShoppingBag, FaStar, FaTags, FaSprayCan, FaHome, FaUtensils, FaAward } from 'react-icons/fa';

const AboutSection = () => {
  const services = [
    {
      title: "Free Shipping",
      description: "Free shipping on orders above $50",
      icon: <FaShippingFast className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "24/7 Support",
      description: "Dedicated customer support",
      icon: <FaHeadset className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Easy Returns",
      description: "30-day return policy",
      icon: <FaExchangeAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Secure Payment",
      description: "Bank-level security",
      icon: <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { number: "150+", label: "Premium Products", icon: <FaShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { number: "5", label: "Categories", icon: <FaTags className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { number: "50%", label: "Max Discount", icon: <FaStar className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const values = [
    {
      title: "Premium Quality",
      description: "Carefully curated and quality-checked products",
      icon: <FaCheck className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Customer First",
      description: "Your satisfaction drives everything we do",
      icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    {
      title: "Trusted Brands",
      description: "Partnering with reputable brands",
      icon: <FaAward className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  const productCategories = [
    { name: "Beauty", icon: <FaTags className="w-3 h-3 sm:w-4 sm:h-4" />, count: "40+", color: "bg-pink-500" },
    { name: "Fragrances", icon: <FaSprayCan className="w-3 h-3 sm:w-4 sm:h-4" />, count: "40+", color: "bg-purple-500" },
    { name: "Home Decor", icon: <FaHome className="w-3 h-3 sm:w-4 sm:h-4" />, count: "40+", color: "bg-blue-500" },
    { name: "Kitchen", icon: <FaUtensils className="w-3 h-3 sm:w-4 sm:h-4" />, count: "40+", color: "bg-orange-500" },
    { name: "Groceries", icon: <FaShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />, count: "40+", color: "bg-green-500" }
  ];

  return (
    <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Grabit</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-3xl mx-auto leading-relaxed px-2">
          Your trusted destination for premium beauty products, luxury fragrances, elegant home decor, 
          and essential kitchen accessories.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Story
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2020, <strong>GrabIt</strong> emerged from a simple belief: everyone deserves 
                access to high-quality, authentic products that enhance daily life.
              </p>
              <p>
                Our team of product experts meticulously selects each item, working directly with 
                trusted brands and manufacturers to bring you products that combine quality, style, 
                and exceptional value.
              </p>
              <p>
                What sets us apart is our unwavering commitment to authenticity. Every product is 
                genuine, properly sourced, and backed by manufacturer warranties.
              </p>
            </div>
          </div>

          {/* Product Categories */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-100">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">Our Product Range</h3>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
              {productCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">{category.name}</h4>
                  <p className="text-purple-600 text-xs font-medium">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-end">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full translate-y-12 sm:translate-y-24 -translate-x-12 sm:-translate-x-24"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 w-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">Premium Shopping Experience</h3>
                <p className="text-white/90 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Discover curated collections that transform your daily routine into an exceptional experience.
                </p>
                
                {/* Stats Overlay */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">25+</div>
                    <div className="text-white/80 text-xs sm:text-sm">Brand Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold">4.8★</div>
                    <div className="text-white/80 text-xs sm:text-sm">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
              <div className="bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                ⭐ Since 2020
              </div>
            </div>
            
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
              <div className="bg-white text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                🚚 Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-12 sm:mb-16 lg:mb-20">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            Why Choose GrabIt?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-full lg:max-w-2xl mx-auto px-2">
            We're committed to providing an exceptional shopping experience from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-gray-900 to-purple-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 lg:mb-20 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-gray-300 text-xs sm:text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
        {values.map((value, index) => (
          <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <div className="text-white">
                {value.icon}
              </div>
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">{value.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Experience Premium Shopping?
            </h3>
            <p className="text-purple-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-full lg:max-w-2xl mx-auto px-2">
              Join thousands of satisfied customers who trust us for authentic products and exceptional service.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-purple-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                Shop All Products
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 translate-x-8 sm:translate-x-12 lg:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-white/10 rounded-full translate-y-8 sm:translate-y-12 lg:translate-y-24 -translate-x-8 sm:-translate-x-12 lg:-translate-x-24"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;