"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const SideNavbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sidebar when scrolled down
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: isVisible ? 0 : 300, opacity: isVisible ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="fixed right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 text-center rounded-lg shadow-lg z-[99999] hidden md:block"
        >
            <ul className="space-y-3 text-green-400 font-bold mb-1">
                <li>
                    <a href="/allfood" className="text-xs border-b border-b-white hover:text-green-600 transition-colors">
                        Søgebar
                    </a>
                </li>

                <li>
                    <a href="/booking" className="text-xs border-b border-b-white hover:text-green-600 transition-colors">
                        Booking
                    </a>
                </li>

                <li>
                    <a href="/menu" className="text-xs border-b border-b-white hover:text-green-600 transition-colors">
                        Menukort
                    </a>
                </li>
            </ul>
        </motion.div>
    );
};

export default SideNavbar;
