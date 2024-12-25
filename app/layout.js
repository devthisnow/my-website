import { GlobalHeaderMenu, Footer } from "./components/top-menu-n-footer";
import "./globals.css";

export const metadata = {
  title: "Ilya Kalugin webdev portfolio",
  description: "This is a portfolio website demonstrating my skillset",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth text-balance ">
      <body className="has-[#opened-menu]:overflow-y-hidden overflow-x-hidden">
        <GlobalHeaderMenu />
        {children}
        <Footer />
      </body>
    </html >
  );
}
