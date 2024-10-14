"use client";

import { useState } from 'react';
import FoodList from '../utils/useMenu';

const ShowUseMenu = () => {
    const [selectedFood, setSelectedFood] = useState<string>('pizza'); // Default to pizza collection

    const handleSelection = (foodType: string) => {
        setSelectedFood(foodType);
    };

    return (
        <section className="py-10 md:py-24 lg:28">
            <div className=" text-center mb-4 md:mb-8">
                <p className="text-slate-600 dark:text-zinc-400 text-sm font-bold">Hvad vi tilbyder</p>
                <h2 className="text-black dark:text-white text-lg md:text-4xl lg:text-5xl">Vores spændende <span className='underline text-green-600 font-bold'>friske</span> muligheder</h2>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                <button
                    className={`px-4 py-2 text-white rounded-full uppercase ${
                    selectedFood === 'pizza' ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                    onClick={() => handleSelection('pizza')}
                >
                    Pizza
                </button>
                <button
                    className={`px-4 py-2 text-white rounded-full uppercase ${
                    selectedFood === 'burger' ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                    onClick={() => handleSelection('burger')}
                >
                    Burger
                </button>
                <button
                    className={`px-4 py-2 text-white rounded-full uppercase ${
                    selectedFood === 'pitabread' ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                    onClick={() => handleSelection('pitabread')}
                >
                    Pitabrød
                </button>
            </div>
    
            {/* Display food items based on the selected category */}
            {selectedFood === 'pizza' && <FoodList collectionId={process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID} />}
            {selectedFood === 'burger' && <FoodList collectionId={process.env.NEXT_APPWRITE_COLLECTION_BURGER_ID} />}
            {selectedFood === 'pitabread' && <FoodList collectionId={process.env.NEXT_APPWRITE_COLLECTION_PITABREAD_ID} />}
        </section>
    );
};

export default ShowUseMenu
