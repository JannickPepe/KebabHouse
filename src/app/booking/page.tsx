"use client";

import { databases } from "@/lib/appwrite";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const Booking = () => {
  

  return (
    <>
      <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-40 max-w-[660px] mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900">
        <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
          <Form  />
          <Images />
        </div>
      </section>
    </>
  );
};

const Form = () => {

  const [fullName, setFullName] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [question, setQuestion] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
          const response = await databases.createDocument(
              process.env.NEXT_APPWRITE_DATABASE_ID,
              process.env.NEXT_APPWRITE_COLLECTION_BOOKING_ID, 
              'unique()',         
              {
                  fullName,
                  bookingName,
                  bookingDate,
                  question,
              }
          );

        if (response) {
            setConfirmationMessage('Din Booking er nu modtaget, vh. Cafe & Kebab House');
            // Clear form fields
            setFullName('');
            setBookingName('');
            setBookingDate('');
            setQuestion('');

            // Clear any existing timeout
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            // Set a timeout to clear the confirmation message after 10 seconds
            timeoutRef.current = setTimeout(() => {
              setConfirmationMessage('');
            }, 3000);
        }

      } catch (error) {
          console.error('Failed to submit booking:', error);
          setConfirmationMessage('There was an error submitting your booking.');

          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => {
            setConfirmationMessage('');
          }, 3000);
      }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] bg-red-700/80`}
    >
      <h3 className="text-4xl font-bold mb-6 uppercase">
        Book hos os
      </h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Velkomen 👋</p>
        <input
          type="text"
          placeholder="Mit navn..."
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className={`transition-colors duration-[750ms] text-black placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* booking name */}
      <AnimatePresence>
          <motion.div
            initial={{
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">I hvems navn...</p>
            <input
              type="text"
              placeholder="Dit booking navn..."
              value={bookingName}
              onChange={(e) => setBookingName(e.target.value)}
              required
              className={`transition-colors duration-[750ms] text-black placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />

            <div className="my-4">
              <label className="text-2xl">Booking Dato</label>
              <input
                type="datetime-local"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border text-red-500 border-gray-300 rounded-md"
              />
            </div>
          </motion.div>
  
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Værsgo og spørg løs...</p>
        <textarea
          placeholder="Skriv venligst antal gæster :)"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={`transition-colors duration-[750ms] min-h-[150px] text-black resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={` transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold bg-white text-red-600`}
      >
        Send
      </motion.button>

      {confirmationMessage && (
        <p className="mt-4 text-center text-black font-semibold">
          {confirmationMessage}
        </p>
      )}
    </form>
  );
};


const Images = () => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/670e6d07000ebd0cbd34/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin)",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/670e6cff000c2e445171/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin)",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default Booking;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };