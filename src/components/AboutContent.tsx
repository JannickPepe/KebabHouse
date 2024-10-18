"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { aboutFour, aboutOne, aboutThree, aboutTwo } from "../utils/index";
import Image from "next/image";
import { GlobalButton } from "@/components/GlobalButton";
import GlobalReadMore from "@/components/GlobalReadMore";
import Link from "next/link";


const AboutContent = () => {

    return (
        <>
            <section className="relative pt-24 bg-zinc-200 dark:bg-slate-900">
                <Features />
            </section>
        </>
    );
};

export default AboutContent;


const Features = () => {
    return (
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            <Copy />
            <Carousel />
        </div>
    );
};

const Copy = () => {

    const longText = "Kendt i Høje Taastrup for sin lækre og autentiske kebab. Beliggenhed på Høje Taastrup Boulevard 24 Kebab House tibyder et bredt udvalg af retter, herunder pizzaer, burgere, og selvfølgelig deres signatur kebab. Restauranten er et yndet valg blandt lokale for både frokost og aftensmad, og de tilbyder også takeaway og levering. Deres menu inkluderer alt fra klassiske kebabretter til mere Cafe Sandwhich, med friske ingredienser altid. Med en hyggelig atmosfære og venligt personale, er Kebab House et sted, hvor man kan slappe af og nyde et godt måltid.";

    return (
        <>
            <div className="flex h-fit w-full flex-col justify-center md:sticky md:top-0 md:h-[100vh]">
                <p className="uppercase text-xs text-black dark:text-zinc-400 font-bold ml-1 border-2 border-green-600 rounded-xl mx-auto px-4 py-1 mt-4 mb-1 md:mb-0 md:mt-0">
                    Om os
                </p>
                <h2 className="mb-4 mt-1 text-xl md:text-4xl lg:text-5xl text-black dark:text-zinc-300 font-bold leading-tight uppercase">
                    Cafe og Kebab House
                </h2>
                <div className="text-base text-zinc-400 font-medium">
                    <GlobalReadMore text={longText} maxLength={300} className="text-green-600" />
                </div>

                <a href="/booking" className="text-base text-slate-700 dark:text-zinc-400 underline mt-4 hover:text-black dark:hover:text-white hover:scale-105 transition font-bold">
                    Har du besøgt Cafe & Kebab House før?
                </a>

                <div className="flex mt-8">
                    <Link href={'/menu'}>
                        <GlobalButton className="text-black dark:text-white">
                            Menukort
                        </GlobalButton>
                    </Link>
                </div>
            </div>
        </>
    );
};

const Carousel = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    return (
        <div className="relative w-full">
            <Gradient />

            <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
                <CarouselItem
                scrollYProgress={scrollYProgress}
                position={1}
                numItems={4}
                />
                <CarouselItemTwo
                scrollYProgress={scrollYProgress}
                position={2}
                numItems={4}
                />
                <CarouselItemThree
                scrollYProgress={scrollYProgress}
                position={3}
                numItems={4}
                />
                <CarouselItemFour
                scrollYProgress={scrollYProgress}
                position={4}
                numItems={4}
                />
            </div>

            <Buffer />
        </div>
    );
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselItem = ({ scrollYProgress, position, numItems} : {scrollYProgress: any; position: number; numItems: number}) => {

    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
        {aboutOne.map((index) => (
            <Image key={null} src={index.quoteone} alt="Cafe & Kebab House billed galleri" />
        ))}
        </motion.div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselItemTwo = ({ scrollYProgress, position, numItems} : {scrollYProgress: any; position: number; numItems: number}) => {

    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
            <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
        {aboutTwo.map((index) => (
            <Image key={null} src={index.quoteone} alt="Cafe & Kebab House billed galleri" />
        ))}
        </motion.div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselItemThree = ({ scrollYProgress, position, numItems} : {scrollYProgress: any; position: number; numItems: number}) => {

    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
        {aboutThree.map((index) => (
            <Image key={null} src={index.quoteone} alt="Cafe & Kebab House billed galleri" />
        ))}
        </motion.div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselItemFour = ({ scrollYProgress, position, numItems} : {scrollYProgress: any; position: number; numItems: number}) => {

    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <motion.div
            style={{
                opacity,
                scale,
            }}
            className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
        >
        {aboutFour.map((index) => (
            <Image key={null} src={index.quoteone} alt="Cafe & Kebab House billed galleri" />
        ))}
        </motion.div>
    );
};


const Gradient = () => (
    <div className="sticky top-0 z-10 hidden h-24 w-full  md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

