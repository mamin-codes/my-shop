import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaSync, FaExternalLinkAlt, FaPaperPlane, FaShoppingBag, FaHeadset, FaShippingFast } from 'react-icons/fa';
import { FiPhoneCall, FiZoomIn, FiZoomOut } from 'react-icons/fi';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mapZoom, setMapZoom] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('customer-service');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setMapZoom(1);
  };

  const contactMethods = [
    {
      icon: <FiPhoneCall className="text-xl sm:text-2xl" />,
      title: "Customer Service",
      details: ["+1 (555) 123-GRAB", "+1 (555) 123-HELP"],
      description: "For order issues & product questions",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <FaHeadset className="text-xl sm:text-2xl" />,
      title: "Sales & Support",
      details: ["+1 (555) 123-SALE", "+1 (555) 123-SHOP"],
      description: "For bulk orders & business inquiries",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      title: "Email Support",
      details: ["support@grabitshop.com", "orders@grabitshop.com"],
      description: "We respond within 2 hours",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <FaShippingFast className="text-xl sm:text-2xl" />,
      title: "Shipping & Returns",
      details: ["+1 (555) 123-SHIP", "returns@grabitshop.com"],
      description: "Delivery tracking & return requests",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  const departments = [
    { id: 'customer-service', name: 'Customer Service', description: 'Order issues & product questions' },
    { id: 'sales', name: 'Sales Team', description: 'Bulk orders & business inquiries' },
    { id: 'shipping', name: 'Shipping & Returns', description: 'Delivery tracking & returns' },
    { id: 'wholesale', name: 'Wholesale', description: 'Business partnerships' }
  ];

  const popularProducts = [
    { name: "Essence Mascara", category: "Beauty" },
    { name: "Calvin Klein Fragrance", category: "Fragrances" },
    { name: "Home Decor Swing", category: "Home Decor" },
    { name: "Bamboo Kitchen Utensils", category: "Kitchen" },
    { name: "Fresh Apples", category: "Groceries" },
    { name: "Chanel Coco Noir", category: "Fragrances" },
    { name: "Designer Table Lamp", category: "Home Decor" },
    { name: "Premium Beef Steak", category: "Groceries" }
  ];

  const storeFeatures = [
    { icon: "🚚", title: "Free Shipping", description: "On orders over $50" },
    { icon: "↩️", title: "Easy Returns", description: "30-day return policy" },
    { icon: "🔒", title: "Secure Payment", description: "100% secure checkout" },
    { icon: "⭐", title: "Premium Quality", description: "150+ trusted brands" },
    { icon: "⏰", title: "24/7 Support", description: "Always here to help" },
    { icon: "🎁", title: "Special Offers", description: "Up to 50% discounts" }
  ];

  return (
    <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 mx-auto overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Contact <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">GrabIt</span> Support
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-3xl mx-auto leading-relaxed px-2">
          Your satisfaction is our priority. Get in touch with our dedicated support team for any questions about our 150+ premium products across beauty, fragrances, home decor, and kitchen categories.
        </p>
      </div>

      {/* Store Features */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
        {storeFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-3 sm:p-4 text-center shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-2xl sm:text-3xl mb-2">{feature.icon}</div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
        {/* Left Column - Contact Information */}
        <div className="space-y-4 sm:space-y-6">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6 hover:shadow-lg sm:hover:shadow-xl transition-all duration-500 w-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${method.bgColor} ${method.textColor} flex-shrink-0`}>
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{method.title}</h3>
                  <p className="text-gray-500 text-sm mb-2 sm:mb-3">{method.description}</p>
                  <div className="space-y-1 sm:space-y-2">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium break-words">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Store Address */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-pink-100 text-pink-600 flex-shrink-0">
                <FaShoppingBag className="text-xl sm:text-2xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">GrabIt Store</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg break-words mb-2">
                  123 Shopping District, Retail Park<br />
                  New York, NY 10001, USA
                </p>
                <p className="text-gray-500 text-sm">
                  📍 Located in the heart of the shopping district
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Office */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-purple-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              GrabIt E-Commerce Ltd.
            </h3>
            <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base lg:text-lg break-words">
              456 Business Avenue, Suite 1200<br />
              Manhattan, New York 10001
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm sm:text-base lg:text-lg" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">4.8/5</span>
              </div>
              <span className="text-gray-500 text-sm sm:text-base lg:text-lg">1,250+ reviews</span>
            </div>
          </div>
        </div>

        {/* Right Column - Map Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Map Container */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-hidden w-full">
            <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Our Store Location</h3>
              <div className="flex gap-1 sm:gap-2">
                <button
                  onClick={handleZoomOut}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Zoom Out"
                >
                  <FiZoomOut className="text-gray-600 text-xs sm:text-sm lg:text-base" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2"
                  title="Reset Zoom"
                >
                  <FaSync className="text-xs" />
                  <span>{Math.round(mapZoom * 100)}%</span>
                </button>
                <button
                  onClick={handleZoomIn}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gray-100 hover:bg-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title="Zoom In"
                >
                  <FiZoomIn className="text-gray-600 text-xs sm:text-sm lg:text-base" />
                </button>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1763151793001!5m2!1sen!2sbd" 
                width="100%" 
                height="300"
                style={{ 
                  border: 0,
                  transform: `scale(${mapZoom})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.3s ease'
                }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="GrabIt Store Location - New York"
                className="rounded-b-xl sm:rounded-b-2xl"
              ></iframe>
            </div>
          </div>

          {/* Map Links */}
          <div className="bg-purple-50 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-purple-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Visit Our Store</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 flex-1 text-sm sm:text-base"
                onClick={() => window.open('https://www.google.com/maps/place/New+York,+NY,+USA', '_blank')}
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                View on Google Maps
              </button>
              <button 
                className="border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 flex-1 text-sm sm:text-base"
                onClick={() => window.open('https://www.google.com/maps/dir//New+York,+NY,+USA', '_blank')}
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Popular Products */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Popular Products</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {popularProducts.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 hover:border-purple-300 transition-colors duration-300">
                  <p className="font-medium text-gray-900 text-xs sm:text-sm mb-1 line-clamp-1">{product.name}</p>
                  <p className="text-purple-600 text-xs">{product.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Send Us a Message</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Get help with orders, products, or any other questions</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                Your Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label htmlFor="department" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you with our products..."
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white outline-none resize-vertical text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            <FaPaperPlane className="text-base sm:text-lg lg:text-xl" />
            {isSubmitting ? 'Sending Message...' : 'Send Message to GrabIt'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;