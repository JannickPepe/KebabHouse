"use client"

import { useState } from 'react';
import { databases } from '../lib/appwrite';

const InputForm = () => {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await databases.createDocument(process.env.NEXT_APPWRITE_DATABASE_ID, process.env.NEXT_APPWRITE_COLLECTION_EMAILS_ID, 'unique()', { name, mail, question });
            setMessage('Mail submitted');
            setTimeout(() => setMessage(''), 2000);
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    return (
        <section className='md:flex justify-center gap-8 lg:gap-12 py-10 md:py-24'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name}
                        placeholder="Enter your name" 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={mail}
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Question:</label>
                    <input
                        type="text"
                        value={question}
                        placeholder="Enter your question"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>

                <button type="submit">Submit</button>
                {message && <p>{message}</p>}
            </form>
        </section>
    );
};

export default InputForm;