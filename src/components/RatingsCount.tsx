"use client";

import { useEffect, useState } from 'react';
import { databases } from '../lib/appwrite';

const RatingsCount = () => {
  const [ratings, setRatings] = useState<number[]>([]);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0, 0]);
  const [average, setAverage] = useState(0);

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

        const total = ratingsData.reduce((acc: number, rating: number) => acc + rating, 0);
        setAverage(total / ratingsData.length);

      } catch (error) {
        console.error('Error fetching ratings:', error);
      }
    };

    fetchRatings();
  }, []);

  const totalCount = ratings.length;

  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-4 md:gap-6 mt-4 px-4 md:px-0 lg:px-0'>
        {counts.map((count, index) => (
          <div key={index}>
            <span className='underline text-zinc-400'>{index + 1} Stjerne rating:</span> <br/> Antal stjerner: <span className='text-red-600'>{count}</span>
  
          </div>
        ))}
      </div>

      <div className='font-extrabold text-zinc-300 mt-2 text-center'><span className='text-red-500 font-bold'>Total Ratings:</span> {totalCount}</div>
      <div className='font-extrabold text-zinc-300 mt-0.5 text-center'><span className='text-red-500 font-bold'>Gennemsnit Ratings:</span> {average.toFixed(2)}</div>
    
    </div>
  );
};

export default RatingsCount;