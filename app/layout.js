import { Inter } from "next/font/google";
import { TopMenu, Footer } from "./components/top-menu-n-footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ilya Kalugin webdev portfolio",
  description: "This is a portfolio website to demonstrate my skillset",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {/* <TopMenu /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html >
  );
}
