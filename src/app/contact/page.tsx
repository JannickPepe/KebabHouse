"use client";

import FAQ from "@/components/FAQ";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [selected, setSelected] = useState("individual");
  return (
    <>
      
      <section className="px-4 pt-32 pb-16 md:pt-40 md:pb-16 lg:pt-40 lg:pb-28 max-w-[660px] mx-auto lg:max-w-full lg:mx-0 bg-zinc-200 dark:bg-slate-900">
        <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
          <Form selected={selected} setSelected={setSelected} />
          <Images selected={selected} />
        </div>

        <FAQ />
      </section>
    </>
  
  );
};

const Form = ({ selected, setSelected } : {selected: string; setSelected: unknown;}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "booking" ? "bg-red-700/80" : "bg-green-700"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6 uppercase">
        {selected === "booking" ? "Book hos os" : "kontakt os"}
      </h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Velkomen 👋</p>
        <input
          type="text"
          placeholder="Mit navn..."
          className={`${
            selected === "booking" ? "bg-slate-700" : "bg-green-600"
          } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* booking/individual toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Vælg mellem</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* booking name */}
      <AnimatePresence>
        {selected === "booking" && (
          <motion.div
            initial={{
              // 104 === height of element + margin
              // Alternatively can use mode='popLayout' on AnimatePresence
              // and add the "layout" prop to relevant elements to reduce
              // distortion
              marginTop: -104,
              opacity: 0,
            }}
            animate={{
              marginTop: 0,
              opacity: 1,
            }}
            exit={{
              marginTop: -104,
              opacity: 0,
            }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">I hvems navn...</p>
            <input
              type="text"
              placeholder="Dit booking navn..."
              className={`${
                selected === "booking" ? "bg-slate-700" : "bg-green-700"
              } transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Værsgo og spørg løs...</p>
        <textarea
          placeholder="Har du ydre bemærkninger :)"
          className={`${
            selected === "booking" ? "bg-slate-700" : "bg-green-600"
          } transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.99,
        }}
        type="submit"
        className={`${
          selected === "booking"
            ? "bg-white text-red-600"
            : "bg-white text-green-600"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Send
      </motion.button>
    </form>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormSelect = ({ selected, setSelected } : {selected: string; setSelected: any}) => {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        className={`${
          selected === "individual" ? "text-green-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("individual")}
      >
        <span className="relative z-10">Spørgsmål</span>
        {selected === "individual" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        className={`${
          selected === "booking" ? "text-red-600" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("booking")}
      >
        <span className="relative z-10">Booking her</span>
        {selected === "booking" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
};

const Images = ({ selected } : { selected: string; }) => {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
      <motion.div
        initial={false}
        animate={{
          x: selected === "individual" ? "0%" : "100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/670e6d07000ebd0cbd34/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin)",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{
          x: selected === "booking" ? "0%" : "-100%",
        }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://cloud.appwrite.io/v1/storage/buckets/67042a27001c1cb0f479/files/670e6cff000c2e445171/view?project=670427e60002e065ca53&project=670427e60002e065ca53&mode=admin)",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export default Contact;

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };