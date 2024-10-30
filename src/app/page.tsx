import ShowUseMenu from "@/app/sections/ShowUseMenu";
import FrokostTilbud  from "./sections/FrokostTilbud";
import HeroLanding from "./sections/Hero";
import { Stemning } from "./sections/Stemning";
import Contact from "./sections/UserQuestion";
import { Analytics } from "@vercel/analytics/react";
import SideNavbar from "@/components/SideNavbar";
import { Values } from "./sections/Values";


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

        {/* VÆRDIER */}
        <section id="pizza">
          <Values />
        </section>

        {/* FROKOST TILBUD */}
        <section id="discount">
          <FrokostTilbud />
        </section>

        {/* KEBAB HOUSE STEMNING */}
        <section id="stemning">
          <Stemning />
        </section>

        {/* KONTAKT */}
        <section id="contact">
          <Contact />
        </section>

      </main>
    </>
  
  );
}