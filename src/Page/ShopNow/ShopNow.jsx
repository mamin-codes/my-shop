import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import ProductCart from '../../Components/Shared/ProductCart';

const ShopNow = () => {
    const { category, products } = useData();
    const [id, setId] = useState(null);
    const [width, setWidth] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleClick = (cid) => {
        setId(prev => prev === cid ? null : cid); // toggle category
    };

    const handleClickWidth = (w) => {
        setWidth(prev => prev === w ? null : w); // toggle width
    };

    // Filter products
    const filterData = products.filter(p => {
        const matchedCategory = id ? p.categoryId == id : true;
        const matchedWidth = width ? p.width == width : true;
        return matchedCategory && matchedWidth;
    });

    return (
        <div className="w-full max-w-full overflow-x-hidden">
            {/* Mobile Filter Button */}
            <div className="lg:hidden px-3 sm:px-4 mb-4">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                    <span>📋 Filters</span>
                    <span>{isSidebarOpen ? '▲' : '▼'}</span>
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 w-full max-w-full px-3 sm:px-4 lg:px-6 mt-6 sm:mt-8 lg:mt-12 mx-auto">

                {/* LEFT SIDEBAR */}
                <div className={`w-full lg:w-3/12 xl:w-2/12 ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
                    
                    {/* CATEGORY FILTER */}
                    <div className="border border-gray-200 p-3 sm:p-4 rounded-lg">
                        <p className='border-b border-gray-200 pb-2 sm:pb-3 mb-3 sm:mb-4 font-semibold text-gray-900'>Category</p>

                        <div className="space-y-1 sm:space-y-2">
                            {category.map(cat => (
                                <div key={cat.id} className="flex gap-2 items-center cursor-pointer">
                                    <input 
                                        type="checkbox"
                                        checked={id === cat.id}
                                        onChange={() => handleClick(cat.id)}
                                        className="w-4 h-4 text-green-600"
                                    />
                                    <p 
                                        className="cursor-pointer text-sm sm:text-base hover:text-green-600 transition-colors"
                                        onClick={() => handleClick(cat.id)}
                                    >
                                        {cat.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* WIDTH FILTER */}
                    <div className='border border-gray-200 p-3 sm:p-4 rounded-lg mt-4 sm:mt-6 lg:mt-8'>
                        <p className='border-b border-gray-200 pb-2 sm:pb-3 mb-3 sm:mb-4 font-semibold text-gray-900'>Width</p>

                        <div className="space-y-1 sm:space-y-2">
                            {[...new Set(products.map(p => p.width))].map(w => (
                                <div key={w} className="flex gap-2 items-center cursor-pointer">
                                    <input 
                                        type="checkbox"
                                        checked={width === w}
                                        onChange={() => handleClickWidth(w)}
                                        className="w-4 h-4 text-green-600"
                                    />
                                    <p 
                                        className="cursor-pointer text-sm sm:text-base hover:text-green-600 transition-colors"
                                        onClick={() => handleClickWidth(w)}
                                    >
                                        {w}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CLEAR FILTER BUTTON */}
                        {(id || width) && (
                            <button 
                                onClick={() => { setId(null); setWidth(null); }} 
                                className="w-full bg-red-500 text-white px-3 sm:px-4 py-2 rounded-md mt-3 sm:mt-4 hover:bg-red-600 transition-colors text-sm sm:text-base"
                            >
                                Clear Filter
                            </button>
                        )}
                    </div>

                    {/* Mobile Close Button */}
                    <div className="lg:hidden mt-4">
                        <button 
                            onClick={() => setIsSidebarOpen(false)}
                            className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold"
                        >
                            Close Filters
                        </button>
                    </div>
                </div>

                {/* RIGHT PRODUCT GRID */}
                <div className="w-full lg:w-9/12 xl:w-10/12">
                    {/* Results Count */}
                    <div className="mb-4 sm:mb-6">
                        <p className="text-gray-600 text-sm sm:text-base">
                            Showing {filterData.length} of {products.length} products
                            {(id || width) && " (filtered)"}
                        </p>
                    </div>

                    {/* PRODUCTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                        {filterData.map(product => (
                            <ProductCart key={product.id} product={product} />
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filterData.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                            <button 
                                onClick={() => { setId(null); setWidth(null); }} 
                                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopNow;