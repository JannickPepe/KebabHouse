'use client';

import { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { getEvents } from "../../utils/PizzaFetch";
import { PizzaModel } from "../../models/pizzamodel";
import { twMerge } from "tailwind-merge";


export const TopFive = () => {

    const [ pizzas, setPizzas ] = useState<Array<PizzaModel>>([]);

    useEffect(() => {
        (async function run() {
            const { pizzas } = await getEvents();
            setPizzas(pizzas);
        })();
    }, []);
    
    return (
        <section className="py-10 md:py-24 lg:28">
            <div className=" text-center">
                <p className="block text-slate-600 dark:text-zinc-400 text-xs uppercase font-bold">Smag det bedste af det bedste</p>
                <h2 className="text-black dark:text-white text-lg md:text-4xl lg:text-5xl">Vores <span className="text-green-600">Top 5</span> af vores bedste <span className="text-green-600">pizza&apos;er</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 mt-4 md:mt-10 mx-auto md:px-28">
                {pizzas.map((pizza, topFiveIndex) => {
                    return (
                        <motion.div 
                            key={topFiveIndex}
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: topFiveIndex * 0.5,
                                ease: 'easeInOut',
                                duration: 1,
                            }}
                            className={twMerge("flex flex-col justify-center items-center")}  
                        >
                            <div className="flex flex-col justify-center items-center hover:scale-110 transition duration-300">
                                <div className="text-lg md:text-xl flex items-center gap-1 text-black dark:text-zinc-400 font-bold">
                                    <FaStar className="text-orange-400 dark:text-green-600"/>
                                    {pizza.title}
                                </div>
                                
                                <div className="max-w-[220px] text-center my-1 md:my-3 text-black dark:text-white font-light">
                                    {pizza.description}
                                </div>

                                <div className="mt-3 flex gap-6 items-center">
                                    <span className="text-sm border-2 text-black dark:text-white border-green-600 py-2 px-3 rounded-full">
                                        {pizza.price}kr / {pizza.pricediscount}kr <span className="text-xs text-red-700 dark:text-zinc-400">(Frokost Tilbud)</span>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

