import React, { useState } from "react";
import { useParams } from "react-router";
import useData from "../../Hooks/useData";
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaShare, FaShoppingCart, FaTruck, FaShieldAlt, FaUndo } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import ProductCart from "./ProductCart";
import SectionHeading from "./SectionHeading";

const SingleProducts = () => {
  const { id } = useParams();
  const { products } = useData();

  const productId = Number(id);
  const findProduct = products.find((p) => p.id === productId);

  const [selectedWeight, setSelectedWeight] = useState(
    findProduct?.weightOptions?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  if (!findProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const {
    name,
    price,
    mrp,
    discount,
    stock,
    description,
    closure,
    sole,
    width,
    outerMaterial,
    weightOptions,
    image,
    ratings,
    images = [image, image, image]
  } = findProduct;

  // Render star ratings
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor((rating / 1000) * totalStars);
    const halfStar = (rating / 1000) * totalStars - fullStars >= 0.5;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        <div className="flex text-amber-400 mr-2">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} className="text-lg" />
          ))}
          {halfStar && <FaStarHalfAlt className="text-lg" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={i} className="text-lg" />
          ))}
        </div>
        <span className="text-gray-600 font-medium text-sm">({ratings} Reviews)</span>
      </div>
    );
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Added to cart:', { product: findProduct, quantity, selectedWeight });
    setIsAddingToCart(false);
  };

  const features = [
    { icon: <FaTruck className="text-xl sm:text-2xl" />, text: "Free Shipping", subtext: "On orders over $50" },
    { icon: <FaUndo className="text-xl sm:text-2xl" />, text: "30-Day Returns", subtext: "Money back guarantee" },
    { icon: <FaShieldAlt className="text-xl sm:text-2xl" />, text: "2-Year Warranty", subtext: "Extended protection" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6 sm:mb-8 overflow-x-auto pb-2">
          <span className="whitespace-nowrap">Home</span>
          <span>/</span>
          <span className="whitespace-nowrap">Shop</span>
          <span>/</span>
          <span className="text-green-600 whitespace-nowrap truncate max-w-[150px]">{name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* IMAGE GALLERY */}
          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 sm:gap-3 order-2 md:order-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {images.slice(0, 4).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index 
                        ? "border-green-500 shadow-md" 
                        : "border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 order-1 md:order-2 w-full">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 w-full">
                  <img
                    src={images[activeImage]}
                    alt={name}
                    className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT DETAILS */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 w-full">
              {/* Header */}
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 break-words">{name}</h1>
                  {renderStars(ratings)}
                </div>
                <div className="flex gap-2 sm:gap-3 flex-shrink-0 ml-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 sm:p-3 rounded-full border transition-all duration-300 ${
                      isWishlisted 
                        ? "bg-red-50 border-red-200 text-red-500" 
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:text-red-500"
                    }`}
                  >
                    <FaHeart className={`text-lg sm:text-xl ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 sm:p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:text-green-600 transition-colors">
                    <FaShare className="text-lg sm:text-xl" />
                  </button>
                </div>
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 flex items-center">
                  {price}
                  <TbCurrencyTaka className="ml-1" />
                </span>
                {mrp > price && (
                  <>
                    <span className="text-xl sm:text-2xl text-gray-400 line-through flex items-center">
                      {mrp}
                      <TbCurrencyTaka className="ml-1" />
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 sm:px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                      -{discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-4 sm:mb-6">
                <span className={`inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                  stock === "In Stock" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {stock}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 break-words">{description}</p>

              {/* Product Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="space-y-2 sm:space-y-3">
                  <p className="break-words"><span className="font-semibold text-gray-900">Closure:</span> <span className="text-gray-700">{closure}</span></p>
                  <p className="break-words"><span className="font-semibold text-gray-900">Sole:</span> <span className="text-gray-700">{sole}</span></p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <p className="break-words"><span className="font-semibold text-gray-900">Width:</span> <span className="text-gray-700">{width}</span></p>
                  <p className="break-words"><span className="font-semibold text-gray-900">Material:</span> <span className="text-gray-700">{outerMaterial}</span></p>
                </div>
              </div>

              {/* Size/Weight Options */}
              {weightOptions?.length > 0 && (
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4">Select Size/Weight:</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {weightOptions.map((w, idx) => (
                      <button
                        key={idx}
                        className={`px-4 py-2 sm:px-6 sm:py-3 border-2 rounded-lg sm:rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                          selectedWeight === w
                            ? "bg-green-600 text-white border-green-600 shadow-lg transform scale-105"
                            : "bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-600 hover:shadow-md"
                        }`}
                        onClick={() => setSelectedWeight(w)}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center mb-6 sm:mb-8">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 mr-3 sm:mr-4 text-sm sm:text-base">Quantity:</span>
                  <div className="flex items-center border-2 border-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
                    <button
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-gray-100 transition-colors disabled:opacity-50 text-sm sm:text-base"
                      onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4 sm:px-6 py-2 sm:py-3 bg-white min-w-12 sm:min-w-16 text-center font-bold text-base sm:text-lg">{quantity}</span>
                    <button
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`flex-1 w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
                    isAddingToCart
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                  }`}
                >
                  <FaShoppingCart className="text-lg sm:text-xl" />
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 rounded-lg bg-gray-50">
                    <div className="text-green-600 mb-2 flex justify-center">
                      {feature.icon}
                    </div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{feature.text}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{feature.subtext}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12 sm:mt-16 lg:mt-20 w-full">
          <SectionHeading 
            heading={"Top Rated"} 
            colorHeading={"Selecting Products"} 
            discription={"The Ultimate shopping you can do here"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {products.slice(0, 5).map(product => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;