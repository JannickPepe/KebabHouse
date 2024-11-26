'use client';

import { useEffect, useState, ReactNode } from 'react';

interface TimedMessageProps {
  children: ReactNode; // Accept any content as children
  duration: number; // Duration in milliseconds
  backgroundImageUrl?: ReactNode; // Background image URL
}

const TimedMessage: React.FC<TimedMessageProps> = ({ children, duration, backgroundImageUrl }) => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        // Check if the message has already been closed
        const isClosed = localStorage.getItem('timedMessageClosed');

        if (!isClosed) {
            const timer = setTimeout(() => {
                setShowMessage(true);
            }, duration);
            
            return () => clearTimeout(timer);
        }
    }, [duration]);

    const handleClose = () => {
        setShowMessage(false);
        localStorage.setItem('timedMessageClosed', 'true'); // Remember the close action
    };

    return (
        <>
            {showMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-[99999]">
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white p-6 rounded-md shadow-lg text-center max-w-sm w-full"
                        style={{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
                            <div className="relative z-10">
                                {children}
                            <button
                                onClick={handleClose}
                                className="mt-4 px-3 py-1.5 bg-emerald-600 text-zinc-200 rounded-full hover:bg-green-600 font-semibold"
                            >
                                Luk
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TimedMessage;
