"use client"

import { useEffect, useState } from 'react';
import { databases } from '../../lib/appwrite'; // Make sure this path is correct
import Image from 'next/image';
import { MenuItem } from '@/models/menumodel';
import burgerIcon from "@/assets/icons/burger.png";
import pitaIcon from "@/assets/icons/pita.png";
import pizzaIcon from "@/assets/icons/pizza.png";
import Tooltip from '@/components/ToolTip';


export default function ShowMenu() {

    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [activeCollection, setActiveCollection] = useState<'pizza' | 'burger' | 'pitabread'>('pizza');

    // Fetch collection data based on the activeCollection
    const fetchCollection = async (collectionId: string) => {
        try {
            const response = await databases.listDocuments( process.env.NEXT_APPWRITE_DATABASE_ID, collectionId);
            setMenuItems(response.documents as unknown as MenuItem[]);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch the initial pizza collection
    useEffect(() => {
        fetchCollection(process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID);
    }, []);

    // Handle button click to fetch the corresponding collection
    const handleButtonClick = (collection: 'pizza' | 'burger' | 'pitabread') => {
        setActiveCollection(collection);
        const collectionIds: Record<string, string> = {
            pizza: process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID,
            burger: process.env.NEXT_APPWRITE_COLLECTION_BURGER_ID,
            pitabread: process.env.NEXT_APPWRITE_COLLECTION_PITABREAD_ID,
        };

        fetchCollection(collectionIds[collection]);
    };

    return (
        <section className="py-10 md:py-24 lg:28">
            <div className=" text-center">
                <p className="block text-slate-600 dark:text-zinc-400 text-xs font-bold uppercase">Menu oversigt</p>
                <h2 className="text-black dark:text-white text-lg md:text-4xl lg:text-5xl">
                    Vores spændende <span className='text-green-600 font-bold underline'>friske</span> udvalg 
                </h2>
            </div>

            {/* Button Group */}
            <div className="my-6 md:my-8 flex justify-center gap-4">
                <Tooltip text="Pizza">
                    <button
                        className={`px-4 py-2 rounded-lg uppercase ${activeCollection === 'pizza' ? 'bg-green-700 text-white' : 'bg-zinc-500'}`}
                        onClick={() => handleButtonClick('pizza')}
                    >
                        <Image src={pizzaIcon} alt='' className='size-5 md:size-8 hover:rotate-12 transition duration-300' />
                    </button>
                </Tooltip>

                <Tooltip text="Burger">
                    <button
                        className={`px-4 py-2 rounded-lg uppercase ${activeCollection === 'burger' ? 'bg-green-700 text-white' : 'bg-zinc-500'}`}
                        onClick={() => handleButtonClick('burger')}
                    >
                        <Image src={burgerIcon} alt='' className='size-5 md:size-8 hover:rotate-12 transition duration-300' />
                    </button>
                </Tooltip>

                <Tooltip text="Pitabrød">
                    <button
                        className={`px-4 py-2 rounded-lg uppercase ${activeCollection === 'pitabread' ? 'bg-green-700 text-white' : 'bg-zinc-500'}`}
                        onClick={() => handleButtonClick('pitabread')}
                    >
                        <Image src={pitaIcon} alt='' className='size-5 md:size-8 hover:rotate-12 transition duration-300' />
                    </button>
                </Tooltip>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-10 md:px-0">
                {menuItems.length > 0 ? (
                    menuItems.map((item, index) => (
                        <div key={index} className="border border-green-500 rounded-lg p-4 shadow-md text-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={200}
                                className="object-cover w-3/4 md:w-full h-40 mb-4 rounded-md mx-auto md:mx-0"
                            />
                            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{item.title}</h3>
                            <p className="text-zinc-500 mb-2">{item.description}</p>
                            <p className="text-zinc-600 dark:text-zinc-400 font-bold mb-2">{item.price.toFixed(2)}kr</p>

                            {item.pricediscount > 0 && (
                                <p className="text-red-600 font-bold">Tilbud: {item.pricediscount.toFixed(2)}kr</p>
                            )}
                        </div>
                    ))
                    ) : (
                    <p>Ingen produkter tilgængelige.</p>
                )}
            </div>
        </section>
    );
}