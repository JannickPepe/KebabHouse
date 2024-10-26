"use client"

import { useState, useEffect } from 'react';
import { databases } from '../lib/appwrite';
import { Query } from 'appwrite';
import { MenuItem } from '@/models/menumodel';

const PagiPizza = () => {
    const [pizzas, setPizzas] = useState<MenuItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const pizzasPerPage = 8;

    useEffect(() => {
        const fetchPizzas = async () => {
            const response = await databases.listDocuments( process.env.NEXT_APPWRITE_DATABASE_ID,
                process.env.NEXT_APPWRITE_COLLECTION_PIZZA_ID, [
                Query.orderDesc('$createdAt'),
                Query.limit (pizzasPerPage),
                Query.offset ((currentPage - 1) * pizzasPerPage),
            ]);
            setPizzas(response.documents as unknown as MenuItem[]);
            setTotalPages(Math.ceil(response.total / pizzasPerPage));
        };

        fetchPizzas();
    }, [currentPage]);

    const nextPage = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    const prevPage = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

    return (
        <main className='px-4 md:px-0 py-4 md:py-0'>

            <section className='max-w-6xl mx-auto'>
            <h2 className='text-center text-xl md:text-4xl mb-4 font-semibold uppercase tracking-wider'>Pizzas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
                    {pizzas.map((pizza) => (
                        <div key={pizza.title} className="border-2 p-4 rounded-md border-green-600">
                            <h2 className="font-bold text-xl">{pizza.title}</h2>
                            <p className='py-1'>{pizza.description}</p>

                            <div className='flex justify-start items-center mt-2 gap-3'>
                                <p className="text-zinc-600 dark:text-zinc-400 font-bold mb-2 mt-2">
                                    {pizza.price.toFixed(2)}kr
                                </p>
                                {pizza.pricediscount > 0 && (
                                    <p className="text-zinc-200 font-semi-bold outline outline-offset-1 outline-red-600 rounded-full px-2 py-0.5">
                                        Tilbud: {pizza.pricediscount.toFixed(2)}kr
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        

            <div className="flex justify-center mt-4">
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1} 
                    className="mx-2 px-4 py-2 bg-emerald-500 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${index + 1 === currentPage ? 'bg-green-700 text-white' : 'bg-green-500 text-white hover:bg-green-600'}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button 
                    onClick={nextPage} 
                    disabled={currentPage === totalPages} 
                    className="mx-2 px-4 py-2 bg-emerald-500 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
            
        </main>
    );
};

export default PagiPizza;