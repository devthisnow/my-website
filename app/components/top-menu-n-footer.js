import Link from 'next/link'

export function TopMenu(props) {
    return (
        <nav className="flex justify-between w-11/12 m-auto items-center bg-white text-white p-4">
            <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Ilya Kalugin</Link></button>
            <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/">Home</Link></button>
            <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Menu</Link></button>
        </nav>
    );
};


export function Footer(props) {
    return (
        <div className="flex justify-between w-11/12 m-auto items-center bg-white text-white p-4">
            <p className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none">© 2024. All rights reserved. Designed and coded on the house.</p>
        </div>
    );
};