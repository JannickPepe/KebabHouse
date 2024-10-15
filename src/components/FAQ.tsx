import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const FAQ = () => {
    return (
        <div className="px-4 pt-28">
        <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 text-center text-xl md:text-3xl lg:text-4xl font-bold text-black dark:text-zinc-300 underline">
                Generelle Spørgsmål
            </h3>
            <Question title="Cafe & Kebab House lokation?">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                perspiciatis ad vero.
            </p>
            </Question>
            <Question title="Hvad dækker frokost tilbud?">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                perspiciatis ad vero.
            </p>
            </Question>
            <Question title="Åbningstider i hverdage og weekender?">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                perspiciatis ad vero.
            </p>
            </Question>
            <Question title="Hvordan booker jeg borde?">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                laboriosam neque reprehenderit saepe eius dolorum vel consequuntur
                perspiciatis ad vero.
            </p>
            </Question>
        </div>
        </div>
    );
};

const Question = ({ title, children, defaultOpen = false } : { title: string; children: React.ReactNode; defaultOpen?: boolean; }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className="border-b-[1px] border-b-slate-300"
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-6 text-red-700"
            >
                <motion.span className="text-black dark:text-zinc-400 text-left text-lg font-medium">
                    {title}
                </motion.span>
                <motion.span
                    variants={{
                        open: {
                        rotate: "180deg",
                        color: "#16a34a",
                        },
                        closed: {
                        rotate: "0deg",
                        color: "#030617",
                        },
                    }}
                >
                    <FiChevronDown className="text-2xl text-red-600 dark:text-green-600" />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                height: open ? height : "0px",
                marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-black dark:text-zinc-400"
            >
                <div ref={ref}>{children}</div>
            </motion.div>
        </motion.div>
    );
};

export default FAQ;