"use client";

import Image from "next/image";
import burgerIcon from "@/assets/icons/burger.png";
import pitaIcon from "@/assets/icons/pita.png";
import pizzaIcon from "@/assets/icons/pizza.png";
import steakIcon from "@/assets/icons/steak.png";
import durumIcon from "@/assets/icons/shawarma.png";
import PagiBurger from '@/components/PagiBurger';
import PagiPizza from '@/components/PagiPizza';
import SearchBar from '@/components/Searchbar';
import PagiPitabread from "@/components/PagiPitabread";
import PagiDurum from "@/components/PagiDurum";
import PagiWholeMenus from "@/components/PagiWholeMenus";



const AllFood: React.FC = () => {
    const handleScrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-28 mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900 space-y-4 md:space-y-10">
            {/* Icon Navbar */}
            <nav className="flex justify-center items-center gap-6 -mt-4 mb-6 md:mb-0">
                <button onClick={() => handleScrollToSection('pizza')} className="size-5 md:size-7">
                    <Image src={pizzaIcon} alt="pizza icon" className="hover:rotate-12 transition" />
                    <div className="border-b-2 border-b-green-700 pb-1"></div>
                </button>
                <button onClick={() => handleScrollToSection('burger')} className="size-5 md:size-7">
                    <Image src={burgerIcon} alt="burger icon" className="hover:rotate-12 transition" />
                    <div className="border-b-2 border-b-green-700 pb-1"></div>
                </button>
                <button onClick={() => handleScrollToSection('durums')} className="size-5 md:size-7">
                    <Image src={durumIcon} alt="durum icon" className="hover:rotate-12 transition" />
                    <div className="border-b-2 border-b-green-700 pb-1"></div>
                </button>
                <button onClick={() => handleScrollToSection('pitabread')} className="size-5 md:size-7">
                    <Image src={pitaIcon} alt="pitabrød icon" className="hover:rotate-12 transition" />
                    <div className="border-b-2 border-b-green-700 pb-1"></div>
                </button>
                <button onClick={() => handleScrollToSection('menus')} className="size-5 md:size-7">
                    <Image src={steakIcon} alt="menu icon" className="hover:rotate-12 transition" />
                    <div className="border-b-2 border-b-green-700 pb-1"></div>
                </button>
            </nav>

            <SearchBar />
    
            {/* PIZZA */}
            <section id="pizza" className='py-6'>
                <PagiPizza />
            </section>

            {/* BURGER */}
            <section id="burger" className='py-6'>
                <PagiBurger />
            </section>

            {/* PITABREAD */}
            <section id="pitabread" className='py-6'>
                <PagiPitabread />
            </section>

            {/* DURUM */}
            <section id="durums" className='py-6'>
                <PagiDurum />
            </section>

            {/* MENUS */}
            <section id="menus" className="py-6">
                <PagiWholeMenus />
            </section>

        </main>
    )
}

export default AllFood
