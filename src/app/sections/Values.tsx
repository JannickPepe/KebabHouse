"use client"

import Image from 'next/image';
import { motion } from "framer-motion";
import { valuesLanding } from '@/utils';
import Link from 'next/link';
import { useState } from 'react';

export const Values = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Track the index of the hovered card

    return (
        <section className='py-10 md:py-20 mb-10 max-w-6xl mx-auto'>
            <div className="container">

                <div className=" text-center">
                    <p className="block text-slate-600 dark:text-zinc-400 text-xs uppercase font-bold">Vi bestræber os efter det bedste</p>
                    <h2 className="text-black dark:text-white text-lg md:text-4xl lg:text-5xl">
                        Vores <span className="text-green-600">værdisæt</span> som vi vægter højt
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {valuesLanding.map((value, valuesIndex) => {
                        return (
                            <motion.div 
                                key={valuesIndex}
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
                                    delay: valuesIndex * 0.5,
                                    ease: 'easeInOut',
                                    duration: 1,
                                }}
                                className='text-center md:text-start max-w-xs md:max-w-full mx-auto md:mx-0'
                                onMouseEnter={() => setHoveredIndex(valuesIndex)} // Set the hovered index
                                onMouseLeave={() => setHoveredIndex(null)} // Reset the hovered index
                            >
                                
                                <Image
                                    src={hoveredIndex === valuesIndex ? value.gif : value.icon} // Change based on hovered index
                                    alt="Takeaway"
                                    className="size-12 bg-zinc-300 dark:bg-white p-1 rounded-full mx-auto md:mx-0"
                                    width={100}
                                    height={100}
                                />
                                <h3 className="text-xl md:text-3xl my-2 text-green-600 dark:text-green-500">{value.title}</h3>
                                <p className="font-light text-zinc-800 dark:text-zinc-300">{value.text}</p>
                                <div className="border-b-2 border-b-zinc-800 dark:border-b-green-600 mt-1 w-[95%] rounded-md"></div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className='relative md:flex text-black justify-center items-center gap-6 mt-6 text-center'>
                    <div className='absolute bg-green-600 p-1 rounded-full translate-y-0 -translate-x-44 hidden md:block'></div>
                    <p className='font-bold text-zinc-700 dark:text-zinc-400'>
                        <Link href="tel:+1234567890" className='hover:text-white transition-colors'>(+45)43527271</Link>
                    </p>
                    <div className='absolute bg-green-600 p-1 rounded-full translate-y-0 -translate-x-9 hidden md:block'></div>
                    <p className='font-bold text-zinc-700 dark:text-zinc-400'>
                        <Link href="mailto:info@cafekebabhouse.dk" className="hover:text-white transition-colors">info@cafekebabhouse.dk</Link>
                    </p>
                    <div className='absolute bg-green-600 p-1 rounded-full translate-y-0 translate-x-44 hidden md:block'></div>
                </div>
            </div>
        </section>
    )
}


