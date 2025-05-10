import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const NavItem = (props) => {
    const { href, label, dropdown, active } = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!dropdown) {
        return (
            <a
                href={href}
                className={`px-4 py-2 text-md font-medium transition-colors duration-200 ${active ? 'text-teal-900' : 'text-gray-700 hover:text-teal-900'
                    }`}
            >
                {label}
            </a>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${active || isOpen ? 'text-teal-900' : 'text-gray-700 hover:text-teal-900'
                    }`}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                aria-expanded={isOpen}
            >
                {label}
                <ChevronDown
                    size={16}
                    className={`ml - 1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`absolute z-10 left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                role="menu"
                aria-orientation="vertical"
            >
                <div className="py-1" role="none">
                    {dropdown.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-900 transition-colors duration-200"
                            role="menuitem"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavItem; 