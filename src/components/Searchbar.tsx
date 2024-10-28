"use client"

import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
import { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";



const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [results, setResults] = useState<any[]>([]);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the form from reloading the page
        if (!searchQuery) return;

        try {
            // Define database and collection IDs
            const databaseId = process.env.NEXT_APPWRITE_DATABASE_ID;
            const pizzaCollectionId = process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID;
            const burgerCollectionId = process.env.NEXT_APPWRITE_COLLECTION_BURGER_ID;
            const pitabreadCollectionId = process.env.NEXT_APPWRITE_COLLECTION_PITABREAD_ID;
            const durumCollectionId = process.env.NEXT_APPWRITE_COLLECTION_DURUM_ID;
            const wholemenuCollectionId = process.env.NEXT_APPWRITE_COLLECTION_WHOLEMENU_ID;

            // Perform FullText search for both collections
            const pizzaResults = await databases.listDocuments(databaseId, pizzaCollectionId, [
                Query.search('title', searchQuery), 
            ]);
            const burgerResults = await databases.listDocuments(databaseId, burgerCollectionId, [
                Query.search('title', searchQuery), 
            ]);
            const pitabreadResults = await databases.listDocuments(databaseId, pitabreadCollectionId, [
                Query.search('title', searchQuery), 
            ]);
            const durumResults = await databases.listDocuments(databaseId, durumCollectionId, [
                Query.search('title', searchQuery), 
            ]);
            const wholemenuResults = await databases.listDocuments(databaseId, wholemenuCollectionId, [
                Query.search('title', searchQuery), 
            ]);

            // Combine results from collections
            setResults([...pizzaResults.documents, ...burgerResults.documents, ...pitabreadResults.documents, ...durumResults.documents, ...wholemenuResults.documents]);

        } catch (error) {
        console.error('Error fetching search results:', error);
        }
    };

     // Clear results when clicking outside the form
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setResults([]); // Clear the search results
                setSearchQuery(''); // Clear input text
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    return (
        <section>
            <div className='flex items-center justify-center max-w-xs mx-auto'>
                <form onSubmit={handleSearch} ref={formRef} className="flex items-center justify-center">
                    <button
                        onClick={handleSearch}
                        className="px-4 py-2 bg-emerald-500 text-zinc-800 hover:bg-green-600 group"
                        style={{borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                    >
                        <IoSearchOutline className='size-6 group-hover:text-zinc-200' />
                    </button>
                    <input
                        type="text"
                        placeholder="Skriv en titel..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-1/2 md:w-3/4 px-2 py-2 text-zinc-800 focus:shadow-md focus:shadow-green-500 focus:outline-none"
                        style={{borderTopRightRadius: 10, borderBottomRightRadius: 10}}
                    />
                </form>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-4 mb-8 md:mb-14">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="py-4 border-b border-green-600">
                            <div className="bg-zinc-800 px-2 py-1 rounded-full mb-2 max-w-[60px] text-center">
                                <span className="text-sm font-light">{item.foodnumber}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-black dark:text-zinc-200">{item.title}</h3>
                            <p className='text-zinc-500 dark:text-zinc-400 my-2'>{item.description}</p>
                            <div className='flex items-center gap-3 mt-4'>
                                <p className='text-black dark:text-zinc-300'>
                                    {item.price}kr
                                </p>
                                <p className='ring-1 ring-red-500 rounded-lg px-2 py-1 text-black dark:text-zinc-300'>
                                    Tilbud: {item.pricediscount}kr
                                </p>
                            </div>
                        </div>
                    ))
                    ) : (
                        ''
                )}
            </div>
        </section>
    );
};

export default SearchBar;