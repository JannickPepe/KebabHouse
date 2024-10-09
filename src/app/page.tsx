/* eslint-disable @next/next/no-img-element */
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

      {/* KATEGORIER */}
      <section>

      </section>

      {/* KEBAB HOUSE STEMNING */}
      <section>
        <Stemning />
      </section>

      {/* KONTAKT */}
      <section>

      </section>

    </div>
  );
}