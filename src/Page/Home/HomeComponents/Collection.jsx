import React, { useState } from 'react';
import img1 from "../../../assets/image/12.jpg";
import img2 from "../../../assets/image/13 (1).jpg";
import img3 from "../../../assets/image/14.jpg";
import { Link } from 'react-router'; // Fixed import
import { FaArrowRight, FaFemale, FaChild, FaMale } from 'react-icons/fa';

const Collection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const collections = [
        {
            id: 1,
            title: "Women's",
            subtitle: "Collection",
            image: img1,
            icon: <FaFemale className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Women",
            gradient: "from-pink-500/80 to-purple-600/80",
            link: "/shop?category=women"
        },
        {
            id: 2,
            title: "Children's",
            subtitle: "Collection",
            image: img2,
            icon: <FaChild className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Kids",
            gradient: "from-blue-500/80 to-cyan-600/80",
            link: "/shop?category=kids"
        },
        {
            id: 3,
            title: "Men's",
            subtitle: "Collection",
            image: img3,
            icon: <FaMale className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Men",
            gradient: "from-green-500/80 to-emerald-600/80",
            link: "/shop?category=men"
        }
    ];

    return (
        // FIXED: Remove max-w-[1920px] and lg:px-24
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto overflow-x-hidden">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Explore Our <span className="text-green-600">Collections</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
                    Discover curated fashion for every member of your family. Quality styles for all occasions.
                </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {collections.map((collection) => (
                    <div
                        key={collection.id}
                        className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 w-full"
                        onMouseEnter={() => setHoveredCard(collection.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Background Image */}
                        <div
                            className="h-64 sm:h-80 lg:h-96 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 w-full"
                            style={{ backgroundImage: `url(${collection.image})` }}
                        >
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-500`}></div>
                            
                            {/* Additional Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 lg:p-8 text-white w-full">
                            {/* Top Section - Icon and Badge */}
                            <div className="flex justify-between items-start w-full">
                                <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/30">
                                    {collection.icon}
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/30">
                                    <span className="text-xs sm:text-sm font-semibold">New Arrivals</span>
                                </div>
                            </div>

                            {/* Center Section - Text */}
                            <div className="text-center transform transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-4 w-full">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                                    {collection.title}
                                </h3>
                                <p className="text-lg sm:text-xl lg:text-2xl font-light opacity-90">
                                    {collection.subtitle}
                                </p>
                            </div>

                            {/* Bottom Section - Button */}
                            <div className="transform transition-all duration-500 group-hover:translate-y-2 sm:group-hover:translate-y-4 opacity-0 group-hover:opacity-100 w-full">
                                <Link to={collection.link}>
                                    <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50 hover:border-white text-white font-semibold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 group/btn text-sm sm:text-base">
                                        {collection.buttonText}
                                        <FaArrowRight className="group-hover/btn:translate-x-1 sm:group-hover/btn:translate-x-2 transition-transform duration-300 text-sm sm:text-base" />
                                    </button>
                                </Link>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 sm:border-4 border-transparent group-hover:border-white/30 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"></div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 sm:mt-12">
                <Link to="/shop">
                    <button className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto">
                        View All Collections
                        <FaArrowRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </Link>
            </div>

            {/* FIXED: Background Decorative Elements - No negative translations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute left-0 top-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute right-0 top-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl opacity-50"></div>
            </div>
        </div>
    );
};

export default Collection;