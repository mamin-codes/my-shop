import React, { useState, useEffect } from 'react';

import { FaArrowRight, FaSnowflake, FaTag, FaClock, FaStar } from 'react-icons/fa';

const LatestExclusive = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 24,
        minutes: 59,
        seconds: 59
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12 mx-auto overflow-x-hidden">
            <div 
                style={{ backgroundImage: `url("https://i.ibb.co.com/Lh2QW3Tj/cover2.jpg")` }} 
                className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] bg-cover bg-center rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden group w-full"
            >
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:to-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
                
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-4 right-4 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-xl sm:blur-2xl opacity-40"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl sm:blur-2xl opacity-40"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center lg:items-end px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12 text-white w-full">
                    {/* Badges */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-4 sm:mb-6 w-full lg:justify-end">
                        <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-red-500 to-pink-600 px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-lg">
                            <FaTag className="text-xs sm:text-sm" />
                            <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Flash Sale</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl border border-white/30">
                            <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Premium Brands</span>
                        </div>
                    </div>

                    {/* Discount Text */}
                    <div className="mb-3 sm:mb-4 text-center lg:text-right w-full">
                        <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-lg sm:rounded-xl border border-white/30">
                            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-red-400 animate-pulse">
                                UP TO 50% OFF
                            </span>
                            <span className="text-sm sm:text-base lg:text-lg text-white">Deal</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-right mb-3 sm:mb-4 leading-tight sm:leading-snug w-full">
                        Premium Collection
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Beauty & Lifestyle
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 text-center lg:text-right mb-4 sm:mb-6 max-w-full sm:max-w-md lg:max-w-lg leading-relaxed">
                        Shop from 150+ premium products including beauty essentials, fragrances, home decor, and kitchen accessories
                    </p>

                    {/* Product Stats */}
                    <div className="flex justify-center lg:justify-end gap-4 sm:gap-6 mb-4 sm:mb-6 w-full">
                        <div className="text-center">
                            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">150+</div>
                            <div className="text-[10px] sm:text-xs text-gray-300">Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-400">5</div>
                            <div className="text-[10px] sm:text-xs text-gray-300">Categories</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-400">50%</div>
                            <div className="text-[10px] sm:text-xs text-gray-300">Max Discount</div>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="flex justify-center lg:justify-end gap-1 sm:gap-2 lg:gap-3 mb-4 sm:mb-6 w-full">
                        {['hours', 'minutes', 'seconds'].map((unit, index) => (
                            <div key={unit} className="text-center bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl border border-white/20 min-w-12 sm:min-w-14 lg:min-w-16">
                                <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-red-400">
                                    {timeLeft[unit].toString().padStart(2, '0')}
                                </div>
                                <div className="text-[10px] sm:text-xs text-gray-300 capitalize">
                                    {unit}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center w-full justify-center lg:justify-end max-w-sm sm:max-w-none mx-auto lg:mx-0">
                        <button className="group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center">
                            <FaStar className="text-sm sm:text-base" />
                            <span className="whitespace-nowrap">Shop All Products</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm" />
                        </button>
                        
                        <button className="group border border-white/30 hover:border-white bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm lg:text-base transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center whitespace-nowrap">
                            Browse Categories
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="flex flex-wrap justify-center lg:justify-end gap-2 sm:gap-3 lg:gap-4 mt-4 sm:mt-6 text-[10px] sm:text-xs text-gray-300">
                        {[
                            { color: 'bg-green-400', text: 'Beauty & Cosmetics' },
                            { color: 'bg-blue-400', text: 'Premium Fragrances' },
                            { color: 'bg-purple-400', text: 'Home & Kitchen' },
                            { color: 'bg-orange-400', text: 'Fresh Groceries' }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <div className={`w-1.5 h-1.5 ${item.color} rounded-full animate-pulse`}></div>
                                <span className="whitespace-nowrap">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 lg:top-6 lg:left-6">
                    <div className="bg-white/10 backdrop-blur-sm p-1 sm:p-2 lg:p-3 rounded-lg border border-white/20">
                        <div className="text-center">
                            <FaClock className="text-red-400 text-sm sm:text-base lg:text-lg mx-auto mb-1" />
                            <div className="text-white font-semibold text-[10px] sm:text-xs lg:text-sm">Ending Soon</div>
                            <div className="text-red-400 text-[10px] sm:text-xs">24H Only</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestExclusive;