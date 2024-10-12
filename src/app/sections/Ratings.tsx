"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { databases } from '../../lib/appwrite';
import Rating from '@/components/Rating';
import { FaStar } from 'react-icons/fa6';
import { Query } from 'appwrite';
import RatingsCount from '@/components/RatingsCount';
import GlobalShowMore from '@/components/GlobalShowMore';

const Ratings = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const [ratings, setRatings] = useState<number[]>([]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await databases.listDocuments(
                    process.env.NEXT_APPWRITE_DATABASE_ID, 
                    process.env.NEXT_APPWRITE_COLLECTION_RATING,
                    [
                        Query.limit(12), // Limit the results to 5 documents
                        Query.orderDesc('$createdAt') // Sort by creation date in descending order
                    ]
                );
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const fetchedRatings = response.documents.map((doc: any) => doc.rating);
                setRatings(fetchedRatings);
                
                } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };

        fetchRatings();
    }, []);

    return (
        <motion.section 
        ref={ref}
        initial={{ opacity: 1, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100, x: isInView ? 0: 150 }}
        transition={{ duration: 0.5 }}
        className='py-10 lg:py-20'>
            <h3 className='text-lg md:text-2xl lg:text-3xl text-center max-w-[540px] mx-auto text-black dark:text-white'>
                Vi bestræber os altid efter at gøre vores bedste - din mening  <span className='underline'>betyder meget</span>
            </h3>

            <div className='flex justify-center mt-6'>
                <Rating />
            </div>

            <h4 className='text-center mt-6 text-green-600'>Vores nye ratings fra kunder</h4>
            <div className='flex justify-center items-center mt-6'>
                <ul className='grid grid-cols-3 md:grid-cols-6 gap-4 mx-auto'>
                    {ratings.map((rate, index) => (
                        <li className='flex items-center gap-1 border border-zinc-800 dark:border dark:border-zinc-300 px-3 py-3 rounded-full hover:scale-105 transition hover:shadow-md hover:shadow-amber-600' key={index}>
                            <span className='text-zinc-800 dark:text-zinc-400'>
                                {rate}
                            </span>
                            <FaStar className='size-3 md:size-4 lg:size-4 text-[#ffa357]' />
                        </li>
                    ))}
                </ul>

            </div>

            <div className='flex justify-center items-center mt-8'>
                <GlobalShowMore label="Kunders Ratings" className='mx-auto mt-2'>
                    <RatingsCount />
                </GlobalShowMore>
            </div>
        </motion.section>
    )
}

export default Ratings
