import { useState } from 'react';
import { databases } from '../lib/appwrite';
import { FaStar } from "react-icons/fa6";



const Rating = () => {
    const [rating, setRating] = useState(0);
    const [submittedRating, setSubmittedRating] = useState<number | null>(null);

    const handleRating = async (rate: number) => {
        setRating(rate);
        try {
        const response = await databases.createDocument(process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_RATING, 'unique()', { rating: rate });
        setSubmittedRating(response.rating);
        } catch (error) {
        console.error('Error submitting rating:', error);
        }
    };

    return (
        <div className='flex justify-center items-center gap-1.5'>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                    className='hover:scale-110 transition '
                >
                    <FaStar className='size-4 md:size-6 lg:size-8 hover:text-[#fbb060]' />
                </span>
            ))}
            {submittedRating !== null && <p>Angivet Rating: {submittedRating} stars</p>}
        </div>
    );
};

export default Rating;