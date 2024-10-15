"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroTabs = () => {

    return (
        <div className="mb-6 md:mb-8">
            <SlideTabs />
        </div>
    );
};

const SlideTabs = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <div>
            <ul
                onMouseLeave={() => {
                    setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                    }));
                }}
                className="relative flex w-fit rounded-full p-0.5 md:p-1 -ml-5"
            >
                <Link href="#pizza">
                    <Tab setPosition={setPosition}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true, amount: 0.5}}
                            transition={{
                                duration: 1,
                                ease: 'easeIn',
                            }}
                        >
                            Pizza
                        </motion.div>
                    </Tab>
                </Link>
                <Link href="#menu">
                    <Tab setPosition={setPosition}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 1.2,
                                ease: 'easeIn',
                            }}
                        >
                            Durum
                        </motion.div>
                    </Tab>
                </Link>
                <Link href="#menu">
                    <Tab setPosition={setPosition}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 1.4,
                                ease: 'easeIn',
                            }}
                        >
                            Pitabrød
                        </motion.div>
                    </Tab>
                </Link>
                <Link href="#menu">
                    <Tab setPosition={setPosition}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 1.6,
                                ease: 'easeIn',
                            }}
                        >
                            Burger
                        </motion.div>
                    </Tab>
                </Link>
                <Link href="#discount">
                    <Tab setPosition={setPosition}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                                duration: 1.8,
                                ease: 'easeIn',
                            }}
                        >
                            Tilbud
                        </motion.div>
                    </Tab>
                </Link>

                <Cursor position={position} />
            </ul>
        </div>
    );
};

const Tab = ({ children, setPosition, }) => {

    const ref = useRef(null);

    return (
        <motion.li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                left: ref.current.offsetLeft,
                width,
                opacity: 1,
                });
            }}
            className="relative z-10 block cursor-pointer px-2 md:px-5 text-xs md:text-sm uppercase text-slate-800 font-bold dark:text-white mix-blend-difference hover:text-green-400 dark:hover:text-green-400"
        >
            {children}
        </motion.li>
    );
};

const Cursor = ({ position }) => {

    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute -top-[3px] md:-top-2 z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};