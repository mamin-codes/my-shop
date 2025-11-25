import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaShoppingBag, FaTag, FaClock, FaStar, FaShippingFast } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Everything for Your",
      highlight: "Beautiful Lifestyle",
      discount: "50% Off",
      description: "Discover premium beauty essentials, luxury fragrances, and daily groceries in one place",
      buttonText: "Shop All Categories",
      badge: "Premium Quality"
    },
    {
      title: "Fresh Groceries &",
      highlight: "Home Essentials",
      discount: "40% Off",
      description: "From farm-fresh produce to stylish home decor - quality you can trust every day",
      buttonText: "Explore Essentials",
      badge: "Fresh Arrivals"
    },
    {
      title: "Luxury Fragrances &",
      highlight: "Beauty Collection",
      discount: "30% Off",
      description: "Elevate your routine with premium cosmetics and exquisite perfumes from top brands",
      buttonText: "Discover Luxury",
      badge: "Luxury Edit"
    },
    {
      title: "Kitchen & Home",
      highlight: "Living Upgrade",
      discount: "35% Off",
      description: "Transform your space with modern kitchen tools and elegant home accessories",
      buttonText: "Upgrade Home",
      badge: "Smart Living"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-section w-full max-w-full px-3 sm:px-4 lg:px-6 mt-4 sm:mt-6 lg:mt-8 mx-auto overflow-x-hidden relative z-10">
      <div className="relative overflow-hidden w-full">
        {/* Background with Overlay */}
        <div
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=700&fit=crop")` }}
          className="relative bg-cover bg-center w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden"
        >
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 lg:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Fixed Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl sm:blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center items-start h-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 text-white w-full">
            {/* Badge */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 w-full">
              <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-500 to-pink-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                <FaTag className="text-xs sm:text-sm" />
                <span className="text-xs sm:text-sm font-bold">{slides[currentSlide].badge}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-green-600/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg">
                <FaStar className="text-xs sm:text-sm" />
                <span className="text-xs sm:text-sm font-bold">Top Brands</span>
              </div>
            </div>

            {/* Discount Text */}
            <div className="mb-3 sm:mb-4 w-full">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-white/30">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400 animate-pulse">
                  {slides[currentSlide].discount}
                </span>
                <span className="text-white text-sm sm:text-base lg:text-lg">Selected Categories</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-snug lg:leading-tight w-full">
              {slides[currentSlide].title}{' '}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent block sm:inline">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 max-w-full lg:max-w-2xl leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full">
              <button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
                <FaShoppingBag className="text-base sm:text-lg lg:text-xl" />
                {slides[currentSlide].buttonText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base" />
              </button>
              
              <button className="group border border-white/30 hover:border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:scale-105 w-full sm:w-auto">
                View Deals
              </button>
            </div>

            {/* Features - Updated to match your categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 w-full">
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaStar className="text-white text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Beauty</p>
                  <p className="text-xs sm:text-sm text-gray-300">Premium Cosmetics</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaTag className="text-white text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Fragrances</p>
                  <p className="text-xs sm:text-sm text-gray-300">Luxury Brands</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaShoppingBag className="text-white text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Groceries</p>
                  <p className="text-xs sm:text-sm text-gray-300">Fresh & Organic</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaShippingFast className="text-white text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-sm sm:text-base">Home & Kitchen</p>
                  <p className="text-xs sm:text-sm text-gray-300">Quality Tools</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all duration-500 ${
                  currentSlide === index 
                    ? 'bg-green-400 w-6 sm:w-8 h-2 sm:h-3' 
                    : 'bg-white/50 hover:bg-white/80 w-2 sm:w-3 h-2 sm:h-3'
                }`}
              />
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-white/20">
              <div className="text-center">
                <div className="text-sm sm:text-base lg:text-lg font-bold text-white">Sale Ends</div>
                <div className="text-yellow-400 text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mt-1 sm:mt-2">24:59:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-b-lg sm:rounded-b-xl lg:rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default Hero;