"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ReadMoreProps {
    text: string;
    maxLength: number;
    className?: string;
}

const GlobalReadMore: React.FC<ReadMoreProps> = ({ text, maxLength, className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="text-gray-800">
            <p className='text-black dark:text-zinc-300 max-w-lg'>
                {isExpanded ? text : `${text.substring(0, maxLength)}...`}
            </p>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={twMerge("text-blue-500 my-2", className)}
                onClick={toggleReadMore}
            >
                {isExpanded ? 'Læs mindre' : 'Læs mere'}
            </motion.button>
        </div>
    );
};

export default GlobalReadMore;