"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { GlobalButton } from "./GlobalButton";
import { CiPizza } from "react-icons/ci";
import Image from "next/image";
import testLogo from "../assets/images/testlogo.jpeg";


const Navbar = () => {

    return (
        <section className="w-full overflow-hidden bg-black">
            <GlassNavigation />
        </section>
    );
};

const GlassNavigation = () => {
    const [hovered, setHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [scope, animate] = useAnimate();
    const navRef = useRef(null);

    const handleMouseMove = ({ offsetX, offsetY, target }) => {
        // @ts-ignore
        const isNavElement = [...target.classList].includes("glass-nav");

        if (isNavElement) {
        setHovered(true);

        const top = offsetY + "px";
        const left = offsetX + "px";

        animate(scope.current, { top, left }, { duration: 0 });
        } else {
        setHovered(false);
        }
    };

    useEffect(() => {
        navRef.current?.addEventListener("mousemove", handleMouseMove);

        return () =>
        // eslint-disable-next-line react-hooks/exhaustive-deps
        navRef.current?.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <nav
            ref={navRef}
            onMouseLeave={() => setHovered(false)}
            style={{
                cursor: hovered ? "none" : "auto",
            }}
            className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl"
        >
            <div className="glass-nav md:flex items-center justify-between px-5 py-5">
                <Cursor hovered={hovered} scope={scope} />
                <a href="/"><Image src={testLogo} alt="kebab house logo" className="size-16 rounded-full hidden md:block" /></a>
                <Links />
                <Buttons setMenuOpen={setMenuOpen} />
            </div>

            <MobileMenu menuOpen={menuOpen} />
        </nav>
    );
};

const Cursor = ({ hovered, scope }) => {
    return (
        <motion.span
            initial={false}
            animate={{
                opacity: hovered ? 1 : 0,
                transform: `scale(${
                hovered ? 1 : 0
                }) translateX(-50%) translateY(-50%)`,
            }}
            transition={{ duration: 0.15 }}
            ref={scope}
            className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full"
        >
            <CiPizza size={30} /> 
        </motion.span>
    );
};


const Links = () => (
    <div className="hidden items-center gap-2 md:flex md:text-lg lg:text-xl">
        <a href="about"><GlassLink text="Om Us" /></a>
        <a href="booking"><GlassLink text="Booking" /></a>
        <a href="contact"><GlassLink text="kontakt" /></a>
    </div>
);

const GlassLink = ({ text }) => {
    return (
        <div className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                {text}
            </span>
            <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
    );
};


const Buttons = ({ setMenuOpen }) => (
    <div className="flex items-center gap-4">
        <GlobalButton className="ml-1.5">Menukort</GlobalButton>

        <button
            onClick={() => setMenuOpen((pv) => !pv)}
            className="ml-40 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
        >
            <FiMenu />
        </button>
    </div>
);


const MobileMenu = ({ menuOpen }) => {

    const [ref, { height }] = useMeasure();

    return (
        <motion.div
            initial={false}
            animate={{
                height: menuOpen ? height : "0px",
            }}
            className="block overflow-hidden md:hidden"
        >
            <div ref={ref} className="flex items-center justify-between px-4 pb-4">
                <div className="flex flex-wrap items-center ml-2">
                    <a href="/"><Image src={testLogo} alt="kebab house logo" className="size-10 rounded-full" /></a>
                    <a href="about"><GlassLink text="Om Os" /></a>
                    <a href="booking"><GlassLink text="Booking" /></a>
                    <a href="contact"><GlassLink text="kontakt" /></a>
                </div>
            </div>
        </motion.div>
    );
};

export default Navbar;