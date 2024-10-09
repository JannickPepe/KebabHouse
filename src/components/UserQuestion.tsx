"use client"

import { useState } from 'react';
import { databases } from '../lib/appwrite';

const InputForm = () => {
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
        const response = await databases.createDocument(
            process.env.NEXT_APPWRITE_DATABASE_ID,
            process.env.NEXT_APPWRITE_COLLECTION_EMAILS_ID,
            'unique()', // Unique ID for the document
            { name, mail, question }
        );
        console.log('Document created:', response);
        } catch (error) {
        console.error('Error creating document:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input
                type="email"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Question:</label>
                <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputForm;