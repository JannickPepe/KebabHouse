import Image from "next/image";
import menuLeft from "@/assets/images/Menu-left.png";
import menuRight from "@/assets/images/Menu-right.png";

export default function Menu() {

    return (
      <section className="pt-40 max-w-7xl mx-auto">
        <div className="flex justify-center items-center ">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mb-4">
              Cafe & Kebab House <span className="text-green-600">Menukort</span>
            </h1>
            <p>Hos <span className="text-green-500">Cafe & Kebab House</span> har vi altid for <span className="text-green-500">friske vare</span> og høj hygiejne</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 mt-4 md:mt-6 gap-6 max-w-6xl mx-auto">
          <div className="border-2 border-red-700 p-2 rounded-md md:hover:scale-110 transition duration-300">
            <Image src={menuLeft} alt="kebab house menukort" className="rounded-sm " />
          </div>
          <div className="border-2 border-red-700 p-2 rounded-md md:hover:scale-110 transition duration-300">
            <Image src={menuRight} alt="kebab house menukort" className="rounded-sm" />
          </div>
        </div>
      </section>
    );

  }