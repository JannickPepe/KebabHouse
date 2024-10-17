import Head from "next/head";
import Image from "next/image";
import menuLeft from "@/assets/images/Menu-left.png";
import menuRight from "@/assets/images/Menu-right.png";

export default function Menu() {

    return (
      <>
        <Head>
          <title>Cafe & Kebab House Menukort side</title>
          <meta name="description" content="Cafe & Kebab House ved menukort. Se vores bredde udvalg af forskellige retter" />
          <link rel="canonical" href="https://kebab-house.vercel.app/menu" />
          <meta name="robots" content="index, follow" />
        </Head>
      
        <section className="pt-28 md:pt-40  mx-auto bg-zinc-200 dark:bg-slate-900">
          <div className="flex justify-center items-center ">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-4 text-zinc-800 dark:text-zinc-300">
                Cafe & Kebab House <span className="text-green-600">Menukort</span>
              </h1>
              <p className="px-8 md:px-0 text-zinc-800 dark:text-zinc-300 font-medium tracking-wide">Hos <span className="text-green-500">Cafe & Kebab House</span> har vi altid for <span className="text-green-500">friske vare</span> og høj hygiejne</p>
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 py-6 mt-4 md:mt-6 gap-4 md:gap-8 max-w-6xl mx-auto px-6 md:px-0">
            <div className="border-2 border-red-700 py-2 px-2 rounded-md md:hover:scale-110 transition duration-300">
              <Image src={menuLeft} alt="kebab house menukort" className="rounded-sm " />
            </div>
            <div className="border-2 border-red-700 py-2 px-2 rounded-md md:hover:scale-110 transition duration-300">
              <Image src={menuRight} alt="kebab house menukort" className="rounded-sm" />
            </div>
          </div>
        </section>
      </>
    
    );

  }