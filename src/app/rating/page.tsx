"use client"

import { useState } from 'react';
import { Query } from 'appwrite';
import Ratings from '../sections/Ratings';
import { databases } from '@/lib/appwrite';

const RatingPage = () => {

    const [bookingname, setBookingname] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [email, setEmail] = useState('');
    const [retrievedBookingName, setRetrievedBookingName] = useState('');
    const [error, setError] = useState('');
    const [errorCount, setErrorCount] = useState(0); // Counter for errors
    const [errorName, setErrorName] = useState('');

    const verifyBookingname = async () => {
        try {
        // Use Appwrite Query.equal to search for an bookingname match in the booking collection
        const bookings = await databases.listDocuments(process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_BOOKING_ID, [
            Query.equal('bookingName', bookingname),
        ]);

        if (bookings.documents.length > 0) {
            setIsVerified(true);  // bookingname found, user can proceed
            setError('');
            setErrorCount(0); // Reset error count on success
        } else {
            setError('No booking found with this bookingname.');  // No match found
            setErrorCount((prev) => prev + 1); // Increment error count
        }
        } catch (err) {
        console.error(err);
        setError('Error verifying bookingname.');
        setErrorCount((prev) => prev + 1); // Increment error count
        }
    };

    const retrieveBookingNameByEmail = async () => {
        try {
            const bookings = await databases.listDocuments(
                process.env.NEXT_APPWRITE_DATABASE_ID!,
                process.env.NEXT_APPWRITE_COLLECTION_BOOKING_ID!,
                [Query.equal("email", email)]
            );
    
            if (bookings.documents.length > 0) {
                setRetrievedBookingName(bookings.documents[0].bookingName);
                setErrorName("");
                } else {
                setErrorName("No booking found with this email.");
            }
        } catch (err) {
            console.error(err);
            setError("Error retrieving booking name by email.");
        }
    };

    return (
        <section className="py-24 md:py-32 mt-0 lg:mt-8">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-center mb-6">
                Indtast dit <span className="text-green-600">booking</span> navn og start din <span className="text-green-600">rating</span>
            </h2>

            {!isVerified ? (
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    <input
                        type="text"
                        value={bookingname}
                        onChange={(e) => setBookingname(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              verifyBookingname(); // Trigger retrieval when Enter is pressed
                            }
                        }}
                        placeholder="Booking navn"
                        className="p-2 text-black focus:outline-none"
                        style={{
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        }}
                    />
                    <button
                        onClick={verifyBookingname}
                        className="bg-green-600 text-black px-4 py-2 hover:text-white transition-colors"
                        style={{
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        }}
                    >
                        Godkend
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}

                {/* Show email input after 3 errors */}
                {errorCount >= 3 && (
                    <div className='border-2 border-green-600 rounded-md px-4 py-4 text-center mt-8'>
                        <h4 className='text-base md:text-xl lg:text-2xl'>Har du glemt dit booking navn?</h4>
                        <p className='text-zinc-400'>Indtast din email her</p>

                        <div className="flex justify-center mt-4 mb-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                    retrieveBookingNameByEmail(); // Trigger retrieval when Enter is pressed
                                    }
                                }}
                                placeholder="Email"
                                className="p-2 text-black focus:outline-none"
                                style={{
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                                }}
                            />
                            <button
                                onClick={retrieveBookingNameByEmail}
                                className="bg-red-600 text-zinc-200 px-4 py-2 hover:text-black transition-colors"
                                style={{
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                }}
                            >
                                Godkend
                            </button>
                        </div>
                        {retrievedBookingName && (
                        <p className="mb-4">
                            Dit booking navn: <strong className='text-green-600'>{retrievedBookingName}</strong>
                        </p>
                        )}
                        {errorName && <p className="text-red-500">{errorName}</p>}
                    </div>
                )}
            </div>
            ) : (
            <Ratings />
            )}

        </section>
    );
};

export default RatingPage;
