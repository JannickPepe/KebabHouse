"use client"

import { useState } from 'react';
import { Query } from 'appwrite';
import Ratings from '../sections/Ratings';
import { databases } from '@/lib/appwrite';

const RatingPage = () => {
    const [bookingname, setBookingname] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState('');

    const verifyBookingname = async () => {
        try {
        // Use Appwrite Query.equal to search for an bookingname match in the booking collection
        const bookings = await databases.listDocuments(process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_BOOKING_ID, [
            Query.equal('bookingName', bookingname),
        ]);

        if (bookings.documents.length > 0) {
            setIsVerified(true);  // bookingname found, user can proceed
            setError('');
        } else {
            setError('No booking found with this bookingname.');  // No match found
        }
        } catch (err) {
        console.error(err);
        setError('Error verifying bookingname.');
        }
    };

    return (
        <section className="py-24 md:py-32 mt-0 lg:mt-8">
            {!isVerified ? (
                <div className='flex justify-center items-center'>
                    <input
                        type="bookingname"
                        value={bookingname}
                        onChange={(e) => setBookingname(e.target.value)}
                        placeholder="Booking navn"
                        className="p-2 text-black"
                        style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                    />
                    <button 
                        onClick={verifyBookingname} 
                        className="bg-green-600 text-black px-4 py-2"
                        style={{borderTopRightRadius: 10, borderBottomRightRadius: 10}}
                    >
                        Godkend
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            ) : (
                <Ratings />
            )}
        </section>
    );
};

export default RatingPage;
