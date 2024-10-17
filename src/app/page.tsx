import ShowUseMenu from "@/app/sections/ShowUseMenu";
import FrokostTilbud  from "./sections/FrokostTilbud";
import HeroLanding from "./sections/Hero";
import Ratings from "./sections/Ratings";
import { Stemning } from "./sections/Stemning";
import { TopFive } from "./sections/TopFive";
import Contact from "./sections/UserQuestion";
import Head from "next/head";


export default function Home() {

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "url": "https://kebab-house.vercel.app",
              "name": "Cafe & Kebab House",
              "description": "Cafe & Kebab House tilbyder god og frisk mad med glade kunder",
              "publisher": {
                "@type": "Organization",
                "name": "Cafe & Kebab House"
              }
            }
          `}
        </script>
        <title>Cafe & Kebab House</title>
        <meta name="description" content="Cafe & Kebab House ved Høje Taastrup station. Friske retter og god service" />
        <link rel="canonical" href="https://kebab-house.vercel.app" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="container mx-auto bg-zinc-200 dark:bg-slate-900">

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