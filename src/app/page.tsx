import ShowUseMenu from "@/app/sections/ShowUseMenu";
import FrokostTilbud  from "./sections/FrokostTilbud";
import HeroLanding from "./sections/Hero";
import Ratings from "./sections/Ratings";
import { Stemning } from "./sections/Stemning";
import { TopFive } from "./sections/TopFive";
import Contact from "./sections/UserQuestion";
import { Analytics } from "@vercel/analytics/react";
import SideNavbar from "@/components/SideNavbar";


export default function Home() {

  return (
    <>
      <Analytics />
      <main className="container mx-auto bg-zinc-200 dark:bg-slate-900">

        <SideNavbar />

        {/* LANDING */}
        <section id="landing">
          <HeroLanding />
        </section>

        {/* MENU */}
        <section id="menu">
          <ShowUseMenu />
        </section>

        {/* TOP 5 PIZZA */}
        <section id="pizza">
          <TopFive />
        </section>

        {/* FROKOST TILBUD */}
        <section id="discount">
          <FrokostTilbud />
        </section>

        {/* KEBAB HOUSE STEMNING */}
        <section id="stemning">
          <Stemning />
        </section>

        {/* RATING  */}
        <section id="rating">
          <Ratings />
        </section>

        {/* KONTAKT */}
        <section id="contact">
          <Contact />
        </section>

      </main>
    </>
  
  );
}