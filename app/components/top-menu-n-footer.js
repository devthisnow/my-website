import Link from 'next/link'
import Image from 'next/image';

export function TopMenu(props) {
    return (
        <header>
            <nav className="flex justify-between w-11/12 m-auto items-center bg-white text-white p-4">
                <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Ilya Kalugin</Link></button>
                <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/">Home</Link></button>
                <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Menu</Link></button>
            </nav>
        </header>
    );
};


export function Footer(props) {
    return (
        <footer className="flex justify-between w-full items-center border-t-[3px] border-black min-h-[150px]">
            <div className="pl-[80px] ">
                <p className="text-[28px] font-semibold ">Ilia Kalugin</p>
                <p className="text-[12px] ">© 2024. All rights reserved. Designed and coded on the house.</p>
            </div>
            <div className="pr-[80px]" >
                <ul className="flex flex-row gap-x-4 ">
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/icons/Email.svg"
                                alt="Email icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/icons/Linkedin.svg"
                                alt="LinkedIn icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/icons/X_Twitter_icon.svg"
                                alt="X icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/icons/Facebook.svg"
                                alt="Facebook icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                                src="/icons/Telegram.svg"
                                alt="Telegram icon"
                                width={50}
                                height={50}
                                priority
                            />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center text-gray-700 mb-4">
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
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
        </footer >
    );
};