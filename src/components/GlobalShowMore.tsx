import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface GlobalShowMoreProps {
    label: string;
    children: React.ReactNode;
    className: string;
}

const GlobalShowMore: React.FC<GlobalShowMoreProps> = ({ label, children, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <button
                onClick={handleClick}
                className={twMerge(`
                    relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                    dark:border-green-300 border-red-300 px-4 py-2 font-semibold
                    uppercase dark:text-green-300 text-red-400 transition-all duration-500
                    before:absolute before:inset-0
                    before:-z-10 before:translate-x-[150%]
                    before:translate-y-[150%] before:scale-[2.5]
                    before:rounded-[100%] dark:before:bg-green-300 before:bg-red-300
                    before:transition-transform before:duration-1000
                    before:content-[""]
                    hover:scale-105 hover:text-neutral-900
                    hover:before:translate-x-[0%]
                    hover:before:translate-y-[0%]
                    active:scale-95`, className
    )}
            >
                {label}
            </button>
            <div
                className={`mt-2 transition-all duration-500 ease-in-out transform ${
                isOpen ? 'opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                {children}
            </div>
        </div>
    );
};

export default GlobalShowMore;