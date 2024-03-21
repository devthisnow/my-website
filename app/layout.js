import { Inter } from "next/font/google";
import Link from 'next/link'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ilya Kalugin webdev portfolio",
  description: "This is a portfolio website to demonstrate my skillset",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between w-11/12 m-auto items-center bg-white text-white p-4">
          <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Ilya Kalugin</Link></button>
          <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/">Home</Link></button>
          <button className="px-4 py-2 rounded-md text-neutral-700 hover:bg-gray-300 focus:outline-none"><Link href="/about">Menu</Link></button>
        </nav>
        {children}</body>
    </html>
  );
}
