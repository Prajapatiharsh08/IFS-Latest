import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-teal-900 text-white py-2.5 px-4 md:px-6 hidden md:block">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center text-md">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <a
                            href="tel:+911234567890"
                            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
                        >
                            <Phone size={16} />
                            <span className=''>+91 1234567890</span>
                        </a>
                        <a
                            href="mailto:info@infiniumfinance.com"
                            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
                        >
                            <Mail size={16} />
                            <span>info@infiniumfinance.com</span>
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Ahmedabad, Maharashtra</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;