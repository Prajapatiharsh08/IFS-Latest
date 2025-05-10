import { useEffect, useState } from 'react';
import { FaChevronUp } from "react-icons/fa";
import Hero from '../Hero';
import Features from '../Features';
import OurInvest from '../OurInvest';
import Calculate from '../Calculate';
import InvestPlans from '../InvestPlans';
// import NewsletterFooter from '../NewsletterFooter';
// import Header from '../Header';
// import Footer from '../Footer';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            <>
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed z-30 bottom-6 right-6 p-4 rounded-full bg-[#0E4B4D] text-white shadow-lg hover:bg-[#0c3f41] transition-all duration-300"
                    >
                        <FaChevronUp size={20} />
                    </button>
                )}
            </>

            {/* <Header /> */}
            <Hero />
            <Features />
            <OurInvest />
            <Calculate />
            <InvestPlans />
            {/* <NewsletterFooter /> */}
            {/* <Footer /> */}
        </div>
    );
}