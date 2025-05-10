import React from 'react';
import { Infinity } from 'lucide-react';

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="text-teal-900">
                <Infinity size={36} strokeWidth={1.5} className="text-teal-900 fill-yellow-600" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold text-teal-900 tracking-wider">INFINIUM</span>
                <div className="flex flex-col text-[10px] leading-tight text-gray-600">
                    <span>FINANCE SOLUTIONS</span>
                    <span className="uppercase italic text-[8px]">endless and limitless</span>
                </div>
            </div>
        </div>
    );
};

export default Logo;