'use client'

import { useState, useEffect } from "react";
import { storage } from '../lib/appwriteStorage';
import TimedMessage from "@/components/GlobalAppearText";
import Link from "next/link";


const LandingMessage = () => {

    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        const getImageUrl = async () => {
            try {
                const dinertableOneId = '671bf413003c02091030';
                const url = storage.getFilePreview(process.env.NEXT_APPWRITE_STORAGE_ID, dinertableOneId).toString();
                setImageUrl(url);
        
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };
    
        getImageUrl();
    }, []);

    return (
        <div>
            <TimedMessage duration={30000} backgroundImageUrl={imageUrl}>
                <h3 className="text-xl md:text-2xl font-bold tracking-wide">Tak, for at besøge vores hjemmeside👋</h3>
                <p className="my-2 text-lg">
                    Her kan du lave {" "}
                    <Link href={'/booking'} className="text-green-600 font-semibold underline">booking</Link>, 
                    sende beskeder, se vores menu i {" "}
                    <Link href={'/menu'} className="text-green-600 font-semibold underline">PDF</Link> {" "}
                    eller <Link href={'/allfood'} className="text-green-600 font-semibold underline">søge</Link> efter bestemte retter.
                </p>
                <p className="font-semibold">
                    De bedste hilsener, <span className="border-b border-green-500">Cafe & Kebab House</span>
                </p>
            </TimedMessage>
        </div>
    )
}

export default LandingMessage
