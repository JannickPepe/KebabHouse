/* eslint-disable @next/next/no-img-element */
import InputForm from "@/components/UserQuestion";
import FrokostTilbud  from "./sections/FrokostTilbud";
import HeroLanding from "./sections/Hero";
import { Stemning } from "./sections/Stemning";
import { TopFive } from "./sections/TopFive";


export default function Home() {

  return (
    <div className="container mx-auto">

      {/* LANDING */}
      <section>
        <HeroLanding />
      </section>

      {/* TOP 5 PIZZA */}
      <section>
        <TopFive />
      </section>

      {/* FROKOST TILBUD */}
      <section>
        <FrokostTilbud />
      </section>

      {/* KEBAB HOUSE STEMNING */}
      <section>
        <Stemning />
      </section>

      {/* KONTAKT */}
      <section>
      <h1>Submit Your Data</h1>
      <InputForm/>
      </section>

    </div>
  );
}