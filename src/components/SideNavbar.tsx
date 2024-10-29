"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import menukortIcon from '@/assets/icons/menukort.svg'
import bookingIcon from '@/assets/icons/booking.svg'
import searchIcon from '@/assets/icons/search.svg'


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
            className="fixed right-4 top-1/2 transform -translate-y-1/2 rounded-lg z-[99999] hidden md:block"
        >
            <ul className="space-y-3 text-green-400 font-bold mb-1">
                <li className='hover:scale-110 transition'>
                    <a href="/allfood" className="transition-colors">
                        <Image src={searchIcon} alt='search ikon' className='size-9 bg-green-600 rounded-full p-1 hover:bg-white' />
                    </a>
                </li>

                <li className='hover:scale-110 transition'>
                    <a href="/booking" className="transition-colors">
                        <Image src={bookingIcon} alt='booking ikon' className='size-9 bg-green-600 rounded-full p-1 hover:bg-white' />
                    </a>
                </li>

                <li className='hover:scale-110 transition'>
                    <a href="/menu" className="transition-colors">
                        <Image src={menukortIcon} alt='menukort ikon' className='size-9 bg-green-600 rounded-full p-1 hover:bg-white' />
                    </a>
                </li>
            </ul>
        </motion.div>
    );
};

export default SideNavbar;
