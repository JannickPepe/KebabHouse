"use client";

import FAQ from "@/components/FAQ";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { databases } from '../../lib/appwrite';

const Contact = () => {

  return (
    <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-28 max-w-[660px] mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <Form />
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
        </div>
      </div>

      <FAQ />
    </section>
  );
};

const Form = () => {

  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const [message, setMessage] = useState(''); // Show a confirmation message when email send
  const [isFormValid, setIsFormValid] = useState(false); // disable submit button as default
  
  const handleInputChange = () => {
      // Check if all fields are filled
      if (name && mail && question) {
          setIsFormValid(true);
      } else {
          setIsFormValid(false);
      }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
        await databases.createDocument(process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_EMAILS_ID, 'unique()', { name, mail, question });
        setMessage('Beskeden er nu sendt!');
        setTimeout(() => setMessage(''), 2000);
    } catch (error) {
        console.error('Error submitting email:', error);
    };

    // Clear the input fields after successful submission
    setName('');
    setEmail('');
    setQuestion('');
    setIsFormValid(false);
};


  return (
    <form
      onSubmit={handleSubmit}
      className={`p-8 w-full text-white transition-colors duration-[750ms] bg-green-700 `}
    >
      <h3 className="text-4xl font-bold mb-6 uppercase">
        kontakt os
      </h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Velkomen 👋</p>
        <input
          type="text"
          placeholder="Mit navn..."
          value={name}
          onChange={(e) => { 
            setName(e.target.value);
            handleInputChange(); 
            }} 
          className={`transition-colors duration-[750ms] placeholder-white/70 p-2 bg-green-600 rounded-md w-full focus:outline-0`}
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
          <p className="text-2xl mb-2">Din Email</p>
          <input
            type="text"
            placeholder="john@live.dk"
            value={mail}
            onChange={(e) => { 
              setEmail(e.target.value);
              handleInputChange(); 
            }} 
            className={`transition-colors duration-[750ms] placeholder-white/70 p-2 bg-green-600 rounded-md w-full focus:outline-0`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Spørgsmål eller kommentar</p>
        <textarea
          placeholder="Din mening betyder meget, vh. Cafe & Kebab House :)"
          value={question} 
          onChange={(e) => { 
            setQuestion(e.target.value);
            handleInputChange(); 
          }} 
          className={`transition-colors duration-[750ms] min-h-[150px] bg-green-600 resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
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
        className={` transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
        disabled={!isFormValid}
        style={{
          backgroundColor: isFormValid ? 'white' : 'gray',
          color: isFormValid? '#16a34a' : 'white',
          opacity: isFormValid? '100%' : '30%',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
        }}
      >
        Send
      </motion.button>
      {message && <p className='text-center mt-2 text-green-600 text-xl'>{message}</p>}
    </form>
  );
};

export default Contact;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };