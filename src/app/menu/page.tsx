import Image from "next/image";
import menuLeft from "@/assets/images/Menu-left.png";
import menuRight from "@/assets/images/Menu-right.png";
import PdfViewerComponent from "@/components/PDF";

export default function Menu() {

    return (
      <>
        <section className="pt-28 md:pt-40 mx-auto bg-zinc-200 dark:bg-slate-900">
          <div className="flex justify-center items-center ">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold my-4 text-zinc-800 dark:text-zinc-300">
                Cafe & Kebab House <span className="text-green-600">Menukort</span>
              </h1>
              <p className="px-8 md:px-0 text-zinc-800 dark:text-zinc-300 font-medium tracking-wide">Hos <span className="text-green-600">Cafe & Kebab House</span> har vi altid for <span className="text-green-600">friske vare</span> og høj hygiejne</p>
              <h3 className="text-lg md:text-2xl text-black dark:text-zinc-300 font-bold mt-6">
                Se <span className="text-green-600">PDF</span> i stedet?
              </h3>

              <PdfViewerComponent />
            </div>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 py-6 my-4 md:my-8 gap-4 md:gap-8 max-w-6xl mx-auto px-6 md:px-0">
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