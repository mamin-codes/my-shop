import React from 'react';
import { FaShippingFast, FaHeadset, FaExchangeAlt, FaShieldAlt, FaCheck, FaUsers, FaLeaf, FaHome, FaStar } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';

const AboutSection = () => {
  const services = [
    {
      title: "Free Shipping",
      description: "Enjoy complimentary shipping on all orders across the United States or for international orders above $200",
      icon: <FaShippingFast className="w-8 h-8" />
    },
    {
      title: "24x7 Support",
      description: "Our dedicated customer support team is available round the clock, 365 days a year to assist you",
      icon: <FaHeadset className="w-8 h-8" />
    },
    {
      title: "30 Days Return",
      description: "Not satisfied? We offer hassle-free returns and exchanges within 30 days of purchase",
      icon: <FaExchangeAlt className="w-8 h-8" />
    },
    {
      title: "Payment Secure",
      description: "Shop with confidence using our bank-grade encrypted payment system available 24/7",
      icon: <FaShieldAlt className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: <FaUsers className="w-6 h-6" /> },
    { number: "500+", label: "Quality Products", icon: <FaStar className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <FaHome className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Quality Guaranteed",
      description: "Every product undergoes rigorous quality checks to ensure it meets our high standards",
      icon: <FaCheck className="w-6 h-6" />
    },
    {
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen, adapt, and grow with our community",
      icon: <FaUsers className="w-6 h-6" />
    },
    {
      title: "Sustainable Growth",
      description: "Committed to ethical sourcing and environmentally responsible business practices",
      icon: <FaLeaf className="w-6 h-6" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-24 py-16 font-sans">
      {/* Who We Are Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Left Column - Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are?
            </h1>
            <div className="space-y-4 text-lg text-gray-700">
              <p className="font-semibold leading-relaxed">
                COMMITTED TO DELIVERING EXCELLENCE IN EVERY PRODUCT<br />
                TRANSFORMING HOMES WITH PREMIUM QUALITY ESSENTIALS
              </p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Founded with a passion for quality and customer satisfaction, we are a premier 
              home essentials provider dedicated to enhancing your living experience. For over 
              a decade, we've been curating products that combine functionality, style, and 
              exceptional value.
            </p>
            <p>
              Our journey began with a simple belief: everyone deserves access to high-quality 
              home products that make daily life more comfortable and enjoyable. This philosophy 
              continues to drive our product selection and customer service approach today.
            </p>
            <p>
              We meticulously source each item in our collection, working directly with trusted 
              manufacturers and artisans to ensure every product meets our rigorous standards 
              for quality, durability, and design excellence.
            </p>
            <p>
              Beyond just selling products, we're building a community of homeowners who value 
              quality craftsmanship and thoughtful design. Our team of home lifestyle experts 
              is constantly researching and testing new products to bring you the very best 
              for your home.
            </p>
          </div>
        </div>

        {/* Right Column - Enhanced Image Design */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://sakib-ecommerce-react-router.netlify.app/assets/about-CArRwjB5.png" 
                alt="Our Team & Showroom" 
                className="w-full h-96 object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                Since 2008
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <GiTeamIdea className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Expert Team Members</div>
                </div>
              </div>
            </div>

            {/* Image Title */}
            
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-3xl p-8 md:p-12 mb-16 border border-green-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            We believe exceptional customer service isn't just a department—it's the foundation of everything we do.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center group hover:transform hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Service Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <div className="text-green-600">
                    {stat.icon}
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {values.map((value, index) => (
          <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <div className="text-white">
                {value.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
            <p className="text-gray-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Additional CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Home?
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto text-lg">
              Join our family of 10,000+ satisfied customers who trust us for quality home essentials and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Our Collection
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;