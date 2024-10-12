"use client";

import { useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';

const RatingsCount = () => {
  const [ratings, setRatings] = useState<number[]>([]);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await databases.listDocuments(   
            process.env.NEXT_APPWRITE_DATABASE_ID, 
            process.env.NEXT_APPWRITE_COLLECTION_RATING, 
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ratingsData = response.documents.map((doc: any) => doc.rating);
        setRatings(ratingsData);

        const countsArray = [0, 0, 0, 0, 0];

        ratingsData.forEach((rating: number) => {
          countsArray[rating - 1]++;
        });
        setCounts(countsArray);

      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
  }, []);

  const totalCount = ratings.length;

  return (
    <div className=''>
      <h3 className='text-lg md:text-2xl lg:text-3xl mt-4 text-center'>Ratings</h3>

      <div className='grid grid-cols-3 gap-4 md:gap-6 mt-2 '>
        {counts.map((count, index) => (
          <div key={index}>
            <span className='underline text-zinc-400'>{index + 1} Stjerne rating:</span> <br/> Antal af stjerner er <span className='text-red-600'>{count}</span>
  
          </div>
        ))}
      </div>

      <div className='font-extrabold text-zinc-300 mt-1.5 text-center'><span className='text-red-500 font-bold'>Total Ratings:</span> {totalCount}</div>
    </div>
  );
};

export default RatingsCount;