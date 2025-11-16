import React, { useState } from 'react';
import { MdOutlinePhoneInTalk, MdLanguage, MdHelpOutline } from "react-icons/md";
import { FaWhatsapp, FaChevronDown, FaHeadset } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHeader = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = ['English', 'Bangla', 'Arabic', 'Spanish', 'French'];

    return (
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 py-2 sm:py-3 border-b border-gray-700 w-full max-w-full overflow-x-hidden box-border'>
            {/* FIXED: Remove container mx-auto and use proper width constraints */}
            <div className=' container mx-auto px-3 sm:px-4 md:px-8 lg:px-8 '>
                {/* Desktop Layout */}
                <div className='hidden md:flex items-center justify-between'>
                    {/* Left Section - Contact Info */}
                    <div className='flex items-center gap-4 lg:gap-6 flex-shrink-0'>
                        {/* Phone */}
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <div className='bg-green-500 p-1 rounded-full group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0'>
                                <MdOutlinePhoneInTalk className='text-white text-sm' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-white text-xs font-medium'>Call Us</span>
                                <span className='text-gray-300 text-[11px]'>01992916505</span>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <div className='bg-green-500 p-1 rounded-full group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0'>
                                <FaWhatsapp className='text-white text-sm' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-white text-xs font-medium'>WhatsApp</span>
                                <span className='text-gray-300 text-[11px]'>01400139956</span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <div className='bg-blue-500 p-1 rounded-full group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0'>
                                <IoIosMail className='text-white text-sm' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-white text-xs font-medium'>Email Us</span>
                                <span className='text-gray-300 text-[11px]'>support@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Tagline */}
                    <div className='flex-1 flex justify-center min-w-0 mx-4'>
                        <div className='flex items-center gap-2 max-w-full'>
                            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0'></div>
                            <p className='text-gray-300 text-xs font-medium bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent truncate'>
                                World's Fastest Online Shopping Destination 🚀
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Navigation */}
                    <div className='flex items-center gap-4 flex-shrink-0'>
                        {/* Help & Support */}
                        <div className='flex items-center gap-2 group cursor-pointer'>
                            <MdHelpOutline className='text-gray-400 group-hover:text-white transition-colors duration-300 text-sm flex-shrink-0' />
                            <span className='text-gray-300 text-xs font-medium group-hover:text-white transition-colors duration-300 whitespace-nowrap'>
                                Help Center
                            </span>
                        </div>

                        {/* Language Selector */}
                        <div className='relative'>
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className='flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 group whitespace-nowrap'
                            >
                                <MdLanguage className='text-sm flex-shrink-0' />
                                <span className='text-xs font-medium truncate'>{selectedLanguage}</span>
                                <FaChevronDown className={`text-[10px] transition-transform duration-300 flex-shrink-0 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageOpen && (
                                <div className='absolute top-8 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-32 z-50 py-2 max-w-full'>
                                    {languages.map((language) => (
                                        <button
                                            key={language}
                                            onClick={() => {
                                                setSelectedLanguage(language);
                                                setIsLanguageOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 truncate ${
                                                selectedLanguage === language 
                                                    ? 'text-green-600 font-semibold bg-green-50' 
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {language}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Special Offer Badge */}
                        <div className='bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full flex-shrink-0'>
                            <span className='text-white text-xs font-bold whitespace-nowrap'>HOT DEALS 🔥</span>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='md:hidden'>
                    {/* Top Row - Contact & Hot Deal */}
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-3 flex-shrink-0'>
                            {/* Phone */}
                            <div className='flex items-center gap-1 group cursor-pointer'>
                                <div className='bg-green-500 p-1 rounded-full group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0'>
                                    <MdOutlinePhoneInTalk className='text-white text-xs' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-[10px] font-medium'>Call</span>
                                    <span className='text-gray-300 text-[9px]'>01992916505</span>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className='flex items-center gap-1 group cursor-pointer'>
                                <div className='bg-green-500 p-1 rounded-full group-hover:bg-green-600 transition-colors duration-300 flex-shrink-0'>
                                    <FaWhatsapp className='text-white text-xs' />
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-[10px] font-medium'>WhatsApp</span>
                                    <span className='text-gray-300 text-[9px]'>01400139956</span>
                                </div>
                            </div>
                        </div>

                        {/* Hot Deal */}
                        <div className='bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded-full flex-shrink-0'>
                            <span className='text-white text-[10px] font-bold'>HOT</span>
                        </div>
                    </div>

                    {/* Bottom Row - Tagline & Language */}
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-300 text-[10px] flex-1 text-center truncate mx-2'>
                            🚀 Fast Shopping
                        </p>
                        
                        {/* Language Selector */}
                        <div className='relative flex-shrink-0'>
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className='flex items-center gap-1 text-gray-300 hover:text-white transition-colors duration-300 group whitespace-nowrap'
                            >
                                <MdLanguage className='text-xs flex-shrink-0' />
                                <span className='text-[10px] font-medium truncate'>{selectedLanguage}</span>
                                <FaChevronDown className={`text-[8px] transition-transform duration-300 flex-shrink-0 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageOpen && (
                                <div className='absolute top-6 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-28 z-50 py-1 max-w-full'>
                                    {languages.map((language) => (
                                        <button
                                            key={language}
                                            onClick={() => {
                                                setSelectedLanguage(language);
                                                setIsLanguageOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-1 text-xs hover:bg-gray-50 transition-colors duration-200 truncate ${
                                                selectedLanguage === language 
                                                    ? 'text-green-600 font-semibold bg-green-50' 
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            {language}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;