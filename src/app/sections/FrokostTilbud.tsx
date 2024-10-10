"use client"

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import tilbudOne from '../../assets/icons/shawarma.png';
import tilbudTwo from '../../assets/icons/pita.png';
import tilbudThree from '../../assets/icons/pizza.png';
import tilbudfour from '../../assets/icons/kebabbox.png';
import Image, { StaticImageData } from "next/image";
import { BiFoodMenu } from "react-icons/bi";


const FrokostTilbud = () => {
    const [position, setPosition] = useState(0);

    const shiftLeft = () => {
        if (position > 0) {
        setPosition((pv) => pv - 1);
        }
    };

    const shiftRight = () => {
        if (position < features.length - 1) {
        setPosition((pv) => pv + 1);
        }
    };

    return (
        <section className="overflow-hidden px-4 py-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 flex justify-between gap-4">
                    <div className="text-lg md:text-4xl font-bold leading-[1.2] max-w-[740px] space-y-2">
                        <h3><span className="underline">Frokosttilbud Gælder</span> alle ugens dage fra kl. 11.00 - 15.00. </h3>
                        <h3>&quot;<span className="underline">Gælder ikke</span> ved udbringning&quot;</h3>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className="h-fit bg-black p-4 text-sm md:text-2xl text-white transition-colors hover:bg-green-700 rounded-full"
                            onClick={shiftLeft}
                        >
                            <FiChevronLeft />
                        </button>
                        <button
                            className="h-fit bg-black p-4 text-sm md:text-2xl text-white transition-colors hover:bg-green-700 rounded-full"
                            onClick={shiftRight}
                        >
                            <FiChevronRight />
                        </button>
                    </div>
                </div>
                <div className="flex gap-4">
                {features.map((feat, index) => (
                    <Feature {...feat} key={index} position={position} index={index} />
                ))}
                </div>
            </div>
        </section>
    );
};

const Feature = ({ position, index, title, description, image } : { position: number; index: number; title: string; description: string; image: StaticImageData }) => {
    const translateAmt = position >= index ? index * 100 : index * 100 - 100 * (index - position);

    return (
        <motion.div
            animate={{ x: `${-translateAmt}%` }}
            transition={{
                ease: "easeInOut",
                duration: 0.35,
            }}
            className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 rounded-lg ${
                index % 2 ? "bg-black text-white" : "bg-green-600/60"
            }`}
        >
            <Image src={image} alt="" className="absolute right-2 top-2 text-7xl" />
            <h3 className="mb-8 text-3xl font-bold">{title}</h3>
            <p className="text-lg font-bold">
                Med Friske og nye råvarer og grønt 
            </p>
            <p className="flex items-center gap-1 text-sm font-medium">
                <BiFoodMenu className="size-4" />
                <span >{description}</span>
            </p>
        </motion.div>
    );
};

export default FrokostTilbud;

const features = [
    {
        title: "Pizzas",
        image: tilbudThree,
        description:
        "ALLE PIZZA MED INKL SALAT PIZZA .........................55,-",
    },
    {
        title: "Durums",
        image: tilbudOne,
        description:
        "DURUM KEBAB INKL KYLLING ELLER MIX ..........................45,-",
    },
    {
        title: "Pitabrød",
        image: tilbudTwo,
        description:
        "ALM PITABRØD INKL KYLLING ELLER MIX ...............................30,-",
    },
    {
        title: "Kebab Box",
        image: tilbudfour,
        description:
        "KEBAB BOKS (fås også med kylling eller falafel) ............... 35,- 48,-",
    },
];