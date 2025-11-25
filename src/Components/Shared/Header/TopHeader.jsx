import React, { useState, useEffect, useRef } from 'react';
import { MdOutlinePhoneInTalk, MdLanguage, MdHelpOutline, MdEmail } from "react-icons/md";
import { FaWhatsapp, FaChevronDown, FaHeadset, FaRegClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

const TopHeader = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'bn', name: 'Bangla', flag: '🇧🇩' },
        { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' },
        { code: 'fr', name: 'French', flag: '🇫🇷' }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactInfo = [
        {
            icon: <MdOutlinePhoneInTalk className="text-sm" />,
            label: "Call Us",
            value: "+8801992916505",
            color: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            link: "tel:+8801992916505"
        },
        {
            icon: <FaWhatsapp className="text-sm" />,
            label: "WhatsApp",
            value: "+8801400139956",
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            link: "https://wa.me/8801400139956"
        },
        {
            icon: <IoIosMail className="text-sm" />,
            label: "Email Us",
            value: "support@eshopy.com",
            color: "bg-red-500",
            hoverColor: "hover:bg-red-600",
            link: "mailto:support@eshopy.com"
        },
        {
            icon: <FaRegClock className="text-sm" />,
            label: "Working Hours",
            value: "9AM - 11PM",
            color: "bg-purple-500",
            hoverColor: "hover:bg-purple-600",
            link: null
        }
    ];

    return (
        <div className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-2 border-b transition-all duration-300 ${
            isScrolled ? 'border-gray-600' : 'border-gray-700'
        } w-full max-w-full overflow-x-hidden sticky top-0 z-50 backdrop-blur-sm bg-opacity-95`}>
            
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                {/* Desktop Layout */}
                <div className='hidden md:flex items-center justify-between'>
                    {/* Left Section - Contact Info */}
                    <div className='flex items-center gap-4 lg:gap-6 flex-shrink-0'>
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.link || '#'}
                                target={item.link?.startsWith('http') ? '_blank' : '_self'}
                                rel={item.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                                className={`flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105 ${
                                    !item.link && 'cursor-default'
                                }`}
                            >
                                <div className={`${item.color} ${item.hoverColor} p-2 rounded-full transition-all duration-300 group-hover:shadow-lg flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col'>
                                    <span className='text-white text-xs font-semibold tracking-wide'>{item.label}</span>
                                    <span className='text-gray-300 text-[11px] transition-colors duration-300 group-hover:text-white'>
                                        {item.value}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Center Section - Tagline */}
                    <div className='flex-1 flex justify-center min-w-0 mx-4'>
                        <div className='flex items-center gap-3 max-w-full bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0'></div>
                                <p className='text-gray-300 text-xs font-medium bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent truncate'>
                                    🚀 Fast & Free Shipping | 24/7 Support | 100% Secure
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Navigation */}
                    <div className='flex items-center gap-4 flex-shrink-0'>
                        {/* Help & Support */}
                        <a 
                            href="#help"
                            className='flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105'
                        >
                            <div className='bg-orange-500 p-2 rounded-full group-hover:bg-orange-600 transition-all duration-300 group-hover:shadow-lg'>
                                <BsChatDots className='text-white text-sm' />
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-white text-xs font-semibold'>Live Chat</span>
                                <span className='text-gray-300 text-[11px] group-hover:text-white transition-colors duration-300'>
                                    Get Help
                                </span>
                            </div>
                        </a>

                        {/* Language Selector */}
                        <div className='relative' ref={dropdownRef}>
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className='flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all duration-300 group border border-gray-700 hover:border-gray-600'
                            >
                                <MdLanguage className='text-gray-300 group-hover:text-white text-base transition-colors duration-300' />
                                <span className='text-white text-xs font-medium truncate max-w-20'>
                                    {languages.find(lang => lang.name === selectedLanguage)?.flag} {selectedLanguage}
                                </span>
                                <FaChevronDown className={`text-gray-400 transition-all duration-300 flex-shrink-0 ${
                                    isLanguageOpen ? 'rotate-180 text-white' : 'group-hover:text-white'
                                }`} />
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageOpen && (
                                <div className='absolute top-12 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 min-w-40 z-50 py-2 max-w-full animate-in fade-in-50 zoom-in-95'>
                                    <div className='px-3 py-2 border-b border-gray-100'>
                                        <p className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>Select Language</p>
                                    </div>
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => {
                                                setSelectedLanguage(language.name);
                                                setIsLanguageOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm transition-all duration-200 flex items-center gap-3 hover:bg-gray-50 ${
                                                selectedLanguage === language.name 
                                                    ? 'text-green-600 font-semibold bg-green-50 border-r-2 border-green-500' 
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            <span className='text-base'>{language.flag}</span>
                                            <span className='flex-1'>{language.name}</span>
                                            {selectedLanguage === language.name && (
                                                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Special Offer Badge */}
                        <div className='bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 px-4 py-2 rounded-full flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse'>
                            <span className='text-white text-xs font-bold whitespace-nowrap flex items-center gap-1'>
                                🔥 HOT DEALS
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='md:hidden'>
                    {/* Top Row - Contact & Hot Deal */}
                    <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-2 flex-shrink-0 overflow-x-auto scrollbar-hide'>
                            {contactInfo.slice(0, 2).map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link || '#'}
                                    target={item.link?.startsWith('http') ? '_blank' : '_self'}
                                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className={`flex items-center gap-1 group cursor-pointer transition-all duration-200 flex-shrink-0 ${
                                        !item.link && 'cursor-default'
                                    }`}
                                >
                                    <div className={`${item.color} p-1.5 rounded-full transition-colors duration-200 flex-shrink-0`}>
                                        {item.icon}
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-white text-[10px] font-semibold'>{item.label}</span>
                                        <span className='text-gray-300 text-[9px]'>{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Hot Deal */}
                        <div className='bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1.5 rounded-full flex-shrink-0 shadow-lg'>
                            <span className='text-white text-[10px] font-bold whitespace-nowrap'>HOT 🔥</span>
                        </div>
                    </div>

                    {/* Bottom Row - Tagline & Language */}
                    <div className='flex items-center justify-between gap-2'>
                        {/* Tagline */}
                        <div className='flex-1 min-w-0'>
                            <p className='text-gray-300 text-[10px] text-center truncate bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700'>
                                🚀 Fast Delivery • 24/7 Support • Secure
                            </p>
                        </div>
                        
                        {/* Language Selector */}
                        <div className='relative flex-shrink-0' ref={dropdownRef}>
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className='flex items-center gap-1 bg-gray-800 hover:bg-gray-700 px-2 py-1.5 rounded-lg transition-all duration-200 group border border-gray-700'
                            >
                                <MdLanguage className='text-gray-300 text-xs' />
                                <span className='text-white text-[10px] font-medium truncate max-w-12'>
                                    {languages.find(lang => lang.name === selectedLanguage)?.flag}
                                </span>
                                <FaChevronDown className={`text-gray-400 text-[8px] transition-transform duration-200 ${
                                    isLanguageOpen ? 'rotate-180' : ''
                                }`} />
                            </button>

                            {/* Language Dropdown */}
                            {isLanguageOpen && (
                                <div className='absolute top-8 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 min-w-32 z-50 py-1 max-w-full animate-in fade-in-50 zoom-in-95'>
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => {
                                                setSelectedLanguage(language.name);
                                                setIsLanguageOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 text-xs transition-all duration-200 flex items-center gap-2 hover:bg-gray-50 ${
                                                selectedLanguage === language.name 
                                                    ? 'text-green-600 font-semibold bg-green-50' 
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            <span className='text-sm'>{language.flag}</span>
                                            <span className='flex-1'>{language.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80"></div>
        </div>
    );
};

export default TopHeader;