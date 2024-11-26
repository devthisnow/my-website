"use client"

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

export function TopMenu(props) {
    return (
        <header className="hidden sm:block ">
            <nav className="flex justify-between font-normal text-[18px] w-5/6 items-center self-start pt-[50px]">
                <button className="hover:text-[#14C6B7] focus:outline-none">
                    <Link href="#projects">Projects & Work</Link>
                </button>
                <button className="hover:text-[#14C6B7] focus:outline-none">
                    <Link href="#hard-skills">Hard Skills</Link>
                </button>
                <button className="hover:text-[#14C6B7] focus:outline-none">
                    <Link href="#soft-skills">Soft Skills</Link>
                </button>
                <button className="hover:text-[#14C6B7] focus:outline-none capitalize">
                    <Link href="#contact-me">Contact me</Link>
                </button>
            </nav>
        </header>
    );
};

export function MobileMenu(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuHandleClick = () => {
        setMenuOpen(!menuOpen);
        // console.log(menuOpen);
    }
    return (
        <header className="sticky z-50 top-0 sm:hidden w-full sm:h-0 sm:opacity-0 opacity-100 transition-all duration-500">
            <nav className={`text-white pl-[30px] border-b-[2px] h-auto ${menuOpen ? "bg-myblack border-mywhite" : "bg-myblack border-mywhite"}`}>
                <div className="flex z-50 justify-between m-auto items-center h-[52px]">
                    <button className={`z-20 text-[22px] hover:bg-gray-300 focus:outline-none font-semibold ${menuOpen ? "text-mywhite" : "text-mywhite"}`}><Link href="/">IK</Link></button>
                    <button className="px-4 z-50 py-2 rounded-md active:bg-none focus:outline-none pr-[30px] " onClick={menuHandleClick}>
                        {/* <Link href=""> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={12}
                            fill=''
                            className={`${menuOpen ? "stroke-white" : "stroke-white"}`}
                        >
                            <path stroke="" strokeWidth={2} d="M0 1h16M0 6h16M0 11h16" />
                        </svg>
                        {/* </Link> */}
                    </button>
                </div>
            </nav>
            {menuOpen &&
                <>
                    <div id="opened-menu" className='absolute top-[52px] z-10 pb-[70px] border-t-[2px] border-white overflow-y-scroll flex flex-col justify-center items-center gap-y-[9dvh] w-full h-[110dvh] bg-black'>
                        <div className=''>
                            <Link className='text-white text-[28px] font-semibold' href="#projects" onClick={menuHandleClick}>Projects & Work</Link>
                        </div>
                        <Link className='text-white text-[28px] font-semibold' href="#hard-skills" onClick={menuHandleClick}>
                            Hard Skills</Link>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="#soft-skills" onClick={menuHandleClick}>Soft Skills</Link>
                        </div>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="#contact-me" onClick={menuHandleClick}>Contact me</Link>
                        </div>
                        <svg className='mt-[7dvh]' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" onClick={menuHandleClick}><path stroke="#fff" strokeWidth="2" d="m11.023 11.023 7.954 7.954M11.023 18.977l7.954-7.954" /><circle cx="15" cy="15" r="14" stroke="#fff" strokeWidth="2" /></svg>
                    </div>
                </>
            }
        </header>
    );
};

export function Footer(props) {
    return (
        <footer className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-[minmax(1fr,_30px)_minmax(1fr,_20px)] sm:gap-x-2 w-full border-t-[2px] sm:border-t-[3px] px-[30px] sm:px-[80px] pt-[50px] pb-[30px] sm:pb-[50px] border-black ">
            <p className="sm:col-start-1 pb-[30px] sm:p-0 text-[22px] text-left sm:text-[28px] font-semibold leading-tight "><Link href="/">Ilia Kalugin</Link></p>
            <div className="w-full sm:self-start sm:col-start-2 sm:row-start-1 sm:row-span-2 " >
                <ul className="flex flex-row flex-shrink justify-start gap-x-[20px] sm:justify-end sm:gap-x-[1.04dvw] ">
                    <li>
                        <div className="items-center text-gray-700 ">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px] "
                                src="/icons/Email.svg"
                                alt="Email icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px]"
                                src="/icons/Linkedin.svg"
                                alt="LinkedIn icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px]"
                                src="/icons/X_Twitter_icon.svg"
                                alt="X icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px]"
                                src="/icons/Facebook.svg"
                                alt="Facebook icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px]"
                                src="/icons/Telegram.svg"
                                alt="Telegram icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] sm:min-h-[50px] sm:min-w-[50px]"
                                src="/icons/instagram.svg"
                                alt="LinkedIn icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                </ul>
            </div >
            <p className="pt-[30px] sm:self-end leading-tight sm:pt-0 sm:p-0 sm:col-start-1 text-[12px] text-left"><span className="inline-block">© 2024. All rights reserved.</span> <span className="block sm:inline-block">Designed and coded on the house.</span></p>
        </footer >
    );
};