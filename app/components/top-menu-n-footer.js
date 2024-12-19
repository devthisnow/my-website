"use client"

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

export function GlobalHeaderMenu(props) {
    return (
        <header className='sticky sm:absolute z-10 -top-[1px] left-0 lg:absolute lg:top-0 lg:left-0 w-full'>
            <TopMenu />
            <MobileMenu />
        </header>
    );
};

export function TopMenu(props) {
    return (
        <nav className="w-full hidden lg:block lg:w-5/12 text-mywhite pl-[80px]">
            <div className="sm:hidden lg:flex w-full justify-between gap-x-[12px] font-normal text-[18px] items-start pt-[50px]">
                <button className="text-left hover:text-[#14C6B7] focus:outline-none">
                    <Link href="/#projects">Projects & Work</Link>
                </button>
                <button className="text-left hover:text-[#14C6B7] focus:outline-none">
                    <Link href="/#hard-skills">Hard Skills</Link>
                </button>
                <button className="text-left hover:text-[#14C6B7] focus:outline-none">
                    <Link href="/#soft-skills">Soft Skills</Link>
                </button>
                <button className="text-left hover:text-[#14C6B7] focus:outline-none capitalize">
                    <Link href="/#contact-me">Contact me</Link>
                </button>
            </div>
            {/* <button id="IK" className={`hidden sm:block lg:hidden mt-[34px] text-[22px] focus:outline-none font-semibold text-mywhite`}><Link href="/">IK</Link></button> */}
        </nav>
    );
};

export function MobileMenu(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuHandleClick = () => {
        setMenuOpen(!menuOpen);
        // console.log(menuOpen);
    }
    return (
        <div className={`w-full min-w-[210px] pb-0 z-[2] lg:hidden sm:py-[35px] overflow-hidden
            ${menuOpen ? " bg-myblack " : "bg-myblack sm:bg-transparent"}`}>
            <nav className={`text-white px-[30px] sm:pl-[50px] border-b-[2px] sm:border-none h-auto 
                ${menuOpen ? " bg-myblack" : "  sm:bg-transparent "}`}>
                <div className="flex justify-between m-auto items-center h-[52px] sm:h-fit overflow-hidden">
                    <button className={`text-[22px] focus:outline-none font-semibold ${menuOpen ? "text-mywhite" : "text-mywhite"}`}>
                        <Link href="/">IK</Link>
                    </button>
                    <button className="pl-[20px] active:bg-none focus:outline-none max-w-full" onClick={menuHandleClick}>
                        <svg className="stroke-mywhite w-[16px] sm:w-[20px]" xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none"><path strokeWidth="2" d="M0 1h20M0 6h20M0 11h20" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </button>
                </div>
            </nav>
            {menuOpen &&
                <div id="opened-menu" className='absolute min-w-[210px] z-[3] top-[52px] left-0 sm:top-[85px] pb-[70px] border-t-[2px] border-white overflow-y-scroll flex flex-col justify-center items-center text-center gap-y-[15dvh] w-full h-[100dvh] bg-black'>
                    <div className='flex flex-col justify-between h-[35dvh]'>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="/#projects" onClick={menuHandleClick}>
                                Projects & Work
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="/#hard-skills" onClick={menuHandleClick}>
                                Hard Skills
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="/#soft-skills" onClick={menuHandleClick}>
                                Soft Skills
                            </Link>
                        </div>
                        <div>
                            <Link className='text-white text-[28px] font-semibold' href="/#contact-me" onClick={menuHandleClick}>Contact me</Link>
                        </div>
                    </div>
                    <svg className='mt-[7dvh] sm:mt-[3dvh] size-[30px] sm:size-[50px]' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" onClick={menuHandleClick} ><path stroke="#fff" strokeWidth="2" d="M18.371 18.37 31.63 31.63M18.371 31.63 31.63 18.37" vectorEffect="non-scaling-stroke" /><circle cx="25" cy="25" r="24" stroke="#fff" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg>
                </div>
            }
        </div>
    );
};

export function Footer(props) {
    const currentYear = (new Date()).getFullYear();

    return (
        <footer className="flex flex-col min-w-[210px] w-full overflow-hidden sm:grid sm:grid-cols-2 sm:grid-rows-[minmax(1fr,_30px)_minmax(1fr,_20px)] sm:gap-x-2 border-t-[2px] sm:border-t-[3px] pl-[30px]  sm:px-[50px] lg:px-[80px] pt-[50px] pb-[30px] sm:pb-[50px] border-black ">
            <p className="sm:col-start-1 pb-[30px] sm:p-0 text-[22px] text-left sm:text-[28px] font-semibold leading-tight overflow-hidden"><Link href="/">Ilia Kalugin</Link></p>
            <div className="w-full sm:self-start sm:col-start-2 sm:row-start-1 sm:row-span-2 " >
                <ul className="flex flex-row flex-shrink justify-start gap-x-[6dvw] sm:justify-end sm:gap-x-[1.04dvw] ">
                    <li>
                        <div className="items-center text-gray-700 ">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] lg:min-h-[50px] lg:min-w-[50px] "
                                src="/icons/Email.svg"
                                alt="Email icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 rounded-full">
                            <Link href="https://www.linkedin.com/in/ilia-kalugin-18b067118" target="_blank" rel="noopener noreferrer"><Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] lg:min-h-[50px] lg:min-w-[50px] sm:size-[30px]]"
                                src="/icons/Linkedin.svg"
                                alt="LinkedIn icon"
                                width={50}
                                height={50}
                                priority
                            /></Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Link href="https://x.com/Ilya_WebDev" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] lg:min-h-[50px] lg:min-w-[50px] sm:size-[30px]]"
                                    src="/icons/X_Twitter_icon.svg"
                                    alt="X icon"
                                    width={50}
                                    height={50}
                                    priority
                                /></Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] size-[40px] lg:min-h-[50px] lg:min-w-[50px] sm:size-[30px]]"
                                src="/icons/Telegram.svg"
                                alt="Telegram icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                </ul>
            </div >
            <p className="pt-[30px] sm:self-end leading-tight sm:pt-[20px] lg:pt-[15px] sm:p-0 sm:col-start-1 sm:row-start-2 sm:col-span-2 text-[12px] overflow-hidden text-left"><span className="inline-block">© {currentYear}. All rights reserved.</span> <span className="block sm:inline-block">Designed and coded on the house.</span></p>
        </footer >
    );
};