import React from "react";

const ResponsiveDemo = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden box-border font-sans">
      
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#hero" className="hover:underline">Home</a>
            <a href="#cards" className="hover:underline">Projects</a>
            <a href="#footer" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Welcome to My Responsive Demo
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            This layout adjusts automatically across all devices. Resize your
            browser to see how elements scale beautifully without breaking.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Cards Section */}
      <section id="cards" className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Projects
          </h3>

          <div className="flex flex-wrap -mx-2">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div
                key={card}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
                  <img
                    src={`https://via.placeholder.com/400x200?text=Project+${card}`}
                    alt={`Project ${card}`}
                    className="w-full h-auto object-cover rounded mb-2"
                  />
                  <h4 className="text-lg font-semibold mb-1">
                    Project {card}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    A responsive card example that scales well on all devices.
                  </p>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition text-sm sm:text-base">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm sm:text-base">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
      <div>
        <div class="w-full max-w-full overflow-x-hidden box-border bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
    
    
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div class="bg-white shadow rounded p-4">
          <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Card Title
          </h3>
          <p class="text-sm sm:text-base md:text-base lg:text-lg text-gray-600">
            Responsive parent div pattern that works on all devices.
          </p>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <div class="bg-white shadow rounded p-4">
          <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Card Title
          </h3>
          <p class="text-sm sm:text-base md:text-base lg:text-lg text-gray-600">
            Scales perfectly on small, medium, and large screens.
          </p>
        </div>
      </div>
      
     
    </div>

  </div>
</div>
      </div>
    </div>
  );
};

export default ResponsiveDemo;
