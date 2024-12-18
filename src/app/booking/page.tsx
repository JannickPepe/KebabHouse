"use client";

import { databases } from "@/lib/appwrite";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaStar } from "react-icons/fa6";


const Booking = () => {
  

  return (
    <>
      <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-24 max-w-[660px] mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900">
        <div className="relative w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
          <Form  />
          <div className="relative overflow-hidden w-full min-h-[100px]">
            <motion.div
              initial={false}
              transition={BASE_TRANSITION}
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url(https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/670e6cff000c2e445171/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin)",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        <h2 className="text-xl md:text-3xl lg:text-4xl text-center mt-12 text-zinc-800 dark:text-zinc-300">
          Giv en <span className="text-green-600">rating</span> efter jeres <span className="text-green-600">booking</span>
        </h2>
        <Link href={'/rating'} className="flex justify-center items-center mt-4 text-lg font-semibold gap-2">
          <FaStar className="text-orange-400" /><FaStar className="text-orange-400" /><FaStar className="text-orange-400" /> 
          <span className="px-2 text-zinc-800 dark:text-zinc-300 border-2 border-green-600 rounded-lg hover:border-none transition-transform">Gå til Rating</span> 
          <FaStar className="text-orange-400" /><FaStar className="text-orange-400" /><FaStar className="text-orange-400" />
        </Link>
      </section>
    </>
  );
};

const Form = () => {

  const [bookingName, setBookingName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [guestNumber, setGuestNumber] = useState<number | ''>('');
  const [hoursNumber, setHoursNumber] = useState<number | ''>('');
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
                  bookingName,
                  email,
                  phone,
                  bookingDate,
                  guestNumber,
                  hoursNumber,
                  question,
              }
          );

        if (response) {
            setConfirmationMessage('Din Booking er nu modtaget, vh. Cafe & Kebab House');
            // Clear form fields
            setBookingName('');
            setEmail('');
            setPhone('');
            setBookingDate('');
            setGuestNumber('');
            setHoursNumber('');
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
        <p className="text-2xl mb-2">Navn til booking 👋</p>
          <input
            type="text"
            placeholder="Dit booking navn..."
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            required
            className={`transition-colors duration-[750ms] text-black p-2 rounded-md w-full focus:outline-0`}
          />
      </div>

      {/* booking name, email and booking date */}
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
          <p className="text-2xl my-4">Din Email til booking</p>
          <input
            type="text"
            placeholder="Din Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`transition-colors duration-[750ms] text-black p-2 rounded-md w-full focus:outline-0`}
          />

          <p className="text-2xl my-4">Dit privat nummer</p>
          <input
            type="text"
            placeholder="Dit nummer..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className={`transition-colors duration-[750ms] text-black p-2 rounded-md w-full focus:outline-0`}
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

      <div className="flex gap-10 mb-4">
        {/* Number of Guests Field */}
        <div className="">
          <label className="block text-lg font-semibold">Antal gæster</label>
          <input
            type="number"
            placeholder="Max 20"
            value={guestNumber}
            onChange={(e) => setGuestNumber(Number(e.target.value))}
            required
            min={1}
            max={20} // Adjust maximum as needed
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md"
          />
        </div>

        {/* Number of Hours Field */}
        <div className="">
          <label className="block text-lg font-semibold">Antal timer</label>
          <input
            type="number"
            placeholder="Max 5"
            value={hoursNumber}
            onChange={(e) => setHoursNumber(Number(e.target.value))}
            required
            min={1}
            max={5} // Adjust maximum as needed
            className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Bemærkninger</p>
        <textarea
          placeholder="Har du ydre bemærkninger? vh Cafe & Kebab House"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className={`transition-colors duration-[750ms] min-h-[150px] text-black resize-none p-2 rounded-md w-full focus:outline-0`}
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

export default Booking;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };