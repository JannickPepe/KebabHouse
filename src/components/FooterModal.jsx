"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbArrowBack } from "react-icons/tb";


const FooterModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                onClick={() => setIsOpen(true)}
                className="flex mx-auto gap-2 items-center text-lg text-center mt-6 mb-8 md:mb-4 md:mt-10 px-3 text-black dark:text-zinc-300 py-2.5 tracking-wider bg-gradient-to-l from-green-600/60 to-green-600/80 rounded-lg hover:dark:text-zinc-800 transition group"
            >
                Google Maps <FaArrowRightLong className="size-5 mt-1 text-black dark:text-zinc-300 group-hover:text-zinc-800 group-hover:ml-1 transition-all"/>
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

const SpringModal = ({ isOpen, setIsOpen } ) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="bg-slate-900/20 backdrop-blur mt-40 p-8 fixed inset-0 z-50 grid place-items-center overflow-y-hidden cursor-pointer"
                >
                <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-lg w-full max-w-4xl shadow-xl cursor-default flex justify-center relative overflow-hidden"
                >
                
                    <div className="relative z-10">
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.2669472939447!2d12.266524476400523!3d55.64956579993865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525909be623031%3A0x6fab30073fec1a10!2sCafe%20-%20Kebabhouse%20v%2FMusa%20Yildirim!5e0!3m2!1sda!2sdk!4v1729099253117!5m2!1sda!2sdk" width="800" height="450" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="flex gap-2">
                        <button
                        onClick={() => setIsOpen(false)}
                        className="text-base text-white hover:text-black font-semibold w-full pt-2 flex justify-center items-center gap-1 group"
                        >
                            Tilbage <TbArrowBack className="size-6" />
                        </button>
                    
                    </div>
                    </div>
                </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FooterModal;