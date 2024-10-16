"use client"

import { useState } from 'react';
import { databases } from '../../lib/appwrite';


const Contact = () => {
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
        <section className='py-10 lg:py-20'>
            <div className="font-[sans-serif] max-w-4xl mx-auto relative  rounded-lg py-6">
                <div className="grid lg:grid-cols-1 items-center">
                    <div className="lg:col-span-2 md:max-w-lg lg:max-w-full md:mx-auto lg:mx-0 md:border border-green-700 opacity-90 rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
                        <h3 className="text-gradient text-3xl text-center font-bold uppercase text-black dark:text-zinc-400">
                            Kontakt os
                        </h3>
                        <p className='text-center text-zinc-500 py-4 max-w-[400px] mx-auto'>
                            Vi vil hurtigst muligt besvare din henvendelse <br/> De bedste hilsner <span className='underline'>Cafe & Kebab House</span>
                        </p>
                        <form  onSubmit={handleSubmit}>
                            <div className="max-w-md mx-auto space-y-3">
                            <input 
                                type='text' 
                                placeholder='Navn' 
                                className="w-full bg-black rounded-lg py-3 px-6 text-sm outline-none" 
                                value={name}
                                onChange={(e) => { 
                                    setName(e.target.value);
                                    handleInputChange(); 
                                }} 
                            />
                            <input 
                                type='email' 
                                placeholder='Email' 
                                className="w-full bg-black rounded-lg py-3 px-6 text-sm outline-none" 
                                value={mail}
                                onChange={(e) => { 
                                    setEmail(e.target.value);
                                    handleInputChange(); 
                                }} 
                            />
                            <textarea 
                                value={question} 
                                onChange={(e) => { 
                                    setQuestion(e.target.value);
                                    handleInputChange(); 
                                }} 
                                placeholder='Besked...' rows={6} 
                                className="w-full bg-black rounded-lg px-6 text-sm pt-3 outline-none"
                            >
                            </textarea>
                            <button 
                                type='submit'
                                className="w-full relative font-semibold rounded-lg text-sm px-6 py-3 !mt-6"
                                disabled={!isFormValid}
                                style={{
                                    backgroundColor: isFormValid ? 'white' : 'gray',
                                    color: isFormValid? '#16a34a' : 'white',
                                    opacity: isFormValid? '100%' : '30%',
                                    cursor: isFormValid ? 'pointer' : 'not-allowed',
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                    <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                                </svg>
                                Send Besked
                            </button>
                            {message && <p className='text-center mt-2 text-green-600'>{message}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;