import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaArrowRight, FaStar, FaShoppingBag, FaHome, FaUtensils, FaSprayCan } from 'react-icons/fa';

const Collection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const collections = [
        {
            id: 1,
            title: "Beauty & Cosmetics",
            subtitle: "Premium Collection",
            image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
            icon: <FaStar className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Beauty",
            gradient: "from-pink-500/80 to-purple-600/80",
            link: "/shop?category=beauty",
            items: "40+ Products",
            discount: "Up to 50% OFF"
        },
        {
            id: 2,
            title: "Premium Fragrances",
            subtitle: "Luxury Scents",
            image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
            icon: <FaSprayCan className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Fragrances",
            gradient: "from-blue-500/80 to-cyan-600/80",
            link: "/shop?category=fragrances",
            items: "40+ Products",
            discount: "Up to 29% OFF"
        },
        {
            id: 3,
            title: "Home Decor",
            subtitle: "Elegant Living",
            image: "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
            icon: <FaHome className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Home",
            gradient: "from-green-500/80 to-emerald-600/80",
            link: "/shop?category=home-decor",
            items: "40+ Products",
            discount: "Up to 27% OFF"
        },
        {
            id: 4,
            title: "Kitchen Essentials",
            subtitle: "Smart Cooking",
            image: "https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp",
            icon: <FaUtensils className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Kitchen",
            gradient: "from-orange-500/80 to-red-600/80",
            link: "/shop?category=kitchen",
            items: "40+ Products",
            discount: "Up to 41% OFF"
        },
        {
            id: 5,
            title: "Fresh Groceries",
            subtitle: "Quality Foods",
            image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
            icon: <FaShoppingBag className="text-2xl sm:text-3xl" />,
            buttonText: "Shop Groceries",
            gradient: "from-yellow-500/80 to-amber-600/80",
            link: "/shop?category=groceries",
            items: "40+ Products",
            discount: "Up to 50% OFF"
        }
    ];

    // Get featured products for each category
    const getFeaturedProducts = (categoryId) => {
        const products = categoriesData.filter(product => product.categoryId === categoryId);
        return products.slice(0, 2); // Get first 2 products for preview
    };

    return (
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 mx-auto overflow-x-hidden">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Shop By <span className="text-green-600">Categories</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
                    Discover {categoriesData.length}+ premium products across 5 categories. Quality guaranteed with exclusive discounts.
                </p>
                
                {/* Stats */}
                <div className="flex justify-center gap-6 sm:gap-8 mt-6">
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">{categoriesData.length}+</div>
                        <div className="text-xs sm:text-sm text-gray-500">Products</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">5</div>
                        <div className="text-xs sm:text-sm text-gray-500">Categories</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">50%</div>
                        <div className="text-xs sm:text-sm text-gray-500">Max Discount</div>
                    </div>
                </div>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                {collections.map((collection) => {
                    const categoryProducts = getFeaturedProducts(collection.id);
                    return (
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
                                    <div className="bg-red-500/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-white/30">
                                        <span className="text-xs font-semibold">{collection.discount}</span>
                                    </div>
                                </div>

                                {/* Center Section - Text */}
                                <div className="text-center transform transition-all duration-500 group-hover:-translate-y-2 w-full">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">
                                        {collection.title}
                                    </h3>
                                    <p className="text-sm sm:text-base lg:text-lg font-light opacity-90 mb-2">
                                        {collection.subtitle}
                                    </p>
                                    <div className="text-xs sm:text-sm opacity-80 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full inline-block">
                                        {collection.items}
                                    </div>
                                    
                                    {/* Mini Product Preview */}
                                    <div className="flex justify-center gap-1 mt-2">
                                        {categoryProducts.map((product, index) => (
                                            <div key={index} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/30 bg-white/20 backdrop-blur-sm">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Section - Button */}
                                <div className="transform transition-all duration-500 group-hover:translate-y-2 opacity-0 group-hover:opacity-100 w-full">
                                    <Link to={collection.link}>
                                        <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/50 hover:border-white text-white font-semibold py-2 sm:py-3 px-4 rounded-xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2 group/btn text-xs sm:text-sm">
                                            {collection.buttonText}
                                            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300 text-xs" />
                                        </button>
                                    </Link>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"></div>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-8 sm:mt-12">
                <Link to="/shop">
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 flex items-center gap-2 sm:gap-3 mx-auto">
                        Explore All Products
                        <FaArrowRight className="group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </Link>
                
                {/* Additional Info */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>Secure Payment</span>
                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute left-0 top-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute right-0 top-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl opacity-50"></div>
            </div>
        </div>
    );
};

// Add this categoriesData array at the bottom of the file (or import it)
const categoriesData = [
  // Your product data here (the 30 products you provided)
  {
    "id": 1,
    "name": "Essence Mascara Lash Princess",
    "categoryId": 1,
    "categoryName": "Beauty",
    "price": 9.99,
    "mrp": 19.99,
    "discount": 50,
    "sku": "BEA-ESS-001",
    "stock": "In Stock",
    "ratings": 256,
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
    "brand": "Essence",
    "brandFilter": "Essence",
    "closure": "Twist Cap",
    "sole": "N/A",
    "width": "Standard",
    "outerMaterial": "Plastic",
    "weightOptions": ["50ml", "100ml", "200ml"],
    "quantity": 1,
    "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
  },
  // ... include all your other 29 products
];

export default Collection;