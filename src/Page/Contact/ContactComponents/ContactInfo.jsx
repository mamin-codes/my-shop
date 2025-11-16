import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaStar, FaSync, FaExternalLinkAlt, FaPaperPlane } from 'react-icons/fa';
import { FiPhoneCall, FiZoomIn, FiZoomOut } from 'react-icons/fi';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [mapZoom, setMapZoom] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      title: "Primary Phone",
      details: ["01753924093", "01753924094"],
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <FaPhone className="text-xl sm:text-2xl" />,
      title: "Support Line",
      details: ["01753924095", "01753924096"],
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      title: "Email Address",
      details: ["support@bdcalling.com", "info@bdcalling.com"],
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    }
  ];

  const wordCompoItems = [
    { title: "Bangladesh Television", description: "BTV content rating" },
    { title: "BioMaster", description: "Jairo" },
    { title: "Pakl Sirov", description: "Peking Hua" },
    { title: "Tamura", description: "Tamanu" },
    { title: "Samsung Service Center", description: "Shantung District" },
    { title: "Gongb", description: "Anhui, Yinjiang, Hong Kong" },
    { title: "Yue Zhi", description: "China" },
    { title: "Temu", description: "Jinanxi, Lengsuan" }
  ];

  return (
    // FIXED: Remove max-w-[1920px] and lg:px-24
    <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 mx-auto overflow-x-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
          Contact <span className="text-green-600">With Us</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-full lg:max-w-3xl mx-auto leading-relaxed px-2">
          Customer service should not be a department. It should be the entire company. 
          We're here to help you 24/7 with any questions or concerns.
        </p>
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

          {/* Address Section */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-orange-100 text-orange-600 flex-shrink-0">
                <FaMapMarkerAlt className="text-xl sm:text-2xl" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Our Address</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg break-words">
                  Ruami Mello Maraes Filho, 987 - Salvador - MA, 40382, Brazil.
                </p>
              </div>
            </div>
          </div>

          {/* Corporate Office */}
          <div className="bg-green-50 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-green-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Bdcalling IT Ltd. - Corporate Office
            </h3>
            <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base lg:text-lg break-words">
              Daisy Garden, Hill 14, Block84, Main Road, Khabara 1703
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm sm:text-base lg:text-lg" />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold text-sm sm:text-base">4.5/5</span>
              </div>
              <span className="text-gray-500 text-sm sm:text-base lg:text-lg">54 reviews</span>
            </div>
          </div>
        </div>

        {/* Right Column - Map Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Map Container */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-hidden w-full">
            <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">Our Location</h3>
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
                  className="px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-1 sm:gap-2"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12370371.792462897!2d2.124175805707276!3d40.80356989527924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe82448dd203%3A0xe22cf55c24635e6f!2sItaly!5e0!3m2!1sen!2sbd!4v1763151793001!5m2!1sen!2sbd" 
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
                title="Our Location Map"
                className="rounded-b-xl sm:rounded-b-2xl"
              ></iframe>
            </div>
          </div>

          {/* Map Links */}
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-blue-200 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Explore Our Location</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 flex-1 text-sm sm:text-base"
                onClick={() => window.open('https://www.google.com/maps/place/Italy', '_blank')}
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                View on Google Maps
              </button>
              <button 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2 flex-1 text-sm sm:text-base"
                onClick={() => window.open('https://www.google.com/maps/place/Italy', '_blank')}
              >
                <FaExternalLinkAlt className="text-xs sm:text-sm" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Word Compo Section */}
      <div className="bg-gray-50 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center">Our Partners & Services</h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {wordCompoItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
            >
              <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Send Us a Message</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">We'll get back to you within 24 hours</p>
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
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
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white outline-none text-sm sm:text-base"
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
              placeholder="Tell us how we can help you..."
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white outline-none resize-vertical text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
            }`}
          >
            <FaPaperPlane className="text-base sm:text-lg lg:text-xl" />
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactInfo;