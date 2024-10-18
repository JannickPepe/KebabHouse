import React from "react";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "Om Os"
}

const About = () => {

    return (
        <>
            <Analytics />

            <main className="">
                <AboutContent />
            </main>
        </>
    );
};

export default About;

