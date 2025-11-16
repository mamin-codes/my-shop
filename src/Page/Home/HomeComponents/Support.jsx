import React from "react";
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const Support = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Free Shipping",
      desc: "Free shipping on all US order or order above $200",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "24x7 Support",
      desc: "Contact us 24 hours a day, 7 days a week",
    },
    {
      id: 3,
      icon: <FaUndo className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "30 Days Return",
      desc: "Simply return it within 30 days for an exchange",
    },
    {
      id: 4,
      icon: <FaLock className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: "Payment Secure",
      desc: "Secure payment processing available 24/7",
    },
  ];

  return (
    // FIXED: Remove container class and lg:px-24
    <div className="w-full max-w-full px-3 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20 mx-auto overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center gap-3 sm:gap-4 p-4 sm:p-5 lg:p-6 bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg sm:rounded-xl hover:scale-105 w-full"
          >
            <div className="text-green-600">{item.icon}</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;