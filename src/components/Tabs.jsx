"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {

    return (
        <div className="mb-6">
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
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                ...pv,
                opacity: 0,
                }));
            }}
            className="relative flex w-fit rounded-full p-1 -ml-5"
        >
            <Tab setPosition={setPosition}>Pitabrød</Tab>
            <Tab setPosition={setPosition}>Durum</Tab>
            <Tab setPosition={setPosition}>Pizza</Tab>
            <Tab setPosition={setPosition}>Sandwhich</Tab>
            <Tab setPosition={setPosition}>Menuer</Tab>

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {

    const ref = useRef(null);

    return (
        <li
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
            className="relative z-10 block cursor-pointer px-3 text-xs uppercase text-white mix-blend-difference md:px-5 md:text-sm hover:text-green-400"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {

    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute -top-2 z-0 h-7 rounded-full bg-black md:h-12"
        />
    );
};