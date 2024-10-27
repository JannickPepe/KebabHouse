"use client"

import { databases } from '@/lib/appwrite';
import { Query } from 'appwrite';
import { useState } from 'react';


const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = async () => {
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
                Query.search('title', searchQuery), // Replace 'name' with your FullText indexed field
            ]);
            const burgerResults = await databases.listDocuments(databaseId, burgerCollectionId, [
                Query.search('title', searchQuery), // Replace 'name' with your FullText indexed field
            ]);
            const pitabreadResults = await databases.listDocuments(databaseId, pitabreadCollectionId, [
                Query.search('title', searchQuery), // Replace 'name' with your FullText indexed field
            ]);
            const durumResults = await databases.listDocuments(databaseId, durumCollectionId, [
                Query.search('title', searchQuery), // Replace 'name' with your FullText indexed field
            ]);
            const wholemenuResults = await databases.listDocuments(databaseId, wholemenuCollectionId, [
                Query.search('title', searchQuery), // Replace 'name' with your FullText indexed field
            ]);

            // Combine results from both collections
            setResults([...pizzaResults.documents, ...burgerResults.documents, ...pitabreadResults.documents, ...durumResults.documents, ...wholemenuResults.documents]);

        } catch (error) {
        console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="">
            <div className='flex items-center justify-center gap-2'>
                <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-green-600"
                >
                    Søg
                </button>
                <input
                    type="text"
                    placeholder="Skriv en titel..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-1/2 md:w-3/4 px-2 py-2 border text-red-500 border-gray-300 rounded-md"
                />
            </div>

            <div className="ml-4">
                {results.length > 0 ? (
                    results.map((item, index) => (
                        <div key={index} className="py-4 border-b border-gray-200">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p>{item.description}</p>
                            <div className='flex'>
                                <p>
                                    {item.price}kr
                                </p>
                                <p>
                                    {item.pricediscount}kr
                                </p>
                            </div>
                        </div>
                    ))
                    ) : (
                        ''
                )}
            </div>
        </div>
    );
};

export default SearchBar;