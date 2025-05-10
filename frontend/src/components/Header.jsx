import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainNav from './MainNav';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsScrolled(true);
            } else if (currentScrollY < 50) {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className="w-full">
            <div
                className={`transition-all duration-300 ease-in-out ${isScrolled ? '-translate-y-full h-0 opacity-0' : 'translate-y-0 opacity-100'
                    }`}
            >
                <TopBar />
            </div>
            <div className={`w-full transition-all duration-300 ease-in-out ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
                }`}>
                <MainNav />
            </div>
        </header>
    );
};

export default Header;