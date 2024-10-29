import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const StatsCounter = () => {
    return (
        <div className="max-w-2xl px-2 mt-10">
    
        <div className="flex flex-col items-center justify-start sm:flex-row">
            <Stat
            num={20}
            suffix="+"
            subheading="Mere end 20 års erfaring med at lave mad"
            />
            <Stat
            num={80}
            suffix="+"
            subheading="Over 80 forskellige udvalg på menuen"
            />
            <Stat
            num={100}
            suffix="%"
            subheading="Hundredevis af glade kunder gennem tiden"
            />
        </div>
        </div>
    );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
        duration: 2.5,
        onUpdate(value) {
            if (!ref.current) return;

            ref.current.textContent = value.toFixed(decimals);
        },
        });
    }, [num, decimals, isInView]);

    return (
        <div className="flex max-w-72 flex-col items-center py-2 sm:py-0">
            <p className="mb-2 text-center text-xl font-semibold lg:text-2xl text-black dark:text-zinc-300">
                <span ref={ref}></span>
                <span className="text-green-600">
                    {suffix}
                </span>
            </p>
            <p className="max-w-72 text-center text-neutral-700 dark:text-zinc-300 text-sm font-light">
                {subheading}
            </p>
        </div>
    );
};