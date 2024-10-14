'use client';

import { useState, useEffect } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { getEvents } from "../../utils/events";
import { PizzaModel } from "../../models/pizzamodel";


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
                <p className="text-slate-600 dark:text-zinc-400 text-sm font-bold">Smag det bedste af det bedste</p>
                <h2 className="text-black dark:text-white text-lg md:text-4xl lg:text-5xl">Vores <span className="text-green-600">Top 5</span> af vores bedste <span className="text-green-600">pizza&apos;er</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 mt-4 md:mt-10 max-w-7xl mx-auto">
                {pizzas.map((pizza) => {
                    return (
                        <div className="flex flex-col justify-center items-center" key={pizza.title} >
                            <div className="text-lg flex items-center gap-1 text-black dark:text-zinc-400">
                                <IoFastFoodOutline className="text-red-600 dark:text-green-600"/>
                                {pizza.title}
                            </div>

                            <motion.img className="h-44 w-44 rounded-md my-2 shadow-sm shadow-red-600 hover:scale-105 transition" src={pizza.image} alt="hello"/>
                            
                            <div className="max-w-[220px] text-center my-1 md:my-2 text-black dark:text-white">
                                {pizza.description}
                            </div>

                            <div className="mt-3 flex gap-6 items-center">
                                <span className="text-sm border-2 text-black dark:text-white border-green-600 py-2 px-3 rounded-full">
                                    {pizza.price}kr / {pizza.pricediscount}kr <span className="text-xs text-red-700 dark:text-zinc-400">(Frokost Tilbud)</span>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

