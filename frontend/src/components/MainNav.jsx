import React, { useState } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [plansDropdownOpen, setPlansDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 py-3 px-4 xl:px-6">
            <div className="container mx-auto h-auto">
                <div className="flex items-center justify-between w-full">
                    {/* Logo - Left */}
                    <div className="flex-shrink-0">
                        <a href="/">
                            <Logo />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-900"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center justify-between flex-grow">
                        <div className="flex justify-center flex-grow gap-4">
                            <NavItem href="/" label="Home" active />
                            <NavItem href="/about" label="About Us" />
                            <NavItem href="/plans" label="Investment Plans" />
                            <NavItem href="/how-it-works" label="How It Works" />
                            <NavItem href="/calculator" label="Calculator" />
                            <NavItem href="/faqs" label="FAQs" />
                            <NavItem href="/contact" label="Contact" />
                        </div>
                        <div className="flex-shrink-0 ml-4">
                            <Link
                                to="/login"
                                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200"
                            >
                                Login / Register
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`xl:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="flex h-auto flex-col gap-2 pb-4 overflow-auto">
                        <a href="/" className="px-4 py-2 text-base font-medium text-teal-900 bg-gray-50 rounded-md">
                            Home
                        </a>

                        {/* About Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setAboutDropdownOpen(prev => !prev)}
                                className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md"
                            >
                                <span>About Us</span>
                            </button>
                        </div>

                        {/* Plans Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setPlansDropdownOpen(prev => !prev)}
                                className="w-full flex justify-between items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md"
                            >
                                <span>Investment Plans</span>
                            </button>
                        </div>

                        <a href="/how-it-works" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md">
                            How It Works
                        </a>
                        <a href="/calculator" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md">
                            Calculator
                        </a>
                        <a href="/faqs" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md">
                            FAQs
                        </a>
                        <a href="/contact" className="px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-900 hover:bg-gray-50 rounded-md">
                            Contact
                        </a>

                        <div className="mt-4 px-4">
                            <a
                                href="/login"
                                className="block w-full text-center py-2.5 text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700 rounded-md transition-colors duration-200"
                            >
                                Login / Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
