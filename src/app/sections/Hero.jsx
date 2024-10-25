/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GlobalButton } from "../../components/GlobalButton";
import { HeroTabs } from "../../components/Tabs";
import Link from "next/link";

const HeroLanding = () => {

    return (
        <section className="w-full px-8 pb-12 pt-28 md:pt-40 lg:pb-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 1.0,
                    ease: 'easeIn',
                }}
            >
                <span className="block mb-2 text-xs uppercase md:ml-1 text-zinc-500 dark:text-green-500 font-bold">
                    Kvalitet mad hver dag
                </span>

                <h3 className="text-4xl w-full md:text-6xl lg:text-7xl font-black max-w-2xl text-black dark:text-white">
                    <span className="text-green-600">Cafe</span> & Kebab House <br/> <span className="text-green-600">Mad</span> med et <span className="text-green-600">smil</span>
                </h3>

                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-500 my-4 md:my-6 max-w-[450px]">
                    Velkommen til Cafe & Kebab House, hvor vi har høj kvalitet af mad samt en varieret menukort <br/>
                </p>

                <HeroTabs />

                <div className="flex justify-center md:justify-start mt-6 md:mt-0 text-zinc-800 dark:text-white">
                    <Link href={'/menu'}>
                        <GlobalButton>
                            Menukort
                        </GlobalButton>
                    </Link>
                </div>

            </motion.div>

            <div className="hidden md:block">
                <ShuffleGrid />
            </div>
        </section>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/671bf1250005b7568b71/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin",
    },
    {
        id: 2,
        src: "https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/671bf59a001a47bc40a7/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin",
    },
    {
        id: 3,
        src: "https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/671bf5800013749c8ddf/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin",
    },
    {
        id: 4,
        src: "https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/671bf5ca0029494a118b/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        >
        </motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="grid grid-cols-2 grid-rows-2 h-[450px] gap-2"
        >
            {squares.map((sq) => sq)}
        </motion.div>
    );
};

export default HeroLanding;