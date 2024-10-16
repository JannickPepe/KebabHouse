/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import footerImg from "../assets/icons/kebab.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { BsTelephoneInbound } from "react-icons/bs";
import FooterModal from "./FooterModal";


const Footer = () => {
    return (
        <footer className="relative z-0 overflow-x-clip pt-2 md:pt-8 lg:pt-24 pb-6 text-center bg-zinc-200 dark:bg-zinc-900">
            <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 className="text-gradient text-lg md:text-2xl lg:text-3xl font-semibold uppercase text-zinc-400">
                            Kontakt os
                        </h3>
                        <p className="flex justify-center items-top mt-2 md:mt-4 text-base md:text-base lg:text-lg text-zinc-500 font-bold">
                            <RiMapPinLine className="size-6 mt-0.5 text-zinc-400" />
                            Høje Taastrup Boulvard 24, <br/>2630, Høje Taastrup, Denmark
                        </p>
                        <div className="max-w-[220px] mx-auto my-2 md:my-3 bg-slate-900 dark:bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] py-0.5 rounded-full"/>
                    
                        <p className="flex justify-center items-top gap-3 pb-2 text-base md:text-base lg:text-lg text-zinc-500 font-bold">
                            <BsTelephoneInbound className="size-6 mt-0.5 text-zinc-400" />
                            +45 43 52 72 71
                        </p>
                        <p className="flex justify-center items-top gap-3 text-zinc-500 text-base md:text-base lg:text-lg underline font-bold">
                            <IoMailOutline className="size-6 mt-0.5 text-zinc-400" />
                            info@cafekebabhouse.dk
                        </p>
                    </div>

                    <div className="text-lg md:text-2xl lg:text-3xl font-semibold text-zinc-400 mt-6 md:mt-0 lg:mt-0">
                        <div className="text-gradient flex justify-center items-center gap-4 uppercase">
                            Cafe & Kebab House  
                            <Image src={footerImg} className="h-8 w-8 lg:h-12 lg:w-12 hidden lg:block" alt="https://www.flaticon.com/free-icons/shawarma" title="shawarma icons" />
                        </div>
                        <div className="text-base md:text-base lg:text-lg text-zinc-500 mt-2 font-bold px-10 md:px-0">
                            <p>Din favorit leveret til døren på <span className="underline">30- 45 min</span></p>
                            <p><span className="underline">Mandage til fredage</span> Fra kl 16:00 - 22:00</p>
                            <p><span className="underline">Lørdage til søndage</span> Fra 11:00 - 22:00</p>
                        </div>

                        <FooterModal />
                    </div>
                    <div>
                        <h3 className="text-gradient text-lg md:text-2xl lg:text-3xl font-semibold uppercase text-zinc-400">
                            Links
                        </h3>
                        <div className="mt-4 justify-center flex text-sm md:text-base lg:text-lg text-zinc-400 md:text-zinc-500 font-normal md:font-bold uppercase">
                            <ul className="flex md:block md:space-y-4 tracking-wider">
                                <li className="flex justify-center items-center mr-10 group">
                                    <MdOutlineKeyboardArrowRight className="size-8 group-hover:text-green-500"/>
                                    <a href="/about" className="hover:underline">Om Os</a>
                                </li>
                                <li className="flex justify-center items-center mr-4 group">
                                    <MdOutlineKeyboardArrowRight className="size-8 group-hover:text-green-500"/>
                                    <a href="/booking" className="hover:underline">Booking</a>
                                </li>
                                <li className="flex justify-center items-center mr-4 group">
                                    <MdOutlineKeyboardArrowRight className="size-8 group-hover:text-green-500"/>
                                    <a href="/contact" className="hover:underline">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span className="block text-sm text-center text-zinc-500 font-bold mt-4 md:mt-10">
                    © 2024 KebabHouse. All Rights Reserved.
                </span>

                <ul className="flex justify-center mt-5 space-x-5">
                    <li>
                        <a href="#" className="text-zinc-900 hover:text-green-500">
                            <svg className="w-5 h-5 hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-zinc-900 hover:text-green-500">
                            <svg className="w-5 h-5 hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-zinc-900 hover:text-green-500 ">
                            <svg className="w-5 h-5 hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
                            </svg>
                        </a>
                    </li>
                </ul>
        </footer>
    )
}

export default Footer
