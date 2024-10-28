import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import sunIcon from "../assets/icons/sun.png";
import moonIcon from "../assets/icons/full-moon.png";
import Image from 'next/image';

const ToggleWrapper = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.add(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
            <motion.div
                key={theme}
                initial={{ rotate: 0, scale: 1 }}
                animate={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
            >
                {theme === 'light' ? (
                    <Image className='size-3 md:size-4 lg:size-5' src={sunIcon} alt='kebab house sun icon' />
                ) : (
                    <Image className='size-3 md:size-4 lg:size-5' src={moonIcon} alt='kebab house moon icon' />
                )}
            </motion.div>
        </button>
    );
};

export default ToggleWrapper;