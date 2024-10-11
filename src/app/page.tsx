import FrokostTilbud  from "./sections/FrokostTilbud";
import HeroLanding from "./sections/Hero";
import Ratings from "./sections/Ratings";
import { Stemning } from "./sections/Stemning";
import { TopFive } from "./sections/TopFive";
import Contact from "./sections/UserQuestion";


export default function Home() {

  return (
    <div className="container mx-auto bg-zinc-200 dark:bg-slate-900">

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

      {/* RATING  */}
      <section>
        <Ratings />
      </section>

      {/* KONTAKT */}
      <section>
        <Contact />
      </section>

    </div>
  );
}