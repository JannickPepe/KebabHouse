'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { storage } from '../../lib/appwriteStorage';
import { GlobalButton } from "../../components/GlobalButton";
import Image from "next/image";
import burgerIcon from "../../assets/icons/burger.png";
import pitaIcon from "../../assets/icons/pita.png";
import Link from "next/link";


export const Stemning = () => {

    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [dinerTableTwoUrl, setDinerTableTwoUrl] = useState<string | null>(null);

    useEffect(() => {
        const getImageUrl = async () => {
            try {
                // Replace 'your-bucket-id' and 'your-file-id' with the actual values
                const dinertableOneId = '671bf413003c02091030';
                const url = storage.getFilePreview(process.env.NEXT_APPWRITE_STORAGE_ID, dinertableOneId).toString();
                setImageUrl(url);
        
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
    
        getImageUrl();
    }, []);

    useEffect(() => {
        const getDinerTableTwoUrl = async () => {
            try {
                // Replace 'your-bucket-id' and 'your-file-id' with the actual values
                const dinertableTwoId = '671bf3de001c28d07ea8';
                // You can use getFilePreview or getFileView depending on your needs
                const url = storage.getFilePreview(process.env.NEXT_APPWRITE_STORAGE_ID, dinertableTwoId).toString();
                setDinerTableTwoUrl(url);
    
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
    
        getDinerTableTwoUrl();
    }, []);


    return (
        <section className="lg:flex lg:justify-center gap-8 lg:gap-12 py-10 md:py-24">
            <div className="flex justify-center items-center">
                {imageUrl ? (
                    <motion.img className="h-96 w-72 rounded-lg transition-all duration-300 hover:scale-110 hidden lg:block" src={imageUrl} alt="Cafe & Kebab House hygge billed" />
                ) : (
                    <p>Loading image...</p>
                )}
            </div>

            <div className="max-w-md relative md:mx-auto lg:mx-0 md:pt-6 md:pb-12 lg:pt-0 lg:pb-0">
                <div className="absolute top-1/2 left-1/2 translate-y-14 translate-x-32 hidden md:block">
                    <Image src={pitaIcon} alt="Cafe & Kebab House hygge billed" className="size-8" />
                </div>

                <div className="text-center mt-4 md:mt-8 max-w-[340px] mx-auto md:max-w-full">
                    <p className="block dark:text-zinc-400 text-red-500 text-xs uppercase font-bold">
                        Har du husket appetiten?
                    </p>
                    <h2 className="text-2xl md:text-4xl text-black dark:text-zinc-300">
                        Hos <span className="text-green-600">Cafe</span> & Kebab House har vi altid den bedste <span className="text-green-600">stemning!</span>
                    </h2>
                    <p className="mt-3 md:mt-6 text-black dark:text-zinc-400 text-lg font-semibold max-w-96 mx-auto">
                        Se vores varieret menu, hvor gode friske råvare altid er i prioritet
                    </p>
                </div>
                
                <div className="flex justify-center mt-6 md:mt-14 text-black dark:text-zinc-400">
                    <Link href={'/menu'}>
                        <GlobalButton>
                            Menukort
                        </GlobalButton>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-y-3 -translate-x-36 hidden md:block">
                    <Image src={burgerIcon} alt="Cafe & Kebab House hygge billed" className="size-8" />
                </div>
            </div>

            <div className="flex justify-center items-center">
                {dinerTableTwoUrl ? (
                    <motion.img className="h-96 w-72 rounded-lg transition-all duration-300 hover:scale-110 mx-auto md:mx-0 mt-8 md:mt-0" src={dinerTableTwoUrl} alt="Cafe & Kebab House hygge billed" />
                ) : (
                    <p>Loading image...</p>
                )}
            </div>
        </section>
    )
}


